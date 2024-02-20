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
    <div className="container mx-auto  px-10 py-1">
      <div className="relative w-full flex flex-col shadow-sm px-1 py-1 ">
        <div className="flex flex-wrap items-center p-1">
          <div className="relative w-full px-2 max-w-full">
            <div className="flex justify-between items-center ">
              <div>
                <button
                  type="button"
                  className={`text-gray-500 border focus:ring-3 focus:outline-none font-medium rounded-lg text-sm px-6 py-2.5 text-center me-2 mb-2 ${
                    activeButton === "NoticeOrders"
                      ? "bg-blue-500 text-white"
                      : ""
                  }`}
                  onClick={() => handleButtonClick("NoticeOrders")}
                >
                  Notice & Orders
                </button>
                <button
                  type="button"
                  className={`text-gray-500 border focus:ring-3 focus:outline-none font-medium rounded-lg text-sm px-6 py-2.5 text-center me-2 mb-2 ${
                    activeButton === "MergedNotice"
                      ? "bg-blue-500 text-white"
                      : ""
                  }`}
                  onClick={() => handleButtonClick("MergedNotice")}
                >
                  Merged Notices
                </button>
                <div className="mt-3">
                  <h4 className=" table-header-group text-xl my-2 ">
                    View Notices and Orders
                  </h4>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    {/* second conrainer table and dropdown*/}

    <div className="container mx-auto px-10 py-7 shadow-md">
      <div className="relative w-full flex flex-col shadow-lg">
        <div className="flex items-center px-1 py-1">
          <div className="relative w-full px-3 max-w-full">
            <div className="flex space-x-10">
              {/* First dropdown */}
              <div className="flex-none ">
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
                    class="mt-1 p-2 block w-full border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
                  />
                </div>
                <button
                  type="button"
                  className={`text-gray-500 border focus:ring-3 focus:outline-none font-medium rounded-lg text-sm px-6 py-2.5 text-center me-2 mb-2 ${
                    activeButton === "Clear" ? "bg-blue-500 text-white" : ""
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
        <div className="flex px-5 justify-between">
          <button
            type="button"
            className={`text-gray-500 border focus:ring-3 focus:outline-none font-medium rounded-lg text-sm  px-10 py-2.5 text-center me-2 mb-2 ${
              activeButton === " Updated Status"
                ? "bg-blue-500 text-white"
                : ""
            }`}
            onClick={() => handleButtonClick(" Updated Status")}
          >
            Updated Status
          </button>
          <div className=" justify-items: end">
            <button
              type="button"
              className={`text-gray-500 border focus:ring-3  focus:outline-none font-medium rounded-lg text-sm px-6 py-2.5 text-center me-2 mb-2 ${
                activeButton === "Add Notice" ? "bg-blue-500 text-white" : ""
              }`}
              onClick={() => handleButtonClick("Add Notice")}
            >
              Add Notice
            </button>
            <button
              type="button"
              className={`text-gray-500 border focus:ring-3 focus:outline-none font-medium rounded-lg text-sm px-6 py-2.5 text-center me-1 mb-1 ${
                activeButton === "Export to Excel"
                  ? "bg-blue-500 text-white"
                  : ""
              }`}
              onClick={() => handleButtonClick("Export to Excel")}
            >
              Export to Excel
            </button>
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
            <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
              <tr>
                <th scope="col" className="px-6 py-3">
                  Product name
                </th>
                <th scope="col" className="px-6 py-3">
                  Color
                </th>
                <th scope="col" className="px-6 py-3">
                  Category
                </th>
                <th scope="col" className="px-6 py-3">
                  Price
                </th>
                <th scope="col" className="px-6 py-3">
                  Order
                </th>
                <th scope="col" className="px-6 py-3">
                  Notice
                </th>
              </tr>
            </thead>
            <tbody>
              <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                <td className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                  Apple MacBook Pro 17"
                </td>
                <td className="px-6 py-4">Silver</td>
                <td className="px-6 py-4">Laptop</td>
                <td className="px-6 py-4">$2999</td>
                <td className="px-6 py-4">$2999</td>
              </tr>
              <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                <td className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                  Microsoft Surface Pro
                </td>
                <td className="px-6 py-4">White</td>
                <td className="px-6 py-4">Laptop PC</td>
                <td className="px-6 py-4">$1999</td>
                <td className="px-6 py-4">$1999</td>
                <td className="px-6 py-4">$1999</td>
              </tr>
              <tr className="bg-white dark:bg-gray-800">
                <td className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                  Magic Mouse 2
                </td>
                <td className="px-6 py-4">Black</td>
                <td className="px-6 py-4">Accessories</td>
                <td className="px-6 py-4">$99</td>
              </tr>
              <tr className="bg-white dark:bg-gray-800">
                <td className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                  Magic Mouse 2
                </td>
                <td className="px-6 py-4">Black</td>
                <td className="px-6 py-4">Accessories</td>
                <td className="px-6 py-4">$99</td>
              </tr>
              <tr className="bg-white dark:bg-gray-800">
                <td className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                  Magic Mouse 2
                </td>
                <td className="px-6 py-4">Black</td>
                <td className="px-6 py-4">Accessories</td>
                <td className="px-6 py-4">$99</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
  </div>
  )
}

export default Notice