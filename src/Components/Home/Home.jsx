import React from 'react'
import "./home.css"
import { FaArrowRight } from "react-icons/fa"
import { Link } from "react-router-dom";
import video from "../../Images/video-4.mp4"
import img from "../../Images/srilanka.webp"
import img1 from "../../Images/taiwan.webp"
import img2 from "../../Images/thailand.webp"
import img3 from "../../Images/Vietnam.webp"

function Home() {
  return (
    <div className='Home'>
                <div className="videoDiv">
                  <video src={video} muted autoPlay loop type="video/mp4"></video>
                </div>
                <div className="sectionText">
                  <h1>
                    The greatest adventure is what 
                  </h1>
                  <p>lies ahead.</p>
                  <button  className="btn">
                    <Link to="/signin" >Get Started <FaArrowRight className='icon'/> </Link>
                  </button>
              </div>
            <div className="popularPlaces">
              <div className="content"><h3>Popular Places</h3>
              <div className="images flex">
              <img src={img} alt="" />
              <img src={img1} alt="" />
              <img src={img2} alt="" />
              <img src={img3} alt="" /> 
              </div>
              </div>
            </div>
            </div>
  )
  }

export default Home
