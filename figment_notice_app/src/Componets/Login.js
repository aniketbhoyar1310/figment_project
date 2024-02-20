import React, { useState } from "react";
import loginImage from "../Assest/Mobile login-amico.png";
import figmetLogo from "../Assest/Figment-Logo-1.png";
import { IoEyeOutline, IoEyeOffOutline } from "react-icons/io5";
import { BsArrowRightCircleFill } from "react-icons/bs";
import { CiLight } from "react-icons/ci";
import msinfo from "../Assest/ms-pictogram.svg";
import Googleimg from "../Assest/download.svg";
import { Link, useNavigate } from "react-router-dom";
import { MdDarkMode } from "react-icons/md";

const LoginPage = () => {
  const navigate=useNavigate()
  
  const [darkMode, setDarkMode] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({ email: "", password: "" });

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
    setErrors({ ...errors, email: "" });
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
    setErrors({ ...errors, password: "" });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    let formValid = true;

    if (!email.trim()) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        email: "Email is required",
      }));
      formValid = false;
    }

    if (!password.trim()) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        password: "Password is required",
      }));
      formValid = false;
    }

    if (formValid) {
      // Add your login logic here
      console.log("Email:", email, "Password:", password);
      alert("Login Successfully");
      navigate('/dashboard')
    }
  };

  const handleGoogleSignIn = () => {
    console.log("Signing in with Google");
  };

  const handleMicrosoftSignIn = () => {
    console.log("Signing in with Microsoft");
  };

  return (
    <div
      className={`flex relative transition-all duration-500 ease-in-out ${
        darkMode ? "bg-gray-900 text-white" : "bg-white text-gray-800"
      }`}
    >
      {/* Content Side */}
      <div
        className="flex flex-col   px-6  pb-6"
        style={{ boxShadow: "rgba(0, 0, 0, 0.05) 0px 0px 0px 1px" }}
      >
        <img src={loginImage} alt="Notice Image" className="w-96  rounded-lg" />
        <div className=" pl-8">
          <h4 className=" font-lato-bold mb-4  tracking-wide ">
            India’s First Notice Alert Solution
          </h4>
          <p className="mb-1 font-lato-thin  flex gap-3 items-center ">
            <span style={{ color: "#3b82f6" }}>
              <BsArrowRightCircleFill />
            </span>
            <span style={{ fontSize: "14px" }}>
              Automatic Download Notices From Portal
            </span>
          </p>
          <p className="mb-1 font-lato-thin animate-fade-in flex items-center gap-3">
            <span style={{ color: "#3b82f6" }}>
              <BsArrowRightCircleFill />
            </span>
            <span style={{ fontSize: "14px" }}> Access Anywhere, Anytime </span>
          </p>

          <p className="mb-1 font-lato-thin animate-fade-in flex items-center gap-3">
            <span style={{ color: "#3b82f6" }}>
              <BsArrowRightCircleFill />
            </span>
            <span style={{ fontSize: "14px" }}>
              {" "}
              NoticeAlert, GST, E-Invoicing & Many More
            </span>
          </p>

          <p className="mb-1 font-lato-thin animate-fade-in flex items-center gap-3">
            <span style={{ color: "#3b82f6" }}>
              <BsArrowRightCircleFill />
            </span>
            <span style={{ fontSize: "14px" }}>
              {" "}
              100% Accurate, Cloud Based & Secure.{" "}
            </span>
          </p>

          <p className="  mt-4 font-lato-thin " style={{ fontSize: "16px" }}>
            Notice Alert is a product of TAX CPC Figment Global Solution Pvt Ltd
          </p>
        </div>
      </div>
      {/* Image & Form Side */}
      <div className="w-1/2 flex flex-col justify-center items-center p-10">
        <div
          className={`w-96 ${
            darkMode ? "bg-gray-800" : "bg-white"
          } shadow-lg p-8 rounded-lg text-center transform transition-all duration-500 ease-in-out hover:scale-105`}
        >
          <img
            src={figmetLogo}
            alt="Login Image"
            className="w-28 mx-auto mb-4"
          />

          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="relative">
              <input
                className={`w-full px-3 py-2 border rounded-lg font-lato-thin ${
                  darkMode
                    ? "bg-gray-700 text-white"
                    : "bg-gray-100 text-gray-800"
                } focus:outline-none focus:border-blue-500`}
                type="email"
                placeholder="Email"
                value={email}
                onChange={handleEmailChange}
              />
              {errors.email && <p className="text-red-500">{errors.email}</p>}
            </div>
            <div className="relative">
              <input
                className={`w-full px-3 py-2 border rounded-lg font-lato-thin ${
                  darkMode
                    ? "bg-gray-700 text-white"
                    : "bg-gray-100 text-gray-800"
                } focus:outline-none focus:border-blue-500`}
                type={showPassword ? "text" : "password"}
                placeholder="Password"
                value={password}
                onChange={handlePasswordChange}
              />
              <button
                type="button"
                className="absolute top-1/2 right-4 transform -translate-y-1/2 text-blue-500 hover:text-blue-700 focus:outline-none"
                onClick={toggleShowPassword}
              >
                {showPassword ? <IoEyeOffOutline /> : <IoEyeOutline />}
              </button>
            </div>
            <div className="mt-4 text-right font-lato-thin  text-xs">
              <button className="text-blue-500 hover:text-blue-700 focus:outline-none">
                Forgot Password?
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
          <div className="mt-3 mb-2 font-lato-thin text-sm">
            <button className="">
              New On Our Platform?{" "}
              <Link to={"/Signup"} className=" text-blue-600">
                Create An Account
              </Link>
            </button>
          </div>
        </div>

        <div className="mt-5">OR</div>
        {/* Google and Microsoft Sign-in Options */}
        <div className="flex justify-between gap-4 mt-4">
          <button
            onClick={handleGoogleSignIn}
            className={`flex items-center justify-center  gap-2 px-2 py-2 ${
              darkMode
                ? "border border-gray-700 text-white"
                : "border border-gray-300 text-gray-800"
            } `}
          >
            <img src={Googleimg} />
            Sign in with Google
          </button>
          <button
            onClick={handleMicrosoftSignIn}
            className={`flex items-center justify-center gap-2 ${
              darkMode
                ? "border border-gray-700 text-white"
                : "border border-gray-300 text-gray-800"
            } px-2 py-2`}
          >
            <img src={msinfo} alt="Microsoft Logo" className="w-6 h-6" />
            <span>Sign in with Microsoft</span>
          </button>
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
          {darkMode ? <CiLight /> : <MdDarkMode />}
        </button>
      </div>
    </div>
  );
};

export default LoginPage;
