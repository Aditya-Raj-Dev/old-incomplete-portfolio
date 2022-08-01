import React from 'react'
import "./Portfolio.css"
import { Swiper, SwiperSlide } from 'swiper/react';
import fasoos from "../../swiperimg/fasoos.png";
import bebo from "../../swiperimg/beautybebo.png";
import gearbest from "../../swiperimg/gearbest.png";
import modesens from "../../swiperimg/modesens.png";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";


import { FreeMode, Pagination } from "swiper";

const Portfolio = () => {
  return (
    <div className="portfolio">
        {/* Heading */}
        <span>Recent Projects</span>
        <span>Portfolio</span>

        {/* Slider */}
        
        <Swiper
         slidesPerView={3}
         spaceBetween={30}
         grabCursor={true}
         className="portfolio-slider"
        >
    
        <SwiperSlide>
                <img src={bebo} alt="" />
             
                <h1>Beautybebo</h1>
         </SwiperSlide>

            <SwiperSlide>
                <img src={modesens} alt="" />
                <h1>Modesens</h1>
            </SwiperSlide>

            <SwiperSlide>
                <img src={fasoos} alt="" onClick={()=>console.log("hello")}/>
                <h1>Fasoos</h1>
            </SwiperSlide>

            <SwiperSlide>
                <img src={gearbest} alt="" />
                <h1>Gearbest</h1>
            </SwiperSlide>
        </Swiper>
    </div>
  )
}

export default Portfolio