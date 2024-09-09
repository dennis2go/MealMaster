import AuthButton from "@/components/header-auth";
import Hero from "@/components/hero";
import SignIn from "@/components/signIn/signIn";
import ConnectSupabaseSteps from "@/components/tutorial/connect-supabase-steps";
import SignUpUserSteps from "@/components/tutorial/sign-up-user-steps";
import { verifySupabase } from "@/utils/supabase/verify-supabase";

export default async function Index() {
  return (
    <div className="flex px-14 pt-20">
      <SignIn />
    </div>
  );
}
