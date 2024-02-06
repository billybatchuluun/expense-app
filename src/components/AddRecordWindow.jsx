import React, { useState } from "react";

export const AddRecordWindow = ({ setIsAddRecordVisible }) => {
  const [isItExpense, setIsItExpense] = useState(true);
  return (
    <section className="bg-white">
      <div className="flex w-[900px] h-20 place-content-between items-center border-b-2 p-3">
        <div>
          <p className="font-bold">Add Record</p>
        </div>
        <button onClick={() => setIsAddRecordVisible(false)}>X</button>
      </div>
      <div className="flex gap-20 mt-5 p-3">
        <div className="flex flex-col gap-5">
          <div className="flex">
            <button
              onClick={() => setIsItExpense(true)}
              className={`${
                isItExpense === true
                  ? "bg-[#0166FF] w-[200px] h-10 rounded-l-lg text-white"
                  : "bg-gray-200 w-[200px] h-10 rounded-l-lg"
              }`}
            >
              Expense
            </button>
            <button
              onClick={() => setIsItExpense(false)}
              className={`${
                isItExpense === true
                  ? "bg-gray-200 w-[200px] h-10 rounded-r-lg"
                  : "bg-green-500 w-[200px] h-10 rounded-r-lg text-white"
              }`}
            >
              Income
            </button>
          </div>
          <div>
            <p>Amount</p>
            <input
              label="Amount"
              className="bg-gray-100 border-solid border-2  w-[400px] h-12 rounded-xl pl-4 mt-5"
              placeholder="₮ 000.00"
              type="text"
            ></input>
          </div>
          <div>
            <p>Category</p>
            <select className="w-[400px] h-12 bg-gray-100  border-solid border-2  font-semibold rounded-xl pl-4 items-center mt-5">
              <option>Income</option>
              <option>Expense</option>
            </select>
          </div>
          <div>
            <p>Date</p>
            <div className="flex gap-10">
              <input
                className="w-[180px] h-12 bg-gray-200 rounded-xl p-4"
                type="date"
              ></input>
              <input
                className="w-[180px] h-12 bg-gray-200 rounded-xl p-4"
                type="date"
              ></input>
            </div>
          </div>
          <div>
            <button
              className={`${
                isItExpense === true
                  ? "bg-[#0166FF] w-[400px] h-10 rounded-lg text-white"
                  : "bg-green-500 w-[400px] h-10 rounded-lg text-white"
              }`}
            >
              + Add Record
            </button>
          </div>
        </div>
        <div>
          <div>
            <p>Payee</p>
            <input
              label="Amount"
              className="bg-gray-100 border-solid border-2  w-[400px] h-12 rounded-xl pl-4 mt-5"
              placeholder="Write here"
              type="text"
            ></input>
          </div>
          <div className="mt-5">
            <p>Note</p>
            <input
              label="Amount"
              className="bg-gray-100 border-solid border-2  w-[400px] h-[260px] rounded-xl pl-4 mt-5"
              placeholder="Write here"
              type="text"
            ></input>
          </div>
        </div>
      </div>
    </section>
  );
};
