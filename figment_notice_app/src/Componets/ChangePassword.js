import React, { useState } from "react";
import { IoEyeOutline, IoEyeOffOutline } from "react-icons/io5";
import "./Signup.css";
import { Link, useNavigate } from "react-router-dom";
import Navbar from "./Navbar";

const ChangePassword = () => {
  const [showPassword, setShowPassword] = useState(false);

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    companyName: "",
    email: "",
    password: "",
    confirmPassword: "",
    category: "",
    mobileNumber: "",
    referredBy: "",
  });

  const [formErrors, setFormErrors] = useState({});

  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="changepassword">
      <Navbar />
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
                to="/profile"
                className="ms-1 text-sm font-medium hover:text-black md:ms-2 text-[rgb(77,140,255)] "
              >
                Profile
              </Link>
            </div>
          </li>
        </ol>
      </nav>
      <div className="">
        {/*  */}
        <div className="container-fluid">
          <div className="row">
            <div className="m-auto col-8  my-2">
              <ul className="mb-2 nav nav-pills">
                <li className="nav-item">
                  <Link
                    to="/profile"
                    className="nav-link bg-[rgb(244,244,245)] border border-blue-500 text-black me-1 py-1 my-1"
                  >
                    <span className="fw-bold">Account</span>
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    to="/changepassword"
                    className="nav-link bg-[rgb(77,140,255)] text-white py-1 my-1"
                  >
                    <span className="fw-bold">Change Password</span>
                  </Link>
                </li>
              </ul>
              <div className="tab-content">
                <div className="tab-pane active">
                  <div className="card">
                    <div className="border-bottom card-header">
                      <h4 className="card-title">Change Password</h4>
                    </div>
                    <div className="my-25 card-body">
                      <form className="pt-50">
                        <div className="mb-2 col-sm-6">
                          <label
                            htmlFor="Password"
                            className="form-label form-label"
                          >
                            Current Password
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

                        <div className="row">
                        <div className="mb-2 col-sm-6">
                          <label
                            htmlFor="Password"
                            className="form-label form-label"
                          >
                            New Password
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
                            htmlFor="Password"
                            className="form-label form-label"
                          >
                            Retype New Password
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
                          <div className=" justify-start">
                            <h4 className="font-lato-bold  py-3   me-2 mb-2">
                              Password Requirements :
                            </h4>
                            <h4 className="mb-1 tracking-wide">
                              * Minimum 8 characters long the more, the better
                            </h4>
                            <h4 className="mb-1 tracking-wide">
                              * At least one uppercase character
                            </h4>
                            <h4 className="mb-1 tracking-wide">
                              * At least one number, symbol, or whitespace
                              character
                            </h4>
                          </div>
                          <div className="mt-2 col-sm-12">
                            <button
                              type="button"
                              className="me-1 px-2 rounded-md bg-red-600 text-white py-1"
                            >
                              Back
                            </button>
                            <button
                              type="submit"
                              className="float-right bg-green-600 text-white px-2 rounded-md py-1 "
                            >
                              Save changes
                            </button>
                          </div>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/*  */}
      </div>
    </div>
  );
};

export default ChangePassword;
