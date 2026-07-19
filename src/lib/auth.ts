import { auth, currentUser } from "@clerk/nextjs/server";
import { db } from "@/lib/db";
import { users } from "@/lib/db/schema";
import { eq } from "drizzle-orm";

/**
 * Get the current user from Clerk. If the user is signed in but doesn't exist
 * in our database yet (e.g., webhook hasn't fired), create them on demand.
 */
export async function getCurrentUser() {
  const { userId } = await auth();
  if (!userId) return null;

  // Check if user exists in our DB
  let user = await db.query.users.findFirst({
    where: eq(users.id, userId),
  });

  // If not, sync from Clerk (webhook might be delayed or missed)
  if (!user) {
    const clerkUser = await currentUser();
    if (!clerkUser) return null;

    const primaryEmail = clerkUser.emailAddresses.find(
      (e) => e.id === clerkUser.primaryEmailAddressId
    );
    const email = primaryEmail?.emailAddress || clerkUser.emailAddresses[0]?.emailAddress;
    if (!email) return null;

    const fullName =
      [clerkUser.firstName, clerkUser.lastName].filter(Boolean).join(" ") || null;

    const [inserted] = await db
      .insert(users)
      .values({
        id: userId,
        email,
        fullName,
        avatarUrl: clerkUser.imageUrl,
      })
      .onConflictDoNothing()
      .returning();

    user = inserted || (await db.query.users.findFirst({ where: eq(users.id, userId) })) || null;
  }

  return user;
}

export async function requireUser() {
  const user = await getCurrentUser();
  if (!user) {
    throw new Error("Unauthorized");
  }
  return user;
}
