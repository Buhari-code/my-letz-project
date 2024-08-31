import React, { useEffect } from 'react'
import "./packagesearch.css"
import { FaLocationDot } from "react-icons/fa6"
import { FaCreditCard } from "react-icons/fa6"
import { FaCalendarAlt } from "react-icons/fa"
import { FaSearch } from "react-icons/fa"

import Aos from "aos"
import "aos/dist/aos.css"



function PackageSearch() {

  useEffect(()=>{
        Aos.init({duration: 2000})
    }, [])

  return (
    <div className="destination section container">
      <div className="secContainer">
        <div className=''>
        <span className="redText">EXPLORE NOW</span>
        <h3 data-aos="fade-up" >Find Your dream Destination</h3>
        <p data-aos="fade-up" >Fill in the fields below to find the best spot for your next tour</p>
        </div>

        <div data-aos="fade-up" className="searchField grid">
          <div className="inputField flex">
            <FaLocationDot className="icon"/>
            <input type="text " placeholder='Location' />
          </div>

          <div className="inputField flex">
            <FaCreditCard className="icon"/>
            <input type="text " placeholder='Budget' />
          </div>

          <div className="inputField flex">
            <FaCalendarAlt className="icon"/>
            <input type="text " placeholder='date' />
          </div>

          <button className='btn'> <FaSearch className="icon"/> Search</button>
        </div> 
        </div>
      </div>
  )
}

export default PackageSearch