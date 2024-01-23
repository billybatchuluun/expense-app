import React from "react";
import { Icon } from "@/components/icon";

export const SignInPage = () => {
  return (
    <section className="flex">
      <div className="flex w-3/6 justify-center items-center">
        <div className="flex flex-col gap-10 items-center">
          <div>
            <Icon />
          </div>
          <div className="flex flex-col gap-2">
            <div className="flex justify-center">
              <h2 className="text-4xl text-[#0F172A] ">Welcome Back</h2>
            </div>
            <div className="flex justify-center">
              <h3 className="text-base text-[#334155]">
                Welcome back, Please enter your details
              </h3>
            </div>
          </div>
          <div className="flex flex-col gap-4">
            <input
              className="bg-gray-100 border-solid border-2 border-gray-300 w-72 h-12 rounded-xl pl-4"
              placeholder="Email"
              type="text"
            ></input>
            <input
              className="bg-gray-100 border-solid border-2 border-gray-300 w-72 h-12 rounded-xl pl-4"
              placeholder="Password"
              type="text"
            ></input>
            <button className="bg-[#0166FF] border-solid border-2 border-gray-300 w-72 h-12 rounded-xl pl-4 text-white">
              Log in
            </button>
          </div>
          <div className="flex">
            <h3 className="text-base text-[#334155]">Don’t have account?</h3>
            <button className="flex text-[#0166FF] px-3 gap-1">Sign Up</button>
          </div>
        </div>
      </div>
      <div className="w-3/6 h-screen bg-[#0166FF]"></div>
    </section>
  );
};
