import { SessionWrapper } from "@/components/SessionWrapper";
import { auth } from "@/lib/auth";
import SignInPage from "@/components/login/LoginComponents";
import SignOutPage from "@/components/login/SignOutComponents";

export default async function Home() {
  try {
    const session = await auth();
    const isAuthentication = !!session?.user;

    return (
      <div>
        <SessionWrapper>
          {isAuthentication ? <SignOutPage /> : <SignInPage />}
        </SessionWrapper>
      </div>
    );
  } catch (error) {
    console.error("Error fetching session:", error);
    return <div>Error loading the page. Please try again later.</div>;
  }
}
