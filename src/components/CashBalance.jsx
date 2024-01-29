import React from "react";
import { Icon } from "./icon";

import { Ellipse1 } from "./Ellipse1";
import { Ellipse2 } from "./Ellipse2";
import { Ellipse3 } from "./Ellipse3";
import { Line } from "./Line";
import { Coin } from "./Coin";
import { EllipseBlue } from "./EllipseBlue";
import { LineBlue } from "./LineBlue";

export const CashBalance = () => {
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
                <Coin />
              </div>
              <div>
                <p className="text-[#0F172A] text-2xl">
                  Set up your cash Balance
                </p>
              </div>
            </div>
            <div>
              <input
                className="bg-gray-100 border-solid border-2 border-gray-300 w-[390px] h-12 rounded-xl pl-4"
                placeholder="Email"
                type="text"
              ></input>
            </div>
          </div>
          <div className="flex flex-col  items-center justify-center gap-8">
            <div className="w-[390px]">
              <p className="text-[#475569] text-xs">
                How much cash do you have in your wallet?
              </p>
            </div>
            <div>
              <button className="bg-[#0166FF] border-solid border-2 border-gray-300 w-[390px] h-12 rounded-xl pl-4 text-white">
                Confirm
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
