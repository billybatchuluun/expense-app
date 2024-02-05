import React from "react";
import { EatIcon } from "./EatIcon";
import { HomeIcon } from "./HomeIcon";

export const Today = () => {
  return (
    <div className="mt-5">
      <p className="font-bold">Today</p>
      <div className="bg-white rounded-lg mt-5">
        <div className="flex place-content-between items-center p-3">
          <div className="flex items-center gap-5">
            <div className="flex items-center">
              <input className="w-6 h-6" type="checkbox" />
            </div>

            <div className="w-7 h-7">
              <HomeIcon />
            </div>
            <div className="flex flex-col gap-3">
              <div>
                <p>Lending & Renting</p>
              </div>
              <div>
                <p className="text-sm">14:00</p>
              </div>
            </div>
          </div>
          <div>
            <p className="flex text-green-500">-1,000₮</p>
          </div>
        </div>
      </div>
      <div className="bg-white rounded-lg mt-5">
        <div className="flex place-content-between items-center p-3">
          <div className="flex items-center gap-5">
            <div className="flex items-center">
              <input className="w-6 h-6" type="checkbox" />
            </div>

            <div className="w-7 h-7 ">
              <EatIcon />
            </div>
            <div className="flex flex-col gap-3">
              <div>
                <p>Food & Drinks</p>
              </div>
              <div>
                <p className="text-sm">14:00</p>
              </div>
            </div>
          </div>
          <div>
            <p className="flex text-red-500">-1,000₮</p>
          </div>
        </div>
      </div>
      <div className="bg-white rounded-lg mt-5">
        <div className="flex place-content-between items-center p-3">
          <div className="flex items-center gap-5">
            <div className="flex items-center">
              <input className="w-6 h-6" type="checkbox" />
            </div>

            <div className="w-7 h-7 ">
              <EatIcon />
            </div>
            <div className="flex flex-col gap-3">
              <div>
                <p>Food & Drinks</p>
              </div>
              <div>
                <p className="text-sm">14:00</p>
              </div>
            </div>
          </div>
          <div>
            <p className="flex text-red-500">-1,000₮</p>
          </div>
        </div>
      </div>
      <div className="bg-white rounded-lg mt-5">
        <div className="flex place-content-between items-center p-3">
          <div className="flex items-center gap-5">
            <div className="flex items-center">
              <input className="w-6 h-6" type="checkbox" />
            </div>

            <div className="w-7 h-7 ">
              <EatIcon />
            </div>
            <div className="flex flex-col gap-3">
              <div>
                <p>Food & Drinks</p>
              </div>
              <div>
                <p className="text-sm">14:00</p>
              </div>
            </div>
          </div>
          <div>
            <p className="flex text-red-500">-1,000₮</p>
          </div>
        </div>
      </div>
      <div className="bg-white rounded-lg mt-5">
        <div className="flex place-content-between items-center p-3">
          <div className="flex items-center gap-5">
            <div className="flex items-center">
              <input className="w-6 h-6" type="checkbox" />
            </div>

            <div className="w-7 h-7 ">
              <EatIcon />
            </div>
            <div className="flex flex-col gap-3">
              <div>
                <p>Food & Drinks</p>
              </div>
              <div>
                <p className="text-sm">14:00</p>
              </div>
            </div>
          </div>
          <div>
            <p className="flex text-red-500">-1,000₮</p>
          </div>
        </div>
      </div>
    </div>
  );
};
