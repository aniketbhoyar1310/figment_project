import React, { useState } from "react";
import loginImage from "../Assest/Mobile login-amico.png";
import figmetLogo from "../Assest/Figment-Logo-1.png";
import { IoEyeOutline } from "react-icons/io5";
import { IoEyeOffOutline } from "react-icons/io5";
import { BsArrowRightCircleFill } from "react-icons/bs";

const LoginPage = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your login logic here
    console.log("Email:", email, "Password:", password);
  };

  return (
    <div
      className={`flex relative transition-all duration-500 ease-in-out ${
        darkMode ? "bg-gray-900 text-white" : "bg-white text-gray-800"
      }`}
    >
      {/* Content Side */}
      <div
        className="flex flex-col "
        style={{ boxShadow: "rgba(0, 0, 0, 0.05) 0px 0px 0px 1px" }}
      >
        <img
          src={loginImage}
          alt="Notice Image"
          className="w-96 mb-8 rounded-lg"
        />
        <div className=" pl-8">
          <h4 className="font-bold mb-6 font-lato-bold" >
          <span style={{color:"#3b82f6"}}><BsArrowRightCircleFill /></span> <span> India’s First Notice Alert Solution</span> 
          </h4>
          <p className="mb-1 font-lato-thin animate-fade-in">
            Automatic Download Notices From Portal
          </p>
          <p className="mb-1 font-lato-thin animate-fade-in">
            Access Anywhere, Anytime
          </p>
          <p className="mb-1 font-lato-thin animate-fade-in">
            100% Accurate, Cloud Based & Secure.
          </p>
          <p className="mb-1 font-lato-thin animate-fade-in">
            NoticeAlert, GST, E-Invoicing & Many More
          </p>
          <p className="mb-1 font-lato-thin animate-fade-in">
            Notice Alert is a product of TAX CPC Figment Global Solution Pvt.
            Ltd
          </p>
        </div>
      </div>
      {/* Image & Form Side */}
      <div className="w-1/2 flex justify-center items-center p-10">
        <div
          className={`w-96 ${
            darkMode ? "bg-gray-800" : "bg-white"
          } shadow-lg p-8 rounded-lg text-center transform transition-all duration-500 ease-in-out hover:scale-105`}
        >
          <img
            src={figmetLogo}
            alt="Login Image"
            className="w-28 mb-8 m-auto "
          />
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="relative">
              <input
                className={`w-full px-3 py-2 border rounded-lg font-lato-thin ${
                  darkMode
                    ? "bg-gray-700 text-white"
                    : "bg-gray-100 text-gray-800"
                }`}
                type="email"
                placeholder="Email"
                value={email}
                onChange={handleEmailChange}
                required
              />
            </div>
            <div className="relative">
              <input
                className={`w-full px-3 py-2 border rounded-lg font-lato-thin ${
                  darkMode
                    ? "bg-gray-700 text-white"
                    : "bg-gray-100 text-gray-800"
                }`}
                type={showPassword ? "text" : "password"}
                placeholder="Password"
                value={password}
                onChange={handlePasswordChange}
                required
              />
              <button
                type="button"
                className="absolute top-1/2 right-4 transform -translate-y-1/2 text-blue-500 hover:text-blue-700 focus:outline-none"
                onClick={toggleShowPassword}
              >
                {showPassword ? <IoEyeOffOutline /> : <IoEyeOutline />}
              </button>
            </div>
            <button
              className={`w-full bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 ${
                darkMode ? "hover:bg-blue-700" : "hover:bg-blue-600"
              }`}
              type="submit"
            >
              Login
            </button>
          </form>
          <div className="mt-4">
            <button className="text-blue-500 hover:text-blue-700 focus:outline-none">
              Forgot Password?
            </button>
          </div>
          <div className="mt-2">
            <button className="text-green-500 hover:text-green-700 focus:outline-none">
              New On Our Platform? Create An Account
            </button>
          </div>
        </div>
      </div>
      {/* Dark Mode Toggle */}
      <div className="absolute top-0 right-0 m-4">
        <button
          className={`p-2 rounded-full ${
            darkMode ? "bg-white text-gray-800" : "bg-gray-800 text-white"
          }`}
          onClick={toggleDarkMode}
        >
          {darkMode ? "Light Mode" : "Dark Mode"}
        </button>
      </div>
    </div>
  );
};

export default LoginPage;
