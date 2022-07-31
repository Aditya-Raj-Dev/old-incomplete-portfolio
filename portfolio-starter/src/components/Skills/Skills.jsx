import React from 'react'
import "./Skills.css"
import Skillbox from '../skillbox/Skillbox';
import { AiFillGithub } from 'react-icons/ai';
import { ImHtmlFive} from 'react-icons/im';
import { FaCss3Alt,FaReact,FaNodeJs} from 'react-icons/fa';
import { SiJavascript,SiRedux,SiChakraui,SiNpm} from 'react-icons/si';
const Skills = () => {
  return (
    <div className="skills">
         <div className="s-left">
     <span>My</span>
     <span>Top Skills</span>
     <spane>Full Stack Web Developer With the
            skils of HTML, CSS, JavaScript,</spane>
            <spane> React, Redux,
            Chakra UI, Node, MongoDB, Express</spane>
     <br />
     <button className="button s-button">Hire Me</button>
    
     <div className="blur s-blur" style={{ background:"#ABF1FF94"}}></div>
     </div>
    {/* right */}
    <div className="s-right">
      <div>
         <Skillbox logo={<ImHtmlFive size={60} />} name={"HTML"}/>
         <Skillbox logo={<FaCss3Alt size={60}/>} name={"CSS"}/>
         <Skillbox logo={<SiJavascript size={60}/>} name={"JS"}/>
         <Skillbox logo={<FaReact size={60}/>} name={"React"}/>
         <Skillbox logo={<SiRedux size={60}/>} name={"Redux"}/>
      </div>
       <div>
         <Skillbox logo={<AiFillGithub size={60} />} name={"Git"}/>
         <Skillbox logo={<SiChakraui size={60}/>} name={"Chakra"}/>
         <Skillbox logo={<FaNodeJs size={60}/>} name={"Node"}/>
         <Skillbox logo={<SiNpm size={60}/>} name={"NPM"}/>
         
      </div>
    </div>
    </div>
  )
}

export default Skills