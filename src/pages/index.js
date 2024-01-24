import { SignInPage } from "@/components/SignInPage";
import { CreateAccountPage } from "@/components/CreateAccountPage";
import { LoadingPage } from "@/components/LoadingPage";
import { SelectCurrency } from "@/components/SelectCurrency";

export default function Home() {
  return (
    <section>
      <SignInPage />
      <CreateAccountPage />
      <LoadingPage />
      <SelectCurrency />
    </section>
  );
}
