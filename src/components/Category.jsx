import React from "react";
import { Eyes } from "./Eyes";
import { PlusIcon } from "./PlusIcon";

export const Category = () => {
  return (
    <div className="flex flex-col gap-6">
      <div>
        <p className="font-bold">Category</p>
      </div>
      <div className="flex gap-5 items-center">
        <div className="w-4 h-4">
          <Eyes />
        </div>
        <div>
          <p>Food & Drinks</p>
        </div>
      </div>
      <div className="flex gap-5 items-center">
        <div className="w-4 h-4">
          <Eyes />
        </div>
        <div>
          <p>Shopping</p>
        </div>
      </div>
      <div className="flex gap-5 items-center">
        <div className="w-4 h-4">
          <Eyes />
        </div>
        <div>
          <p>Housing</p>
        </div>
      </div>
      <div className="flex gap-5 items-center">
        <div className="w-4 h-4">
          <Eyes />
        </div>
        <div>
          <p>Transportation</p>
        </div>
      </div>
      <div className="flex gap-5 items-center">
        <div className="w-4 h-4">
          <Eyes />
        </div>
        <div>
          <p>Vehicle</p>
        </div>
      </div>
      <div className="flex gap-5 items-center">
        <div className="w-4 h-4">
          <Eyes />
        </div>
        <div>
          <p>Life & Entertaintment</p>
        </div>
      </div>
      <div className="flex gap-5 items-center">
        <div className="w-4 h-4">
          <Eyes />
        </div>
        <div>
          <p>Comunication, PC</p>
        </div>
      </div>
      <div className="flex gap-5 items-center">
        <div className="w-4 h-4">
          <Eyes />
        </div>
        <div>
          <p>Financial expenses</p>
        </div>
      </div>
      <div className="flex gap-5 items-center">
        <div className="w-4 h-4">
          <Eyes />
        </div>
        <div>
          <p>Investments</p>
        </div>
      </div>
      <div className="flex gap-5 items-center">
        <div className="w-4 h-4">
          <Eyes />
        </div>
        <div>
          <p>Income</p>
        </div>
      </div>
      <div className="flex gap-5 items-center">
        <div className="w-4 h-4">
          <Eyes />
        </div>
        <div>
          <p>Others</p>
        </div>
      </div>
      <div className="flex gap-5 items-center">
        <div className="w-4 h-4">
          <PlusIcon />
        </div>
        <div>
          <p>Add Category</p>
        </div>
      </div>
    </div>
  );
};
