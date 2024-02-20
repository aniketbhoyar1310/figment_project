import React, { useRef, useState } from 'react'
import Navbar from './Navbar';
import { Link } from 'react-router-dom';

const Submission = () => {
    const [activeButton, setActiveButton] = useState("NoticeOrders");
    const startDateRef = useRef(null);
    const endDateRef = useRef(null);
  
    const handleButtonClick = (buttonName) => {
      setActiveButton(buttonName);
      // Clear the date inputs
      if (startDateRef.current && endDateRef.current) {
        startDateRef.current.value = "";
        endDateRef.current.value = "";
      }
    };
  return (
    <div>
        <Navbar/>
    {/* Container for buttons and header */}
    <nav className="flex px-4 mt-3" aria-label="Breadcrumb ">
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
                  className="ms-1 text-sm font-medium hover:text-black md:ms-2 text-[rgb(77,140,255)] "
                >
                  Submission
                </Link>
              </div>
            </li>
          </ol>
        </nav>

    {/* Second container for table and dropdowns */}
    <div className="container mx-auto px-10 py-7 shadow-md ">
      <div className="relative w-full flex flex-col shadow-lg ">
        <div className="flex items-center ">
          <div className="relative w-full px-3 max-w-full ">
            <h4 className="table-header-group text-xl my-2 ">
              View My Submission
            </h4>
            <div className="flex space-x-10 ">
              {/* calender*/}
              <div className="flex items-center">
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                    <svg
                      className="w-4 h-4 text-gray-500 dark:text-gray-400"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z" />
                    </svg>
                  </div>
                  <input
                    ref={startDateRef}
                    name="start"
                    type="text"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 py-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="Select date start"
                  />
                </div>
                <span className="mx-4 text-gray-500">to</span>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                    <svg
                      className="w-4 h-4 text-gray-500 dark:text-gray-400"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z" />
                    </svg>
                  </div>
                  <input
                    ref={endDateRef}
                    name="end"
                    type="text"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 py-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="Select date end"
                  />
                </div>
              </div>

              {/* clear and serach  button*/}
              <div className="flex items-center space-x-8">
                <div className="mb-7">
                  <label
                    htmlFor="input"
                    className="block text-sm font-lato-bold text-gray-700"
                  >
                    Search
                  </label>
                  <input
                    type="text"
                    id="input"
                    className="mt-1 p-2 block w-full border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
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
          </div>
        </div>
         {/* Button to export to Excel */}
         <div className="flex px-5 justify-end">
          <button
            type="button"
            className={`flex items-center text-gray-500 border focus:ring-3 focus:outline-none font-medium rounded-lg text-sm px-6 py-2.5 text-center me-1 mb-1 ${
              activeButton === "Export to Excel"
                ? "bg-blue-500 text-white"
                : ""
            }`}
            onClick={() => handleButtonClick("Export to Excel")}
          >
            <svg
              className="w-4 h-4 mr-2"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
            >
              <path d="M13 8V2H7v6H2l8 8 8-8h-5zM0 18h20v2H0v-2z" />
            </svg>
            Export to Excel
          </button>
        </div>

        {/* Table */}
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
  )
}

export default Submission