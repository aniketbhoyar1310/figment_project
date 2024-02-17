import React from 'react'
import Navbar from './Componets/Navbar'
import LoginPage from './Componets/Login'
import SignUp from "./Componets/SignUp"
import { Routes, Route, BrowserRouter } from "react-router-dom";

const App = () => {
  return (

   <>
   <BrowserRouter>
  
   <Routes>
   
    <Route path='/' element={<LoginPage/>}/>
    <Route path='/signup' element={<SignUp/>}/>
   </Routes>
   </BrowserRouter>
 
   </>
  )
}

export default App