import React from "react";

import LoginPage from "./Componets/Login";
import SignUp from "./Componets/SignUp";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import MyCalendar from "./Componets/Calender";
import AddNoticeForm from "./Componets/AddNotice";
import AddNotice from "./Componets/AddNotice";
import Dashboard from "./Componets/Dashboard";
import AllUsers from "./Componets/AllUsers";
import Notice from "./Componets/Notice";
import Submission from "./Componets/Submission";
import Profile from "./Componets/Profile";
import ChangePassword from "./Componets/ChangePassword";
import { ThemeProvider, useTheme } from "./Context/ThemeContext";

const App = () => {
  const { toggleTheme, isDarkMode } = useTheme();
  return (
    <>
      <div className={isDarkMode ? "dark" : ""}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<LoginPage />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/calender" element={<MyCalendar />} />
            <Route path="/addnotice" element={<AddNotice />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/allusers" element={<AllUsers />} />
            <Route path="/notice" element={<Notice />} />
            <Route path="/submission" element={<Submission />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/changepassword" element={<ChangePassword />} />
          </Routes>
        </BrowserRouter>
      </div>
    </>
  );
};

export default App;
