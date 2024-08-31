import React, {useEffect} from 'react'
import "./service.css"
import { Link } from "react-router-dom";
import { FaPlane } from "react-icons/fa6"
import { FaCcVisa } from "react-icons/fa"
import { BsBackpack2Fill } from "react-icons/bs"
import { FaHotel } from "react-icons/fa6"
import { FaArrowRight } from "react-icons/fa"
import Aos from 'aos';
import "aos/dist/aos.css"

function Service() {

        useEffect(() => {
        Aos.init({duration: 1000})
    }, [])

  return (
    <div className="service section">
        <div className="secHeading flex">
            <p>SERVICES</p>

            <div className="flex">
                <Link to="/services" className='more'>EXPLORE MORE SERVICES</Link>
                <span><FaArrowRight className='icon'/></span>
            </div>
        </div>
        <div data-aos= "fade-up" className="secContainer grid">
            <div  className="secService">
                <div className="icon2">
                <FaPlane className='icon'/></div>
                <div className="secContent">
                    <h3>Flight</h3>
                    <p> Premium Flight Services Tailored for the Ultimate Experience.</p>
                                    <h4>
                            <Link to="/hotel" className='pink'>Learn More <FaArrowRight /></Link>
                        </h4>
                </div>
            </div>

            <div className="secService">
                <div className="icon2">
                <FaCcVisa className='icon'/></div>
                <div className="secContent">
                    <h3>Visa</h3>
                    <p> Your Gateway to Global Travel: Fast and Reliable Visa Services.</p>
                   <h4>
                            <Link to="/hotel" className='pink'>Learn More <FaArrowRight /></Link>
                        </h4>
                </div>
            </div>

            <div className="secService">
                <div className="icon2">
                <BsBackpack2Fill className='icon'/></div>
                <div className="secContent">
                    <h3>Packages</h3>
                    <p>  Designed for Your Ultimate Convenience and Satisfaction</p>
                   <h4>
                            <Link to="/hotel" className='pink'>Learn More <FaArrowRight /></Link>
                        </h4>
                </div>
            </div>

            <div className="secService">
                <div className="icon2">
                <FaHotel className='icon'/></div>
                <div className="secContent">
                    <h3>Hotel</h3>
                    <p>  Exceptional Hotel Services for an Ultimate Comfort Experience.</p>
                   <h4>
                            <Link to="/hotel" className='pink'>Learn More <FaArrowRight /></Link>
                    </h4>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Service