import { signInAction } from "@/app/actions";
import { FormMessage, Message } from "@/components/form-message";
import { SubmitButton } from "@/components/submit-button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Link from "next/link";

export default function SignIn() {
  return (
    // <div className=" flex flex-col items-center w-80">
    <form className="flex flex-col items-center w-full px-40 lg:px-72 ">
      <div className=" flex flex-col w-full min-w-72 items-center">
        <h1 className="text-2xl font-medium">Sign in</h1>
        <p className="text-xs text-foreground/70 my-2">
          Don't have an account?{" "}
          <Link
            className="text-foreground font-medium underline"
            href="/sign-up"
          >
            Sign up
          </Link>
        </p>
        <div className="flex flex-col gap-2 [&>input]:mb-3 mt-8 text-foreground/70 w-full">
          <Label htmlFor="email">Email</Label>
          <Input name="email" placeholder="you@example.com" required />
          <div className="flex justify-between items-center text-foreground/70 mt-4">
            <Label htmlFor="password">Password</Label>
            <Link
              className="text-xs text-foreground underline"
              href="/forgot-password"
            >
              Forgot Password?
            </Link>
          </div>
          <Input
            type="password"
            name="password"
            placeholder="Your password"
            required
          />
          <SubmitButton pendingText="Signing In..." formAction={signInAction}>
            Sign in
          </SubmitButton>
        </div>
      </div>
    </form>
    // </div>
  );
}
