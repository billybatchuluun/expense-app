import React from "react";
import { Icon } from "./icon";
import { Ellipse1 } from "./Ellipse1";
import { Ellipse2 } from "./Ellipse2";
import { Ellipse3 } from "./Ellipse3";
import { Line } from "./Line";
import { Coin } from "./Coin";
import { EllipseBlue } from "./EllipseBlue";
import { LineBlue } from "./LineBlue";
import { CheckIcon } from "./CheckIcon";
import { EllipseBlue3 } from "./EllipseBlue3";

export const GoodJob = () => {
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
                  <LineBlue />
                  <EllipseBlue />
                  <LineBlue />
                  <EllipseBlue3 />
                </div>
                <div className="flex gap-[60px] items-center justify-center">
                  <p className="text-[#0F172A]">Currency</p>
                  <p className="text-[#0F172A]">Balance</p>
                  <p className="text-[#0F172A]">Finish</p>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col items-center gap-8">
            <div className="flex flex-col gap-3 items-center">
              <div className="flex flex-col gap-4 items-center">
                <div>
                  <CheckIcon />
                </div>
                <div>
                  <p className="text-[#0F172A] text-2xl">Good Job!</p>
                </div>
              </div>
              <div className=" flex w-[390px] justify-center">
                <p className="text-[#475569] flex text-xs justify-center">
                  Your very first account has been created. Now continue to
                  dashboard and start tracking
                </p>
              </div>
            </div>
            <div className="flex flex-col  items-center justify-center gap-8">
              <button className="bg-[#0166FF] border-solid border-2 border-gray-300 w-[390px] h-12 rounded-xl pl-4 text-white">
                Go to Dashboard
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
