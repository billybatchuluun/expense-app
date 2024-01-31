import React from "react";

export const NaviBar = () => {
  return (
    <section>
      <div className="flex justify-between items-center px-[120px] py-4 bg-white">
        <div className="flex gap-6">
          <img src="./Vector.png"></img>
          <p className="heading-4">Dashboard</p>
          <p>Records</p>
        </div>
        <div className="flex items-center gap-6">
          <button className="flex bg-[#0166FF] text-white rounded-[20px] w-[100px] h-9 justify-center items-center">
            + Record
          </button>
          <img
            className="w-24 rounded-full"
            src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"
          />
        </div>
      </div>
    </section>
  );
};
