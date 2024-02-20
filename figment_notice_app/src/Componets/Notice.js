import React, { useState } from "react";
import Navbar from "./Navbar";
import { Link } from "react-router-dom";


const Notice = () => {
    const [activeButton, setActiveButton] = useState("NoticeOrders");

  const handleButtonClick = (buttonName) => {
    setActiveButton(buttonName);
  };
  return (
    <div>
    <Navbar/>
    <div>
    {/* Container for buttons and header */}
    <nav className="flex px-4 mt-3 mb-2" aria-label="Breadcrumb ">
          <ol className="inline-flex items-center space-x-1 md:space-x-2 rtl:space-x-reverse">
            <li className="inline-flex items-center">
              <Link
                to="/dashboard"
                className="inline-flex items-center text-sm font-medium text-gray-700 hover:text-blue-600 dark:text-gray-400 "
              >
                Dashboard
              </Link>
            </li>
            <li>
              <div className="flex items-center">
                <svg
                  className="rtl:rotate-180 w-3 h-3 text-gray-400 mx-1"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 6 10"
                >
                  <path
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="m1 9 4-4-4-4"
                  />
                </svg>
                <Link
                  href="#"
                  className="ms-1 text-sm font-medium  hover:text-black md:ms-2 text-[rgb(77,140,255)] "
                >
                  Notice
                </Link>
              </div>
            </li>
          </ol>
        </nav>
    

    {/* second conrainer table and dropdown*/}

    <div className="container mx-auto px-10 py-7  ">
      <div className="relative w-full flex flex-col shadow-lg rounded-md">
        <div className="flex items-center px-1 py-1">
          <div className="relative w-full px-3 max-w-full py-2">
            <div className="flex space-x-10 bg-sky-50 py-2 rounded-md">
              {/* First dropdown */}
              <div className="flex-none px-2">
                <label
                  htmlFor="category"
                  className="block text-sm  font-lato-bold text-gray-700"
                >
                  Type <span className=" text-red-600"></span>
                </label>
                <select
                  name="category"
                  id="category"
                  className="mt-1 p-2 block w-full border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
                >
                  <option value="">Select</option>
                  <option value="Corporate">All</option>
                  <option value="Advocate">Notice</option>
                  <option value="CA">Order</option>
                  <option value="CMA">Additional Notice</option>
                  <option value="CS">Refund</option>
                </select>
              </div>

              {/* Second dropdown */}
              <div className="flex-none">
                <label
                  htmlFor="category"
                  className="block text-sm  font-lato-bold text-gray-700"
                >
                  Status <span className=" text-red-600"></span>
                </label>
                <select
                  name="category"
                  id="category"
                  className="mt-1 p-2 block w-full border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
                >
                  <option class="text-blue-600" value="">
                    Select
                  </option>
                  <option value="Corporate">All</option>
                  <option value="Advocate">Open</option>
                  <option value="CA">Closed</option>
                  <option value="CMA">Replied</option>
                </select>
              </div>

              {/* Third dropdown */}
              <div className="flex-none">
                <label
                  htmlFor="category"
                  className="block text-sm  font-lato-bold text-gray-700"
                >
                  Filter <span className=" text-red-600"></span>
                </label>
                <select
                  name="category"
                  id="category"
                  className="mt-1 p-2 block w-full border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
                >
                  <option value="">Select</option>
                  <option value="Corporate">Last 24 Hours</option>
                  <option value="Advocate">Last 15 Days</option>
                  <option value="CA">Notice Due In 7 Days</option>
                  <option value="CMA">Over Due Notices</option>
                  <option value="CS">Cutom Selection </option>
                </select>
              </div>
              {/* Forth dropdown */}
              <div className="flex-none">
                <label
                  htmlFor="category"
                  className="block text-sm  font-lato-bold text-gray-700"
                >
                  Filter <span className=" text-red-600"></span>
                </label>
                <select
                  name="category"
                  id="category"
                  className="mt-1 p-2 block w-full border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
                >
                  <option value="">Select</option>
                  <option value="Corporate">Last 24 Hours</option>
                  <option value="Advocate">Last 15 Days</option>
                  <option value="CA">Notice Due In 7 Days</option>
                  <option value="CMA">Over Due Notices</option>
                  <option value="CS">Cutom Selection </option>
                </select>
              </div>
              <div className="flex items-center space-x-8">
                <div class="mb-7">
                  <label
                    for="input"
                    class="block text-sm font-lato-bold text-gray-700"
                  >
                    Search
                  </label>
                  <input
                    type="text"
                    id="input"
                    class="mt-1 py-1 block w-full border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
                  />
                </div>
                <button
                  type="button"
                  className={`text-red-500 border focus:ring-3 focus:outline-none font-medium  text-sm  py-1 text-center  mb-2 me-1 rounded-md px-3 outline-offset-2 bg-white ${
                    activeButton === "Clear" ? "text-black" : "text-blue-500"
                  }`}
                  onClick={() => handleButtonClick("Clear")}
                >
                  Clear
                </button>
              </div>
            </div>

            {/* Button to clear selections */}
          </div>
        </div>
        {/* Table */}
        <div className="flex px-3 justify-between">
          <button
            type="button"
            className={`text-gray-500 border focus:ring-3 focus:outline-none font-medium  text-sm   text-center  mb-2 me-1 rounded-md px-3 outline-offset-2 ${
              activeButton === " Updated Status"
                ? "bg-green-500 text-white"
                : ""
            }`}
            onClick={() => handleButtonClick(" Updated Status")}
          >
            Updated Status
          </button>
          <div className=" justify-items: end">
           
            <button
              type="button"
              className={`text-gray-500 border focus:ring-3 py-1.5 focus:outline-none font-medium  text-sm   text-center  mb-2 me-1 rounded-md px-3 outline-offset-2 ${
                activeButton === "Export to Excel"
                  ? "bg-green-500 text-white"
                  : ""
              }`}
              onClick={() => handleButtonClick("Export to Excel")}
            >
              Export to Excel
            </button>
          </div>
        </div>

        <div className="overflow-x-auto px-3">
          
          <p className="my-2 ms-1 text-red-500">There are no records to display</p>

        </div>
      </div>
    </div>
  </div>
  </div>
  )
}

export default Notice