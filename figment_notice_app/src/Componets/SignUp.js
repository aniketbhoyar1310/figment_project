import React, { useState } from "react";
import { IoEyeOutline, IoEyeOffOutline } from "react-icons/io5";
import FigmentLogo from "../Assest/Figment-Logo-1.png";
import "./Signup.css";
import { Link, useNavigate } from "react-router-dom";
import msinfo from "../Assest/ms-pictogram.svg";
import Googleimg from "../Assest/download.svg";

const SignUpPage = () => {
  const navigate=useNavigate()
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

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const errors = {};
    for (const key in formData) {
      if (!formData[key] && key !== "referredBy" && key !== "confirmPassword") {
        errors[key] = `${
          key.charAt(0).toUpperCase() + key.slice(1)
        } is required`;
      }
    }
    if (formData.password !== formData.confirmPassword) {
      errors.confirmPassword = "Passwords do not match";
    }
    if (Object.keys(errors).length > 0) {
      setFormErrors(errors);
    } else {
      console.log("Form Data:", formData);
      alert("Sign in successfully")
      navigate('/')
      
    }
  };

  return (
    <div className="flex justify-center py-8">
      {/* Left Side - Form */}
      <div className="bg-white rounded-lg p-8 shadow-[rgba(17,_17,_26,_0.1)_0px_0px_16px]">
        <div className=" flex items-center justify-center  pb-4">
          <img src={FigmentLogo} style={{ width: "23%" }} alt="Figment Logo" />
        </div>
        <h3 className=" uppercase font-lato-bold-italic text-xl text-center pb-3">
          Registration
        </h3>
        <form onSubmit={handleSubmit}>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label
                htmlFor="firstName"
                className="block text-sm  font-lato-bold text-gray-700"
              >
                First Name <span className=" text-red-600">*</span>
              </label>
              <input
                placeholder=" First Name"
                type="text"
                name="firstName"
                id="firstName"
                autoComplete="given-name"
                className="mt-1 p-2 block w-full border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
                onChange={handleInputChange}
              />
              {formErrors.firstName && (
                <p className="text-red-500">{formErrors.firstName}</p>
              )}
            </div>
            <div>
              <label
                htmlFor="lastName"
                className="block text-sm  font-lato-bold text-gray-700"
              >
                Last Name <span className=" text-red-600">*</span>
              </label>
              <input
                placeholder=" Last Name"
                type="text"
                name="lastName"
                id="lastName"
                autoComplete="family-name"
                className="mt-1 p-2 block w-full border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
                onChange={handleInputChange}
              />
              {formErrors.lastName && (
                <p className="text-red-500">{formErrors.lastName}</p>
              )}
            </div>
            <div>
              <label
                htmlFor="companyName"
                className="block text-sm  font-lato-bold text-gray-700"
              >
                Company Name <span className=" text-red-600">*</span>
              </label>
              <input
                placeholder="  Company name"
                type="text"
                name="company Name"
                id="companyName"
                autoComplete="organization"
                className="mt-1 p-2 block w-full border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
                onChange={handleInputChange}
              />
              {formErrors.companyName && (
                <p className="text-red-500">{formErrors.companyName}</p>
              )}
            </div>
            <div>
              <label
                htmlFor="email"
                style={{ fontSize: "14px " }}
                className="block text-sm  font-lato-bold text-gray-700 "
              >
                Email <span className=" text-red-600">*</span>
              </label>
              <input
                placeholder="  Email Address"
                type="email"
                name="email"
                id="email"
                autoComplete="email"
                className="mt-1 p-2 block w-full border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
                onChange={handleInputChange}
              />
              {formErrors.email && (
                <p className="text-red-500">{formErrors.email}</p>
              )}
            </div>
            <div>
              <div className="relative">
                <input
                  placeholder=" Password"
                  type={showPassword ? "text" : "password"}
                  name="password"
                  id="password"
                  autoComplete="new-password"
                  className="mt-1 p-2 block w-full border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
                  onChange={handleInputChange}
                />
                <button
                  type="button"
                  className="absolute top-1/2 right-3 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
                  onClick={toggleShowPassword}
                >
                  {showPassword ? <IoEyeOffOutline /> : <IoEyeOutline />}
                </button>
              </div>
              {formErrors.password && (
                <p className="text-red-500">{formErrors.password}</p>
              )}
            </div>
            <div>
              <input
                placeholder="Confirm Password"
                type="password"
                name="confirm Password"
                id="confirmPassword"
                autoComplete="new-password"
                className="mt-1 p-2 block w-full border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
                onChange={handleInputChange}
              />
              {formErrors.confirmPassword && (
                <p className="text-red-500">{formErrors.confirmPassword}</p>
              )}
            </div>
            <div className="">
              <label
                htmlFor="category"
                className="block text-sm  font-lato-bold text-gray-700"
              >
                Category <span className=" text-red-600">*</span>
              </label>
              <select
                name="category"
                id="category"
                className="mt-1 p-2 block w-full border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
                onChange={handleInputChange}
              >
                <option value="">Select</option>
                <option value="Corporate">Corporate</option>
                <option value="Advocate">Advocate</option>
                <option value="CA">CA</option>
                <option value="CMA">CMA</option>
                <option value="CS">CS</option>
              </select>
              {formErrors.category && (
                <p className="text-red-500">{formErrors.category}</p>
              )}
            </div>

            <div className="">
              <label
                htmlFor="mobileNumber"
                className="block text-sm  font-lato-bold text-gray-700"
              >
                Mobile Number <span className=" text-red-600">*</span>
              </label>
              <input
                placeholder="Mobile Number"
                type="text"
                name="mobile Number"
                id="mobileNumber"
                autoComplete=""
                className="mt-1 p-2 block w-full border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
                onChange={handleInputChange}
              />
              {formErrors.mobileNumber && (
                <p className="text-red-500">{formErrors.mobileNumber}</p>
              )}
            </div>
          </div>
          <div className=" w-96  m-auto">
            <button
              type="submit"
              className="w-full mt-5 py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-500 hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
            >
              Sign Up
            </button>
          </div>

          <div className=" text-center py-5 font-lato-thin">
            <button className="">
              Already Have An Account?
              <Link to={"/"} className=" text-blue-500">
                {""} Sign In Instead
              </Link>
            </button>
          </div>
          <div className=" text-center">OR</div>

          {/* Google and Microsoft Sign-in Options */}
          <div className="flex justify-center gap-4 mt-4">
            <button className=" flex items-center justify-center gap-2 px-2 py-2 border border-gray-300 text-gray-800">
              <img src={Googleimg} />
              Sign in with Google
            </button>
            <button className="flex items-center justify-center gap-2 px-2 py-2 border border-gray-300 text-gray-800">
              <img src={msinfo} alt="Microsoft Logo" className="w-6 h-6" />
              <span>Sign in with Microsoft</span>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignUpPage;
