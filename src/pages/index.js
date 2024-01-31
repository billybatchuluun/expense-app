import { SignInPage } from "@/components/SignInPage";
import { CreateAccountPage } from "@/components/CreateAccountPage";
import { LoadingPage } from "@/components/LoadingPage";
import { SelectCurrency } from "@/components/SelectCurrency";
import { MainPage } from "@/components/MainPage";
import { CashBalance } from "@/components/CashBalance";
import { GoodJob } from "@/components/GoodJob";
import { NaviBar } from "@/components/NaviBar";
import { Card } from "@/components/Card";
import { CardIncome } from "@/components/CardIncome";
import { CardExpense } from "@/components/CardExpense";
import { Chart } from "@/components/Chart";

export default function Home() {
  return (
    <section className="bg-[#F3F4F6]">
      <nav>
        <NaviBar />
      </nav>
      <div>
        <div className="flex place-content-around mt-4">
          <Card />
          <CardIncome />
          <CardExpense />
          <Chart />
        </div>
      </div>

      <div></div>
    </section>
  );
}
