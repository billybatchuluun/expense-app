import { SignInPage } from "@/components/SignInPage";
import { CreateAccountPage } from "@/components/CreateAccountPage";
import { LoadingPage } from "@/components/LoadingPage";
import { SelectCurrency } from "@/components/SelectCurrency";
import { MainPage } from "@/components/MainPage";
import { CashBalance } from "@/components/CashBalance";
import { GoodJob } from "@/components/GoodJob";

export default function Home() {
  return (
    <section>
      {/* <SignInPage /> */}
      {/* <CreateAccountPage /> */}
      {/* <LoadingPage /> */}
      <SelectCurrency />
      {/* <MainPage /> */}
      <CashBalance />
      <GoodJob />
    </section>
  );
}
