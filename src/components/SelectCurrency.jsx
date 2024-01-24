import React from "react";
import { Icon } from "./icon";
import { StepsContainer } from "./StepsContainer";
import { Money } from "./Money";

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
              <StepsContainer />
            </div>
          </div>
          <div className="flex flex-col gap-6 items-center">
            <div className="flex flex-col gap-4 items-center">
              <div>
                <Money />
              </div>
              <div>
                <p>Select base currency</p>
              </div>
            </div>
            <div>
              <select className="w-[500px] h-16 bg-gray-200 text-lg font-semibold rounded-xl p-4 items-center">
                <option>MNT - Mongolian Tugrik</option>
                <option>USD - US Dollar</option>
              </select>
            </div>
          </div>
          <div className="flex flex-col  items-center justify-center gap-8">
            <div className="w-[500px]">
              <p>
                Your base currency should be the one you use most often. All
                transaction in other currencies will be calculated based on this
                one{" "}
              </p>
            </div>
            <div>
              <button className="bg-[#0166FF] border-solid border-2 border-gray-300 w-[500px] h-12 rounded-xl pl-4 text-white">
                Confirm
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
