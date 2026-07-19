import { authMiddleware } from "@clerk/nextjs";

// Routes that require login
export default authMiddleware({
  publicRoutes: [
    "/",
    "/discover",
    "/book-detail",
    "/reader",
    "/pricing",
    "/login",
    "/sign-up",
  ],
});

export const config = {
  matcher: ["/((?!.+\\.[\\w]+$|_next).*)", "/", "/(api|trpc)(.*)"],
};
