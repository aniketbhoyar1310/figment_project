import React from "react";

const Card = () => {
  return (
    <div class=" box bg-white  rounded-lg shadow transition-all hover:scale-110 duration-700 dark:bg-black">
      <div class="flex px-3 pt-2 ">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
           stroke-linejoin="round"
          class="lucide lucide-shopping-cart-icon stroke-1.5 w-[24px] h-[28px] text-gray-500"
        >
          <circle cx="8" cy="21" r="1"></circle>
          <circle cx="19" cy="21" r="1"></circle>
          <path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12"></path>
        </svg>
        <div class="ml-auto">
          <p class=" bg-[rgb(77,140,255)] py-[2px] flex rounded-full text-white text-xs pl-2 pr-1 items-center ">
            {" "}
            33%{" "}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              class="lucide lucide-chevron-up-icon stroke-1.5 w-3 h-3 ml-0.5"
            >
              <path d="m18 15-6-6-6 6"></path>
            </svg>
          </p>
        </div>
      </div>
      <div class="mt-3 px-3 text-1.5xl font-medium leading-8">4.710</div>
      <p class="px-3 pb-1 text-slate-500">Item Sales</p>
    </div>
  );
};

export default Card;
