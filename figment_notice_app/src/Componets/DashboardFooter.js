import React, { useState } from "react";
import AddAssess from "./AddAssess";

const DashboardFooter = () => {
  return (
    <div className="container-fluid py-2 bg-sky-50 ">
      <div className="row px-2">
        <div className="col-lg-7 col-md-12 col-sm-12 my-2">
          <div className="invoice-list-wrapper ">
            <div className="gst-dashboard-company-list-height card px-3 py-2 shadow">
              <div className="invoice-list-table-header px-2 w-100 py-1">
                <div className="row py-2.5 px-1 bg-sky-50 rounded-lg">
                  <div className="align-items-center col">
                    <span id="addCompany" style={{ cursor: "default" }}>
                      <button
                        type="button"
                        className="bg-white me-1 rounded-sm px-1 outline outline-1 outline-offset-2"
                      >
                        <AddAssess />
                      </button>
                    </span>
                    <span id="importCompany" style={{ cursor: "default" }}>
                      <button
                        type="button"
                        className="bg-white mx-3 my-1  rounded-sm px-1 outline outline-1 outline-offset-2"
                      >
                        Import Company
                      </button>
                    </span>
                    <span id="downloadTemplate">
                      <button
                        type="button"
                        className="bg-white  me-2 my-1  rounded-sm px-1 outline outline-1 outline-offset-2"
                      >
                        Download Template
                      </button>
                    </span>
                    <button
                      type="button"
                      className="bg-white me-1 float-end my-1  rounded-sm px-1 outline outline-1 outline-offset-2"
                    >
                      Sync All
                    </button>
                  </div>
                </div>
              </div>
              <div className="row px-md-2 py-1 my-1">
                <ul className="my-1">
                  <li className="flex px-4">
                    <div className="w-9 h-9 rounded-full flex-shrink-0 bg-[rgb(77,140,255)] my-2 mr-3">
                      <svg
                        className="w-9 h-9 fill-current text-white"
                        viewBox="0 0 36 36"
                      >
                        <path d="M18 10c-4.4 0-8 3.1-8 7s3.6 7 8 7h.6l5.4 2v-4.4c1.2-1.2 2-2.8 2-4.6 0-3.9-3.6-7-8-7zm4 10.8v2.3L18.9 22H18c-3.3 0-6-2.2-6-5s2.7-5 6-5 6 2.2 6 5c0 2.2-2 3.8-2 3.8z" />
                      </svg>
                    </div>
                    <div className="flex-grow flex items-center border-b border-gray-100 dark:border-gray-400 text-sm text-gray-600 dark:text-gray-100 py-2">
                      <div className="flex-grow flex justify-between items-center">
                        <div className="self-center">
                          <a
                            className="font-medium text-black hover:text-gray-900 dark:text-gray-50 dark:hover:text-gray-100"
                            href="#0"
                            style={{ outline: "none" }}
                          >
                            Nick Mark
                          </a>{" "}
                          <a
                            className="font-medium text-black dark:text-gray-50 dark:hover:text-gray-100"
                            href="#0"
                            style={{ outline: "none" }}
                          >
                            Sara Smith
                          </a>{" "}
                        </div>
                        <div className="flex-shrink-0 ml-2">
                          <a
                            className="flex items-center font-medium text-blue-500 hover:text-blue-600 dark:text-blue-400 dark:hover:text-blue-500"
                            href="#0"
                            style={{ outline: "none" }}
                          >
                            View
                            <span>
                              <svg
                                width={20}
                                height={20}
                                viewBox="0 0 20 20"
                                fill="currentColor"
                                className="transform transition-transform duration-500 ease-in-out"
                              >
                                <path
                                  fillRule="evenodd"
                                  d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                                  clipRule="evenodd"
                                />
                              </svg>
                            </span>
                          </a>
                        </div>
                      </div>
                    </div>
                  </li>
                  <li className="flex px-4">
                    <div className="w-9 h-9 rounded-full flex-shrink-0 bg-[rgb(77,140,255)] my-2 mr-3">
                      <svg
                        className="w-9 h-9 fill-current text-red-50"
                        viewBox="0 0 36 36"
                      >
                        <path d="M25 24H11a1 1 0 01-1-1v-5h2v4h12v-4h2v5a1 1 0 01-1 1zM14 13h8v2h-8z" />
                      </svg>
                    </div>
                    <div className="flex-grow flex items-center border-gray-100 text-sm text-black dark:text-gray-50 py-2">
                      <div className="flex-grow flex justify-between items-center">
                        <div className="self-center">
                          The post{" "}
                          <a
                            className="font-medium text-black dark:text-gray-50 dark:hover:text-gray-100"
                            href="#0"
                            style={{ outline: "none" }}
                          >
                            Post Name
                          </a>{" "}
                          was removed by{" "}
                          <a
                            className="font-medium text-black hover:text-gray-900 dark:text-gray-50 dark:hover:text-gray-100"
                            href="#0"
                            style={{ outline: "none" }}
                          >
                            Nick Mark
                          </a>
                        </div>
                        <div className="flex-shrink-0 ml-2">
                          <a
                            className="flex items-center font-medium text-blue-500 hover:text-blue-600 dark:text-blue-400 dark:hover:text-blue-500"
                            href="#0"
                            style={{ outline: "none" }}
                          >
                            View
                            <span>
                              <svg
                                width={20}
                                height={20}
                                viewBox="0 0 20 20"
                                fill="currentColor"
                                className="transform transition-transform duration-500 ease-in-out"
                              >
                                <path
                                  fillRule="evenodd"
                                  d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                                  clipRule="evenodd"
                                />
                              </svg>
                            </span>
                          </a>
                        </div>
                      </div>
                    </div>
                  </li>
                </ul>

                {/*  */}
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-5 col-md-12 col-sm-12 my-md-2 bg-white rounded-md  card shadow">
          <div className="my-2 bg-sky-50 rounded-md ">
            <div className="row px-2 py-2.5">
              <div className="col-4">
                <button className="bg-white my-1  rounded-sm px-1 outline outline-1 outline-offset-2">
                  Notices & Orders
                </button>
              </div>
              <div className="col-4">
                <button className="bg-white my-1  rounded-sm px-1 outline outline-1 outline-offset-2">
                  Summision
                </button>
              </div>
            </div>
          </div>
          <div className="">
            <div className="flex items-center text-sm my-3">
              <div className="relative hidden w-8 h-8 mr-3 rounded-full md:block">
                <img
                  className="object-cover w-full h-full rounded-full"
                  src="https://images.unsplash.com/flagged/photo-1570612861542-284f4c12e75f?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=200&fit=max&ixid=eyJhcHBfaWQiOjE3Nzg0fQ"
                  alt=""
                  loading="lazy"
                />
                <div
                  className="absolute inset-0 rounded-full shadow-inner"
                  aria-hidden="true"
                />
              </div>
              <div>
                <p className="font-semibold">Hans Burger</p>
                <p className="text-xs text-gray-600 dark:text-gray-400 ">
                  10x Developer
                </p>
              </div>
              <div className="text px-2">
                <p>In publishing and graphic desigs available lishing .</p>
              </div>
            </div>
            <div className="flex items-center text-sm my-3">
              <div className="relative hidden w-8 h-8 mr-3 rounded-full md:block">
                <img
                  className="object-cover w-full h-full rounded-full"
                  src="https://images.unsplash.com/flagged/photo-1570612861542-284f4c12e75f?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=200&fit=max&ixid=eyJhcHBfaWQiOjE3Nzg0fQ"
                  alt=""
                  loading="lazy"
                />
                <div
                  className="absolute inset-0 rounded-full shadow-inner"
                  aria-hidden="true"
                />
              </div>
              <div>
                <p className="font-semibold">Hans Burger</p>
                <p className="text-xs text-gray-600 dark:text-gray-400 ">
                  10x Developer
                </p>
              </div>
              <div className="text px-2">
                <p>In publishing and graphic desigs available lishing .</p>
              </div>
            </div>
            <div className="flex items-center text-sm my-3">
              <div className="relative hidden w-8 h-8 mr-3 rounded-full md:block">
                <img
                  className="object-cover w-full h-full rounded-full"
                  src="https://images.unsplash.com/flagged/photo-1570612861542-284f4c12e75f?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=200&fit=max&ixid=eyJhcHBfaWQiOjE3Nzg0fQ"
                  alt=""
                  loading="lazy"
                />
                <div
                  className="absolute inset-0 rounded-full shadow-inner"
                  aria-hidden="true"
                />
              </div>
              <div>
                <p className="font-semibold">Hans Burger</p>
                <p className="text-xs text-gray-600 dark:text-gray-400 ">
                  10x Developer
                </p>
              </div>
              <div className="text px-2">
                <p>In publishing and graphic desigs available lishing .</p>
              </div>
            </div>
            <div className="flex items-center text-sm my-3">
              <div className="relative hidden w-8 h-8 mr-3 rounded-full md:block">
                <img
                  className="object-cover w-full h-full rounded-full"
                  src="https://images.unsplash.com/flagged/photo-1570612861542-284f4c12e75f?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=200&fit=max&ixid=eyJhcHBfaWQiOjE3Nzg0fQ"
                  alt=""
                  loading="lazy"
                />
                <div
                  className="absolute inset-0 rounded-full shadow-inner"
                  aria-hidden="true"
                />
              </div>
              <div>
                <p className="font-semibold">Hans Burger</p>
                <p className="text-xs text-gray-600 dark:text-gray-400 ">
                  10x Developer
                </p>
              </div>
              <div className="text px-2">
                <p>In publishing and graphic desigs available lishing .</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardFooter;
