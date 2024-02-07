import { NaviBar } from "@/components/NaviBar";
import { Eyes } from "@/components/Eyes";
import { PlusIcon } from "@/components/PlusIcon";
import { HaaltLeft } from "@/components/HaaltLeft";
import { HaaltRight } from "@/components/HaaltRight";
import { Yesterday } from "@/components/Yesterday";
import { Today } from "@/components/Today";
import { AddRecordWindow } from "@/components/AddRecordWindow";
import { useState } from "react";
import { Category } from "@/components/Category";

export default function Records() {
  const [isAddRecordVisible, setIsAddRecordVisible] = useState(false);
  return (
    <section className="bg-[#edeff2] w-screen ">
      <nav>
        <NaviBar />
      </nav>
      <div className="flex mt-10 px-[120px] justify-center gap-8">
        <div className="flex bg-slate-100 w-[282px] rounded-2xl ">
          {isAddRecordVisible === true && (
            <div className="absolute mt-64, ml-64">
              <AddRecordWindow setIsAddRecordVisible={setIsAddRecordVisible} />
            </div>
          )}
          <div className="flex flex-col  gap-8 pl-6">
            <div className="mt-8">
              <p className="text-2xl font-bold">Records</p>
            </div>
            <button
              onClick={() => setIsAddRecordVisible(!isAddRecordVisible)}
              className="flex bg-[#0166FF] text-white rounded-[20px] w-[250px] h-9 justify-center items-center"
            >
              + Add
            </button>
            <input
              className="bg-white border-solid border-2 border-gray-300 w-[250px] h-9 rounded-xl pl-4"
              placeholder="Search"
              type="text"
            ></input>
            <div className="flex flex-col gap-6">
              <p className="font-bold">Types</p>
              <label className="flex gap-5">
                <input type="radio" value="All" checked={false} />
                All
              </label>
              <label className="flex gap-5">
                <input type="radio" value="Income" checked={false} />
                Income
              </label>
              <label className="flex gap-5">
                <input type="radio" value="Expense" checked={false} />
                Expense
              </label>
            </div>
            <Category />

            <div className="flex flex-col gap-6">
              <div>
                <p className="font-bold">Amount Range</p>
              </div>
              <div className="flex gap-4">
                <input
                  className="bg-gray-100 border-solid border-2 border-gray-300 w-[110px] h-9 rounded-lg pl-4"
                  type="text"
                ></input>
                <input
                  className="bg-gray-100 border-solid border-2 border-gray-300 w-[110px] h-9 rounded-lg pl-4"
                  type="text"
                ></input>
              </div>
            </div>
          </div>
        </div>
        <div className="w-[900px]  p-10 bg-slate-100 rounded-2xl">
          <div>
            <div className="flex place-content-between items-center">
              <div className="flex items-center gap-4">
                <div className="flex  bg-slate-300 w-10 h-10  justify-center items-center  rounded-md">
                  <div className="flex w-4 h-4 ">
                    <HaaltLeft />
                  </div>
                </div>
                <div>
                  <p>Last 30 days</p>
                </div>
                <div className="flex  bg-slate-300 w-10 h-10 justify-center items-center  rounded-md">
                  <div className="flex w-4 h-4 ">
                    <HaaltRight />
                  </div>
                </div>
              </div>
              <div>
                <div className="flex bg-white rounded-md w-[200px] h-10 items-center border-gray-300 justify-center">
                  <p className="font-bold "> Newest first</p>
                </div>
              </div>
            </div>
            <div className="flex place-content-between bg-white h-10 items-center p-5 rounded-md mt-10">
              <div className="flex gap-5 ">
                <div className="flex items-center">
                  <input className="w-6 h-6" type="checkbox" />
                </div>
                <div>
                  <p>Select All</p>
                </div>
              </div>
              <div>
                <p>-35,500₮</p>
              </div>
            </div>
          </div>
          <Today />
          <Yesterday />
        </div>
      </div>

      <div></div>
    </section>
  );
}
