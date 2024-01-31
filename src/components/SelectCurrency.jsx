import React from "react";
import { Icon } from "./icon";

import { Money } from "./Money";
import { Ellipse1 } from "./Ellipse1";
import { Ellipse2 } from "./Ellipse2";
import { Ellipse3 } from "./Ellipse3";
import { Line } from "./Line";
import { CashBalance } from "./CashBalance";

export const SelectCurrency = () => {
  return (
    <section>
      <div>
        <div className="flex flex-col gap-[141px]">
          <div className="flex flex-col gap-12 items-center mt-10">
            <div>
              <Icon />
            </div>
            <div>
              <div className="flex flex-col items-center gap-1">
                <div className="flex justiy-center items-center">
                  <Ellipse1 />
                  <Line />
                  <Ellipse2 />
                  <Line />
                  <Ellipse3 />
                </div>
                <div className="flex gap-[60px] items-center justify-center">
                  <p className="text-[#0F172A]">Currency</p>
                  <p className="text-[#0F172A]">Balance</p>
                  <p className="text-[#0F172A]">Finish</p>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-6 items-center">
            <div className="flex flex-col gap-4 items-center">
              <div>
                <Money />
              </div>
              <div>
                <p className="text-[#0F172A] text-2xl">Select base currency</p>
              </div>
            </div>
            <div>
              <select className="w-[390px] h-16 bg-gray-200 text-lg font-semibold rounded-xl p-4 items-center">
                <option>MNT - Mongolian Tugrik</option>
                <option>USD - US Dollar</option>
              </select>
            </div>
          </div>
          <div className="flex flex-col  items-center justify-center gap-8">
            <div className="w-[390px]">
              <p className="text-[#475569] text-xs">
                Your base currency should be the one you use most often. All
                transaction in other currencies will be calculated based on this
                one
              </p>
            </div>
            <div>
              <a href="/cashbalance">
                <button className="bg-[#0166FF] border-solid border-2 border-gray-300 w-[390px] h-12 rounded-xl pl-4 text-white">
                  Confirm
                </button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
