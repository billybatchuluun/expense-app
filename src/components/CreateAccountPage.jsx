import React, { useState } from "react";
import { Icon } from "@/components/icon";

export default function CreateAccountPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const creatingUser = async () => {
    const user = {
      name: name,
      email: email,
      password: password,
    };
    const res = await fetch("http://localhost:8000/signup", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(user),
    });
    alert("Success");
  };

  return (
    <section className="flex">
      <div className="flex w-3/6 justify-center items-center">
        <div className="flex flex-col gap-10 items-center">
          <div>
            <Icon />
          </div>
          <div className="flex flex-col gap-2">
            <div className="flex justify-center">
              <h2 className="text-4xl text-[#0F172A] ">Create Geld account</h2>
            </div>
            <div className="flex justify-center">
              <h3 className="text-base text-[#334155]">
                Sign up below to create your Wallet account
              </h3>
            </div>
          </div>
          <div className="flex flex-col gap-4">
            <input
              onChange={(e) => setName(e.target.value)}
              className="bg-gray-100 border-solid border-2 border-gray-300 w-72 h-12 rounded-xl pl-4"
              placeholder="Name"
              type="text"
            ></input>
            <input
              onChange={(e) => setEmail(e.target.value)}
              className="bg-gray-100 border-solid border-2 border-gray-300 w-72 h-12 rounded-xl pl-4"
              placeholder="Email"
              type="text"
            ></input>
            <input
              onChange={(e) => setPassword(e.target.value)}
              className="bg-gray-100 border-solid border-2 border-gray-300 w-72 h-12 rounded-xl pl-4"
              placeholder="Password"
              type="text"
            ></input>
            <input
              onChange={(e) => setPassword(e.target.value)}
              className="bg-gray-100 border-solid border-2 border-gray-300 w-72 h-12 rounded-xl pl-4"
              placeholder="Re-password"
              type="text"
            ></input>

            <button
              onClick={() => creatingUser()}
              className="bg-[#0166FF] border-solid border-2 border-gray-300 w-72 h-12 rounded-xl pl-4 text-white"
            >
              Sign Up
            </button>
          </div>
          <div className="flex">
            <h3 className="text-base text-[#334155]">Already have account?</h3>
            <a href="/">
              <button className="flex text-[#0166FF] px-3 gap-1">Log In</button>
            </a>
          </div>
        </div>
      </div>
      <div className="w-3/6 h-screen bg-[#0166FF]"></div>
    </section>
  );
}
