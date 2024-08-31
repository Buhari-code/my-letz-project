import React, { useEffect, useMemo, useState } from 'react'
import "./package.css"
import axios from 'axios'
import LazyLoad from 'react-lazyload'
import { FaStar } from "react-icons/fa"
import img from "../../Images/china visa 2.webp"
import img2 from "../../Images/maldives.webp"
import img3 from "../../Images/Singapore (1).webp"
import img4 from "../../Images/Malaysia.webp"
import img5 from "../../Images/dubai.webp"
import img6 from "../../Images/north.webp"
import img7 from "../../Images/srinagar.webp"
import img8 from "../../Images/hong.webp"
import img9 from "../../Images/kerala (1).webp"
import img10 from "../../Images/andaman pac.webp"
import img11 from "../../Images/mauritius (1).webp"
import img12 from "../../Images/goa.webp"
import img13 from "../../Images/srilanka.webp"
import imgPlaceholder from "../../Images/placeholder.png"
import Aos from 'aos';
import "aos/dist/aos.css"

const Data = [
{
    id:1,
    imgSrc: img,
    placeHolder : imgPlaceholder,
    daysTitle: '04 nights and 05 days',
    location: 'Thailand',
    hotel: 'HOTEL',
    rate: '$700',
    description: '02 Nights Bangkok with breakfast, 02 Nights Pattaya with breakfast, Airport return transfer, Coral island',
    addContent: 'Alcazar show, Safari world with marine world, Temple city tour' 
},

{
    id:2,
    imgSrc: img2,
    placeHolder : imgPlaceholder,
    daysTitle: '04 nights and 05 days',
    location: 'Maldives',
    hotel: 'HOTEL',
    rate: '$600',
    description:'03 nights accommodation in Male with half board, Airport return transfer, Green tax, Maldives Island tour'
},

{
    id:3,
    imgSrc: img3,
    placeHolder : imgPlaceholder,
    daysTitle: '04 nights and 05 days',
    location: 'Singapore',
    hotel: 'HOTEL',
    rate: '$700',
    description:'03 nights accommodation in Singapore with breakfast, Airport return transfer, Half day city tour',
    addContent: 'Night safari ,Sentosa island tour with cable car + wings of time + sea aquarium + Madame Tussaud’s,Universal studio tour' 
},

{
    id:4,
    imgSrc: img4,
    placeHolder : imgPlaceholder,
    daysTitle: '04 nights and 05 days',
    location: 'Malaysia',
    hotel: 'HOTEL',
    rate: '$600',
    description:'03 nights accommodation in kualalumpur with breakfast, Airport return transfer, Kul city tour + Kl tower',
    addContent:'Genting highland with cable car +,batu caves , Visit to putrajaya tour '
},

{
    id:5,
    imgSrc: img5,
    placeHolder : imgPlaceholder,
    daysTitle: '04 nights and 05 days',
    location: 'Dubai',
    hotel: 'HOTEL',
    rate: '$600',
    description:'03 nights accommodation in Dubai with breakfast, Airport return transfer, Dubai city tour + Burj Khalifa',
    addContent:'Desert safari with dinner ,Marina, Dhow cruise with dinner ,Dubai frame'
},

{
    id:6,
    imgSrc: img6,
    placeHolder : imgPlaceholder,
    daysTitle: '04 nights and 05 days',
    location: 'North India',
    hotel: 'HOTEL',
    rate: '$600',
    description:'02 nights accommodation in Shimla with breakfast, 02 nights accommodation in Manali with breakfast',
    addContent:'All transfer during the trip,Local sight seeings'
},

{
    id:7,
    imgSrc: img7,
    placeHolder : imgPlaceholder,
    daysTitle: '04 nights and 05 days',
    location: 'Srinagar',
    hotel: 'HOTEL',
    rate: '$600',
    description:'03 nights accommodation in Srinagar with breakfast, 01 night accommodation in house boat with breakfast',
    addContent:'Airport return transfer ,Local sight seeings '
},

{
    id:8,
    imgSrc: img8,
    placeHolder : imgPlaceholder,
    daysTitle: '04 nights and 05 days',
    location: 'Hongkong',
    hotel: 'HOTEL',
    rate: '$600',
    description:'03 nights accommodation in Hongkong with breakfast, Airport return transfer, Half day Hongkong night city tour',
    addContent:'Full day Disney land tour , Ocean park tour '
},

{
    id:9,
    imgSrc: img9,
    placeHolder : imgPlaceholder,
    daysTitle: '04 nights and 05 days',
    location: 'Kerala',
    hotel: 'HOTEL',
    rate: '$600',
    description:'01 night accommodation in Munnar with breakfast, 01 night accommodation in thekkady house boat with full board',
    addContent : '01 night accommodation in Cochin with breakfast ,All transfer during the trip,Local sight seeing during the trip'
},
{
    id:10,
    imgSrc: img10,
    placeHolder : imgPlaceholder,
    daysTitle: '04 nights and 05 days',
    location: 'Andaman',
    hotel: 'HOTEL',
    rate: '$600',
    description:'02 nights accommodation in port Blair with breakfast, 02 nights accommodation in havelock', 
    addContent:'Airport return transfer , Port Blair - Have lock - Port Blair by boat, Cellular Jeil + light show + Carbyn’s cove beach, Local museum , Elephanta beach Neil island '
},
{
    id:11,
    imgSrc: img11,
    placeHolder : imgPlaceholder,
    daysTitle: '04 nights and 05 days',
    location: 'Mauritius',
    hotel: 'HOTEL',
    rate: '$600',
    description:'04 nights accommodation in Mauritius with half board, Full Day North tour on SIC(Excluding Entrance Ticket)',
    addContent:'Full Day south Tour on SIC(Excluding Entrance Ticket), Full Day Aux Cerfs on SIC(Excluding Entrance Ticket),Return Airport Transfers on SIC'
},
{
    id:12,
    imgSrc: img12,
    placeHolder : imgPlaceholder,
    daysTitle: '04 nights and 05 days',
    location: 'Goa',
    hotel: 'HOTEL',
    rate: '$600',
    description:'03 nights accommodation in Goa with breakfast, Airport return transfer, Full day north goa tour, city tour'
},
{
    id:13,
    imgSrc: img13,
    placeHolder : imgPlaceholder,
    daysTitle: '04 nights and 05 days',
    location: 'Srilanka',
    hotel: 'HOTEL',
    rate: '$600',
    description:'01 night accommodation in kandy with breakfast, 01 night accommodation in Nuwara Eliya with breakfast, 01 night accommodation in colombo with breakfast',
    addContent:'Airport return transfer & inter city transfer, Kandy local tour, Nuwara Eliya local tourm, Colombo city tour'
}
]

