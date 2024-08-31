import React, { useRef, useState, useEffect } from 'react'
import "./visa.css"
import img from "../../Images/visa image-1.jpg"
import img1 from "../../Images/visa image-2.jpg"
import img2 from "../../Images/visa image-3.jpg"
import img3 from "../../Images/visa image-5.jpg"
import img4 from "../../Images/visa image-4.jpg"
import img5 from "../../Images/visa image-6.jpg"
import imgPlaceholder from "../../Images/placeholder-visa.png"
import Aos from 'aos';
import "aos/dist/aos.css"
import LazyLoad from 'react-lazyload'

const visaData = [
    {
        id: 1,
        imgSrc : img,
        placeHolder : imgPlaceholder,
        visaType : "Business Visa",
        visaButton: "Explore More",
        extraContent : "A Business Visa allows you to travel to a foreign country for business-related activities. This visa type is designed for individuals who need to attend meetings, conferences, negotiations, or other business events."
    },
    {
        id: 2,
        imgSrc : img1,
        placeHolder : imgPlaceholder,
        visaType : "Tourist Visa",
        visaButton: "Explore More",
        extraContent : "A Tourist Visa is designed for individuals who wish to visit a country for leisure, sightseeing, and personal activities. This visa type is ideal for travelers planning vacations, family visits, or exploring new destinations without the intention of engaging in employment or business activities."
    },
    {
        id: 3,
        imgSrc : img2,
        placeHolder : imgPlaceholder,
        visaType : "Transit Visa",
        visaButton: "Explore More",
        extraContent:"A Transit Visa allows travelers to pass through a country while en route to their final destination. This visa is typically used for brief stays, often within the airport or in the city, when you have a layover or need to change flights. It is designed for those who are not staying in the country for an extended period."
    },
    {
        id: 4,
        imgSrc : img3,
        placeHolder : imgPlaceholder,
        visaType : "Family Visa",
        visaButton: "Explore More",
        extraContent:"A Family Visa allows individuals to join their family members who are residing in a foreign country. This visa type is designed for those who want to live with their spouse, children, or other immediate family members for an extended period."
    },
    {
        id: 5,
        imgSrc : img4,
        placeHolder : imgPlaceholder,
        visaType : "Investor Visa",
        visaButton: "Explore More",
        extraContent:"An Investor Visa is designed for individuals who wish to relocate to a foreign country by investing a significant amount of capital in local businesses or properties. This visa is aimed at attracting foreign investment and fostering economic growth by allowing investors to become residents in the host country"
    },
    {
        id: 6,
        imgSrc : img5,
        placeHolder : imgPlaceholder,
        visaType : "Work Visa",
        visaButton: "Explore More",
        extraContent: "A Work Visa allows individuals to legally work in a foreign country for a specified period. This visa is designed for foreign nationals who have secured employment with a company or organization in the destination country."
    }
]

function Visa() {

    const [visibleid, setVisibleId] = useState(null);

    const handleToggleClick = (id) => {
        setVisibleId(visibleid === id ? null : id);
    }



     useEffect(() => {
        Aos.init({duration:100})
    },[])

  return (
    <div className="visa section container">
        <div className="secHeading">
            <h1>Explore Our Visa Service</h1>
        </div>
        <div className="visa-service grid">
            {
                visaData.map(({id,imgSrc,placeHolder,visaType,visaButton, extraContent}) => (
         <div className="visa-container" key={id} data-aos ="fade-up"> 
            <div className="visa-box">
                <LazyLoad
                height={250}
                offset={100}
                placeholder={
                    <img src={placeHolder}
                    alt='Loading...'
                    className='placeholder-image' />
                }
                ></LazyLoad>
                <img src={imgSrc} alt={visaType} />
            <div className="content flex">
                <h2>{visaType}</h2>
            </div>
            </div>
            <div className="flex">
            <button className='btn' onClick={() => handleToggleClick(id)}>{visaButton}</button></div>

            {visibleid === id && (
                <div className='extra-content'  data-aos ="fade-up">{extraContent}</div>
            )}
        </div>
                ))
            }
        </div>
    </div>
  )
}

export default Visa