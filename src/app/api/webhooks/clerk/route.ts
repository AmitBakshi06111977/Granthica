import { Webhook } from "svix";
import { headers } from "next/headers";
import { db } from "@/lib/db";
import { users } from "@/lib/db/schema";
import { eq } from "drizzle-orm";

interface ClerkUserEventData {
  id: string;
  email_addresses: Array<{ id: string; email_address: string }>;
  primary_email_address_id: string | null;
  first_name: string | null;
  last_name: string | null;
  image_url: string | null;
}

interface ClerkWebhookEvent {
  type: string;
  data: ClerkUserEventData;
}

export async function POST(req: Request) {
  const WEBHOOK_SECRET = process.env.CLERK_WEBHOOK_SECRET;

  if (!WEBHOOK_SECRET) {
    console.error("CLERK_WEBHOOK_SECRET is not set");
    return new Response("Webhook secret not configured", { status: 500 });
  }

  // Get Svix headers for signature verification
  const headerPayload = await headers();
  const svix_id = headerPayload.get("svix-id");
  const svix_timestamp = headerPayload.get("svix-timestamp");
  const svix_signature = headerPayload.get("svix-signature");

  if (!svix_id || !svix_timestamp || !svix_signature) {
    return new Response("Missing Svix headers", { status: 400 });
  }

  // Get raw body for signature verification
  const payload = await req.text();
  const body = JSON.parse(payload);

  // Verify the webhook signature
  const wh = new Webhook(WEBHOOK_SECRET);
  let event: ClerkWebhookEvent;

  try {
    event = wh.verify(payload, {
      "svix-id": svix_id,
      "svix-timestamp": svix_timestamp,
      "svix-signature": svix_signature,
    }) as ClerkWebhookEvent;
  } catch (err) {
    console.error("Webhook signature verification failed:", err);
    return new Response("Invalid signature", { status: 400 });
  }

  const { type, data } = event;

  try {
    switch (type) {
      case "user.created":
      case "user.updated": {
        const primaryEmail = data.email_addresses.find(
          (e) => e.id === data.primary_email_address_id
        );
        const email = primaryEmail?.email_address || data.email_addresses[0]?.email_address;
        const fullName = [data.first_name, data.last_name].filter(Boolean).join(" ") || null;

        if (!email) {
          console.error("No email found for Clerk user:", data.id);
          return new Response("No email", { status: 400 });
        }

        // Upsert user (insert if new, update if exists)
        await db
          .insert(users)
          .values({
            id: data.id,
            email,
            fullName,
            avatarUrl: data.image_url,
            updatedAt: new Date(),
          })
          .onConflictDoUpdate({
            target: users.id,
            set: {
              email,
              fullName,
              avatarUrl: data.image_url,
              updatedAt: new Date(),
            },
          });

        console.log(`User ${type}: ${data.id} (${email})`);
        break;
      }

      case "user.deleted": {
        // Cascade delete handles user_books, chat_history, outputs
        await db.delete(users).where(eq(users.id, data.id));
        console.log(`User deleted: ${data.id}`);
        break;
      }

      default:
        console.log(`Unhandled webhook type: ${type}`);
    }
  } catch (err) {
    console.error(`Error handling ${type}:`, err);
    return new Response("Internal error", { status: 500 });
  }

  return new Response("OK", { status: 200 });
}
