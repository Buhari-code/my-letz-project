import React, { useState, useRef } from 'react'
import './navbar.css'
import { Link } from "react-router-dom";
import img from "../../Images/Logo.webp"
import { FaBars } from "react-icons/fa"
import { AiFillCloseCircle } from "react-icons/ai"
function Navbar() {
    const [active, setActive] = useState(false)
    // Function to toggle navbar
    const toggleNav = () => {
        setActive(prevState => !prevState)
    }

   const navBarRef = useRef(null)

        function removeNavbar(){
            if(navBarRef.current){
            navBarRef.current.classList.remove('activeNavbar')
            }
        }

  return (
    <div className='navBarSection'>
        <header className='header flex'>
        <div className="logoDiv">
        <a href="#" className="logo">
            <img src={img} alt="" />
        </a>
        </div>
        <div ref = {navBarRef} className={`navBar ${active ? 'activeNavbar' : ''}`}>
                    <ul className="navLists flex">
                        <li onClick={removeNavbar} className="navItem">
                            <Link to="/" className="navLink">Home</Link>
                        </li>
                        <li onClick={removeNavbar} className="navItem">
                            <a href="#main" className="navLink">Packages</a>
                        </li>
                        <li onClick={removeNavbar} className="navItem">
                            <a href="/flight" className="navLink">Flight</a>
                        </li>
                        <li onClick={removeNavbar} className="navItem">
                            <a href="#" className="navLink">Visa</a>
                        </li>
                        <li onClick={removeNavbar} className="navItem">
                            <a href="#" className="navLink">About Us</a>
                        </li>
                        <li onClick={removeNavbar} className="navItem">
                            <a href="#" className="navLink">About</a>
                        </li>
                        
                        <button onClick={removeNavbar} className="btn1 bar">
                            <Link to="/login" className="navLink">Login</Link>
                        </button>   

                        <button onClick={removeNavbar} className="btn bar">
                            <Link to="/signin">SIGN IN</Link>
                        </button>
                    </ul>
                    </div>
                    <button onClick={toggleNav} className="toggleNavbar">
                    {active ?  <AiFillCloseCircle className="icon"/>: <FaBars className="icon"/>}
                    </button>
                    <div className="bars">
                    <button onClick={removeNavbar} className="btn1">
                            <Link to="/login" className="navLink">Login</Link>
                        </button>
                        <button onClick={removeNavbar} className="btn">
                            <Link to="/signin">SIGN IN</Link>
                        </button>
                    </div>
        </header>
    </div>
  )
}
export default Navbar