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
import { Chart1 } from "@/components/Chart1";
import { LastRecord } from "@/components/LastRecord";

export default function Home() {
  return (
    <section className="bg-[#F3F4F6] w-screen ">
      <nav>
        <NaviBar />
      </nav>
      <div className="flex flex-col items-center gap-10">
        <div className="flex justiy-around mt-4 gap-10">
          <Card />
          <CardIncome />
          <CardExpense />
        </div>
        <div className="flex justify-around gap-10">
          <Chart />
          <Chart1 />
        </div>
        <div className="flex">
          <LastRecord />
        </div>
      </div>

      <div>wefgwiGEFWEF</div>
    </section>
  );
}
