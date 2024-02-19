import React from "react";

import LoginPage from "./Componets/Login";
import SignUp from "./Componets/SignUp";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import MyCalendar from "./Componets/Calender";
import AddNoticeForm from "./Componets/AddNotice";
import AddNotice from "./Componets/AddNotice";

const App = () => {
  return (
    <>
      <BrowserRouter>
   
        <Routes>
          <Route path="/" element={<LoginPage />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/calender" element={<MyCalendar/>}/>
          <Route path="/addnotice" element={<AddNotice/>}/>
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
