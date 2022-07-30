import React from 'react'
import "./Intro.css";
import Github from "../../img/github.png";
import Linkedin from "../../img/linkedin.png";
import Instagram from "../../img/instagram.png";
import Vector1 from "../../img/Vector1.png";
import Vector2 from "../../img/Vector2.png";
import myimage from "../../img/myimage.png";
import thumbup from "../../img/thumbup.png";
import Crown from "../../img/crown.png";
import glassesimoji from "../../img/glassesimoji.png";
import FloatingDiv from '../FloatingDiv/FloatingDiv';

const Intro = () => {
  return (
    <div className="intro">
      <div className="i-left">
        <div className="i-name">
          <span>Hy! I Am</span>
          <span>Aditya Raj</span>
          <span>I am a Full Stack Web Developer from Masai School with proficient skills in the tech industry. I'm definitely looking for better, and more importantly, ethical and accessible ways to solve common problems we are faced with day-to-day.
          </span>
        </div>
      <button className="button i-button"> Hire Me </button>
    <div className="i-icons">
      <a href="https://github.com/Aditya23489e">
      <img src={Github} alt="" />
      </a>

      <a href="https://www.linkedin.com/in/coderaadi/">
      <img src={Linkedin} alt="" />
      </a>

      <a href="https://www.instagram.com/aditya.raj369/">
      <img src={Instagram} alt="" />
      </a>
    </div>
      </div>

      <div className="i-right">
         <img src={Vector1} alt="" />
         <img src={Vector2} alt="" />
         <img src={myimage} alt="" style={{height:"600px",borderRadius:"25%"}}/>
         <img src={glassesimoji} alt="" />
         <div style={{top:"-4%",left:"68%"} }>
          <FloatingDiv image={Crown} txt1="Web" txt2="Developer"/>
         </div>
         <div style={{top:"19rem",left:"-3rem"}}>
          <FloatingDiv image={thumbup} txt1="Best Design" txt2="Award"/>
         </div>
           <div className="blur" style={{background:"rgb(238 210 255"}}></div>
      <div className="blur" style={{
  background:"#C1F5FF", top:"17rem",
  width:"21rem",heigth:"11rem", left:"-9rem"

      }}></div>
      </div>
    </div>
  )
}

export default Intro