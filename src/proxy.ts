import { clerkMiddleware, createRouteMatcher } from "@clerk/nextjs/server";

const isPublicRoute = createRouteMatcher([
  "/",
  "/discover",
  "/book-detail",
  "/reader",
  "/pricing",
  "/login",
  "/sign-up",
]);

const hasClerkKey = !!process.env.CLERK_SECRET_KEY;

export default hasClerkKey
  ? clerkMiddleware(async (auth, req) => {
      if (!isPublicRoute(req)) {
        try {
          await auth.protect();
        } catch (err) {
          console.error("Clerk auth.protect error:", err);
        }
      }
    })
  : (req: any) => {
      // Without Clerk configured, let all requests through
      return undefined;
    };

export const config = {
  matcher: ["/((?!.+\\.[\\w]+$|_next).*)", "/", "/(api|trpc)(.*)"],
};
