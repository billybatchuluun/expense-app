import React from "react";
import { CardIcon } from "./CardIcon";
import { CardCash } from "./CardCash";

export const Card = () => {
  return (
    <section>
      <div className="flex flex-col w-[385px] h-[220px] bg-[url('/nature.jpeg')] rounded-2xl place-content-between p-9 ">
        <div>
          <CardIcon />
        </div>

        <div className="place-content-between items-center flex">
          <div>
            <h2 className="opacity-50 text-white">Cash</h2>
            <h3 className="text-white text-2xl">10,000.00</h3>
          </div>
          <CardCash />
        </div>
      </div>
    </section>
  );
};
