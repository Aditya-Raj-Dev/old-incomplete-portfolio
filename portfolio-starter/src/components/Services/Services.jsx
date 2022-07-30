import React from 'react'
import "./Services.css"
import HeartEmoji from "../../img/heartemoji.png";
import Glasses from "../../img/glasses.png";
import Humble from "../../img/humble.png";
import Card from '../card/Card';
import resume from "./resume.pdf"

const Services = () => {
  return (
   <div className="services">
    {/* left side */}
     <div className="awesome">
     <span>My Awesome</span>
     <span>Services</span>
     <spane>I Can make A full fledged websites By using MongoDB, Express, React, Node and CSS</spane>
     <a href={resume} download>
     <button className="button s-button">Download CV</button>
     </a>
     <div className="blur s-blur" style={{ background:"#ABF1FF94"}}></div>
     </div>
     {/* right side */}
     <div className="cards">
       <div style={{left:"14rem"}}>
        <Card 
        emoji={HeartEmoji}
        heading={"Front-End"}
        details={"HTML, CSS, javascript, React, Redux"}/>
       </div>
       {/* second */}
       <div style={{left:"-4rem",top:"12rem"}}>
        <Card 
        emoji={Glasses}
        heading={"Full Stack"}
        details={"HTML, CSS, javascript, React, Redux, Node, Mongo, Express"}/>
       </div>
       {/* third */}
       <div style={{left:"11rem",top:"19rem"}}>
        <Card 
        emoji={Humble}
        heading={"UI/UX"}
        details={"CSS, Chakra, Fontawesome, Bootstrap, MaterialUI"}/>
       </div>
     </div>
   </div>
  )
}

export default Services