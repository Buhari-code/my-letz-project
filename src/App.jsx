import React from 'react'
import { BrowserRouter as Router, Routes, Route,} from "react-router-dom";
import "./App.css"
import Navbar from './Components/Navbar/Navbar'
import Landing from './Components/Pages/Landing';
import Signin from './Components/Signin/Signin';
import Login from './Components/Login/Login';


function App() {
  return (
    <Router>
      < Navbar />
      <Routes>
        <Route path='/' element={<Landing />} />
        <Route path='/signin' element={<Signin />} />
        <Route path='/login' element={<Login />} />
      </Routes>
    
    </Router>
  )
}

export default App

