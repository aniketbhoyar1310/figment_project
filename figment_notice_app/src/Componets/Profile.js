import React from "react";
import { Link } from "react-router-dom";
import Navbar from "./Navbar";

const Profile = () => {
  return (
    <div className="profile">
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
                  <Link to='/profile' className="nav-link bg-[rgb(77,140,255)]  text-white me-1 py-1">
                    <span className="fw-bold">Account</span>
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to='/changepassword'  className="nav-link bg-[rgb(244,244,245)] border border-blue-500 text-black py-1">
                    <span className="fw-bold">Change Password</span>
                  </Link>
                </li>
              </ul>
              <div className="tab-content">
                <div className="tab-pane active">
                  <div className="card">
                    <div className="border-bottom card-header">
                      <h4 className="card-title">Profile Details</h4>
                    </div>
                    <div className="my-25 card-body">
                      <form className="pt-50">
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
                              placeholder="Enter First Name"
                              autoComplete="off"
                              name="FirstName"
                              type="text"
                              className="form-control focus:outline-none focus:ring-0  focus:border-blue-500"
                              defaultValue="SAURABH"
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
                              placeholder="Enter Last Name"
                              autoComplete="off"
                              name="LastName"
                              type="text"
                              className="form-control focus:outline-none focus:ring-0  focus:border-blue-500"
                              defaultValue="NAGRAL"
                            />
                          </div>
                          <div className="mb-1 col-sm-12">
                            <label
                              htmlFor="CompanyName"
                              className="form-label form-label"
                            >
                              Company Name
                            </label>
                            <input
                              id="CompanyName"
                              placeholder="Enter Company Name"
                              autoComplete="off"
                              name="CompanyName"
                              type="text"
                              className="form-control focus:outline-none focus:ring-0  focus:border-blue-500"
                              defaultValue="FIGMENT"
                            />
                          </div>
                          <div className="mb-1 col-sm-9">
                            <label
                              htmlFor="EmailId"
                              className="form-label form-label"
                            >
                              Email Id
                            </label>
                            <input
                              id="EmailId"
                              placeholder="Enter Email Id"
                              autoComplete="off"
                              name="EmailId"
                              type="email"
                              className="form-control focus:outline-none focus:ring-0  focus:border-blue-500"
                              defaultValue="saurabhnagrare1@gmail.com"
                            />
                          </div>

                          <div className="mb-1 col-sm-9">
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
                              defaultValue={8788709619}
                            />
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

export default Profile;
