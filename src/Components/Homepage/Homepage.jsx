import React, { useEffect } from 'react'
import "./homepage.css"
import { FaArrowRight } from "react-icons/fa"
import { Link } from "react-router-dom";
import img from "../../Images/landing-8.png"
import Aos from 'aos';
import "aos/dist/aos.css"

function Homepage() {

    useEffect(() => {
        Aos.init({duration: 1000})
    }, [])

  return (
    <div className="Homepage section">
        <div className="secHomepage flex">
            <div className="sectionText">
                  <h1 data-aos= "fade-up">
                    The greatest adventure is what lies ahead.
                  </h1>
                  <p data-aos= "fade-up">Travelling is one about leadership, and charactering your own when everybody else is doing the same thing</p>
                  <button  data-aos= "fade-up" className="btn">
                    <Link to="/signin" >Get Started <FaArrowRight className='icon'/> </Link>
                  </button>
            </div>
            <div className="imageDiv problem">
                <img src={img} alt="destination Input" />
            </div>
        </div>
    </div>
  )
}

export default Homepage
