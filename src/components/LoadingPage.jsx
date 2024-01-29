import React from "react";
import { LoadingIcon } from "./LoadingIcon";

export const LoadingPage = () => {
  return (
    <section className="flex">
      <div className="flex w-screen h-screen justify-center items-center">
        <div className="flex flex-col gap-12 ">
          <div className="flex p-2.5 items-center gap-[18px]">
            <div>
              <img src="./Vectorbig.png"></img>
            </div>
            <div>
              <img src="./Geldbig.png"></img>
            </div>
          </div>
          <div className="flex flex-col gap-4 justify-center items-center">
            <div>
              <LoadingIcon />
            </div>
            <div>
              <p className="text-base">Түр хүлээнэ үү...</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