function Package() {

    const [expandedId, setExpandedId] = useState(null);

    function handleToggleContent(id){
        setExpandedId(prevId => (prevId === id? null : id))
    }

    useEffect(() => {
        Aos.init({duration:1000})
    },[])

    async function apicall() {
        const responce = await axios.get (
            "https://abul89.github.io/feedback-reviews/db.json"
        );
        console.log(responce.data);
    }

    useEffect(() => {
        apicall()
    },[expandedId])

    
    const renderPackage = useMemo(() => {
        return (
        Data.map(({id, imgSrc,placeHolder,  daysTitle, location, hotel, rate, description, addContent}) => (
                <div key={id} className="singleDestination" data-aos ="fade-up">
                    <LazyLoad 
                    height={200}
                    offset={100}
                    placeholder={
                         <img src={placeHolder} alt="Loading..." className="placeholder-image" />
                    }
                    >
                    <img src={imgSrc} alt={daysTitle} />
                </LazyLoad>
                
           
            <div className="cardInfo">
                <div className="title flex">
                    <div className="title-main">
                        <h4>{location}</h4>
                        <span>{daysTitle}</span>
                    </div>
                    <div className="rate">
                        {rate}
                    </div>
                </div>
                <div className="hotel flex">
                    <div className="title-hotel">
                        <h5>{hotel}</h5>
                    </div>
                    <div className="hotel-icon flex">
                        <h6>3<FaStar className="icon"/></h6>
                        <h6>4<FaStar className="icon"/></h6>
                        <h6>5<FaStar className="icon"/></h6>
                    </div>
                </div>

                <div className={`desc ${expandedId === id ? 'expanded' : 'collapsed'}`}>
                    <p>{description}{expandedId === id && addContent ? " " +addContent : " " }</p>
                </div>
                <div className="button-id flex">
                <button className='btn ' onClick={() => handleToggleContent(id)}>
                    {expandedId === id ? "Less" : "More"}
                </button>
                </div>
            </div>
             </div>
                    )
                )
        )
    }, [expandedId])


  return (
    <div className="package section container">
        <div className="secHeading">
            <h1>Popular Places</h1>
        </div>
        <div className="package-main grid">
            {renderPackage}  
        </div>
    </div>
  )
}

export default Package
