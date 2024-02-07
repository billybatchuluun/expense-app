import React from "react";

export const CardExpense = () => {
  return (
    <section>
      <div className="flex flex-col w-[385px] h-[220px] bg-white rounded-2xl ">
        <div className="flex gap-2 px-4 py-6 items-center border-b-2">
          <div className="w-2 h-2 bg-[#0166FF] rounded-full"></div>
          <div className="flex ">
            <p className="font-bold">Total Expense</p>
          </div>
        </div>

        <div className="flex flex-col pl-6 pt-5 pr-6 pb-6 gap-4">
          <div className="flex flex-col gap-1">
            <div className="flex gap-1 text-4xl">
              <div>
                <p>-1,200,000</p>
              </div>
              <div>
                <p>₮</p>
              </div>
            </div>
            <div>
              <p className="text-[#64748B]">Your Income Amount</p>
            </div>
          </div>
          <div className="flex gap-2">
            <div>
              <img src="./Leading icon down.png" alt="" />
            </div>
            <div>
              <p>32% from last month</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
