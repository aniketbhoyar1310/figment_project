import { useState } from "react";
import React from "react";
import Navbar from "./Navbar";
import { Link } from "react-router-dom";
const AllUsers = () => {
  const [showModal, setShowModal] = React.useState(false);

  return (
    <div>
      <Navbar />
      <div className="all_users">
        <div className="py-3 px-4">
          <nav className="flex" aria-label="Breadcrumb ">
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
                  <a
                    href="#"
                    className="ms-1 text-sm font-medium hover:text-black md:ms-2 text-[rgb(77,140,255)] "
                  >
                    All Users
                  </a>
                </div>
              </li>
            </ol>
          </nav>
        </div>
        <div className="add_user_button px-4 ">
          <div>
            <button
              className=" border border-blue-500 px-3 py-1  rounded-md"
              type="button"
              onClick={() => setShowModal(true)}
            >
              Add User
            </button>
            {showModal ? (
              <div>
                <div className=" px-4 justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
                  <div className="relative w-auto my-6 mx-auto max-w-3xl">
                    {/*content*/}
                    <div className="border-0 rounded-sm shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                      {/*header*/}
                      <p className="text-center my-2 font-bold text-[rgb(77,140,255)]">
                        Add User
                      </p>
                      {/*body*/}
                      <div className="relative p-6 flex-auto">
                        <form className=" pt-50">
                          <div className="row">
                            <div className="mb-1 col-sm-6">
                              <label
                                htmlFor="FirstName"
                                className="form-label form-label"
                              >
                                First Name
                              </label>
                              <input
                                id="FirstName"
                                placeholder="John"
                                autoComplete="off"
                                name="FirstName"
                                type="text"
                                className="form-control  focus:outline-none focus:ring-0  focus:border-blue-500"
                                defaultValue=""
                              />
                            </div>
                            <div className="mb-1 col-sm-6">
                              <label
                                htmlFor="LastName"
                                className="form-label form-label"
                              >
                                Last Name
                              </label>
                              <input
                                id="LastName"
                                placeholder="John"
                                autoComplete="off"
                                name="LastName"
                                type="text"
                                className="form-control focus:outline-none focus:ring-0  focus:border-blue-500"
                                defaultValue=""
                              />
                            </div>
                            <div className="mb-1 col-sm-6">
                              <label
                                htmlFor="EmailId"
                                className="form-label form-label"
                              >
                                Email Id
                              </label>
                              <input
                                id="EmailId"
                                placeholder="Doe@example.com"
                                autoComplete="new-password"
                                name="EmailId"
                                type="email"
                                className="form-control focus:outline-none focus:ring-0  focus:border-blue-500"
                                defaultValue=""
                              />
                            </div>
                            <div className="mb-1 col-sm-6">
                              <label
                                htmlFor="PhoneNumber"
                                className="form-label form-label"
                              >
                                Mobile Number
                              </label>
                              <input
                                placeholder={1234567890}
                                autoComplete="new-password"
                                name="PhoneNumber"
                                minLength={10}
                                maxLength={10}
                                type="text"
                                className="form-control focus:outline-none focus:ring-0  focus:border-blue-500"
                                defaultValue=""
                              />
                            </div>
                            <div className="mb-2 col-sm-6">
                              <label
                                htmlFor="Password"
                                className="form-label form-label"
                              >
                                Password
                              </label>
                              <div className="input-group-merge input-group">
                                <input
                                  maxLength={50}
                                  placeholder="············"
                                  id="Password"
                                  autoComplete="new-password"
                                  name="Password"
                                  type="password"
                                  className="form-control focus:outline-none focus:ring-0  focus:border-blue-500"
                                  defaultValue=""
                                />
                                <span className="cursor-pointer input-group-text">
                                  <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width={14}
                                    height={14}
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth={2}
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                  >
                                    <path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24" />
                                    <line x1={1} y1={1} x2={23} y2={23} />
                                  </svg>
                                </span>
                              </div>
                            </div>
                            <div className="mb-2 col-sm-6">
                              <label
                                htmlFor="confirmPassword"
                                className="form-label form-label"
                              >
                                Confirm Password
                              </label>
                              <div className="input-group-merge input-group">
                                <input
                                  maxLength={50}
                                  placeholder="············"
                                  id="confirmPassword"
                                  autoComplete="new-password"
                                  name="confirmPassword"
                                  type="password"
                                  className="form-control focus:outline-none focus:ring-0  focus:border-blue-500"
                                  defaultValue=""
                                />
                                <span className="cursor-pointer input-group-text">
                                  <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width={14}
                                    height={14}
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth={2}
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                  >
                                    <path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24" />
                                    <line x1={1} y1={1} x2={23} y2={23} />
                                  </svg>
                                </span>
                              </div>
                            </div>

                            <div className="mb-1 col-sm-6">
                              <label
                                htmlFor="CalendarEmail"
                                className="form-label form-label"
                              >
                                Sync Google/Outlook Calendar
                              </label>
                              <input
                                id="CalendarEmail"
                                placeholder="Doe@example.com"
                                autoComplete="new-password"
                                name="CalendarEmail"
                                type="email"
                                className="form-control focus:outline-none focus:ring-0  focus:border-blue-500"
                                defaultValue=""
                              />
                            </div>
                            <div className="row">
                              <div className="mb-1 col-sm-6">
                                <input
                                  id="IsAddCompany"
                                  name="IsAddCompany"
                                  type="checkbox"
                                  className="me-1 form-check-input"
                                  defaultValue="false"
                                />
                                <label
                                  htmlFor="IsAddCompany"
                                  className="form-label"
                                >
                                  Add Company
                                </label>
                              </div>
                              <div className="mb-1 col-sm-6">
                                <input
                                  id="IsDownloadData"
                                  name="IsDownloadData"
                                  type="checkbox"
                                  className="me-1 form-check-input"
                                  defaultValue="false"
                                />
                                <label
                                  htmlFor="IsDownloadData"
                                  className="form-label"
                                >
                                  Download Data
                                </label>
                              </div>
                            </div>
                            <div className="row"></div>
                            <div className="row">
                              <div className="col-lg-6">
                                <span className="ms-3 p-0" />
                              </div>
                              <div className="actions-right d-flex align-items-end justify-content-lg-end flex-lg-nowrap flex-wrap  p-0 col-lg-6">
                                <div className="d-flex align-items-center">
                                  <label htmlFor="search-invoice">Search</label>
                                  <input
                                    id="search-input"
                                    autoComplete="new-password"
                                    type="text"
                                    className="dataTable-filter mb-50 ms-2 form-control-sm form-control focus:outline-none focus:ring-0  focus:border-blue-500"
                                    defaultValue=""
                                  />
                                </div>
                              </div>
                            </div>
                          </div>
                        </form>
                      </div>
                      {/*footer*/}
                      <div className="flex items-center justify-end px-1 border-t border-solid border-blueGray-200 rounded-b">
                        <button
                          className="text-danger background-transparent uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                          type="button"
                          onClick={() => setShowModal(false)}
                        >
                          Close
                        </button>
                        <button
                          className="bg-blue-500 text-white   uppercase text-sm px-6 py-1 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                          type="button"
                          onClick={() => setShowModal(false)}
                        >
                          Save
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
              </div>
            ) : null}
          </div>
        </div>
      </div>
      <div className=" shadow-lg  w-2/3  h-36  m-auto flex items-center justify-center">
        <h3 className=" font-lato-regular">There are no records to display</h3>
      </div>
    </div>
  );
};

export default AllUsers;
