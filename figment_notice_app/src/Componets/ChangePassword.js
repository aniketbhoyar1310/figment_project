import React, { useState } from "react";
import { IoEyeOutline, IoEyeOffOutline } from "react-icons/io5";
import "./Signup.css";
import { Link, useNavigate } from "react-router-dom";
import Navbar from "./Navbar";

const ChangePassword = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    newPassword: "",
    retypeNewPassword: "",
  });
  const [formErrors, setFormErrors] = useState({});

  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.newPassword !== formData.retypeNewPassword) {
      setFormErrors({ retypeNewPassword: "Passwords do not match" });
    } else {
      // Proceed with form submission
      console.log("Form submitted");
    }
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
                    className="nav-link bg-[rgb(244,244,245)] border border-blue-500 text-black me-1 py-1"
                  >
                    <span>Account</span>
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    to="/changepassword"
                    className="nav-link bg-[rgb(77,140,255)] text-white py-1 "
                  >
                    <span>Change Password</span>
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
                      <form className="pt-50" onSubmit={handleSubmit}>
                        <div className="mb-2 col-sm-6">
                          <label
                            htmlFor="Password"
                            className="form-label form-label"
                          >
                            Current Password
                          </label>
                          <div className="input-group-merge input-group">
                            <input
                              defaultValue={123444}
                              id="currentPassword"
                              type={showPassword ? "text" : "password"}
                              name="currentPassword"
                              value={formData.currentPassword}
                              onChange={handleInputChange}
                              className="form-control focus:outline-none focus:ring-0  focus:border-blue-500"
                            />
                            <span
                              className="cursor-pointer input-group-text"
                              onClick={toggleShowPassword}
                            >
                              {showPassword ? (
                                <IoEyeOffOutline />
                              ) : (
                                <IoEyeOutline />
                              )}
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
                                id="newPassword"
                                type={showPassword ? "text" : "password"}
                                name="newPassword"
                                value={formData.newPassword}
                                onChange={handleInputChange}
                                className="form-control focus:outline-none focus:ring-0  focus:border-blue-500"
                              />
                              <span
                                className="cursor-pointer input-group-text"
                                onClick={toggleShowPassword}
                              >
                                {showPassword ? (
                                  <IoEyeOffOutline />
                                ) : (
                                  <IoEyeOutline />
                                )}
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
                                id="retypeNewPassword"
                                type={showPassword ? "text" : "password"}
                                name="retypeNewPassword"
                                value={formData.retypeNewPassword}
                                onChange={handleInputChange}
                                className="form-control focus:outline-none focus:ring-0  focus:border-blue-500"
                                defaultValue=""
                              />
                              <span
                                className="cursor-pointer input-group-text"
                                onClick={toggleShowPassword}
                              >
                                {showPassword ? (
                                  <IoEyeOffOutline />
                                ) : (
                                  <IoEyeOutline />
                                )}
                              </span>
                            </div>
                            {formErrors.retypeNewPassword && (
                              <p className="text-red-500 text-sm mt-3">
                                {formErrors.retypeNewPassword}
                              </p>
                            )}
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
                          <div className="mt-2 col-sm-12 flex justify-start gap-4">
                            <button
                              type="button"
                              className="me-1 px-4 py-1 rounded-md  text-base font-mediu border border-blue-500"
                            >
                              Close
                            </button>
                            <button
                              type="submit"
                              className="bg-blue-500 text-white px-2 rounded-md py-1 "
                            >
                              Save Changes
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
