import React from 'react'
import "./Skills.css"
import Skillbox from '../skillbox/Skillbox';
import { ImHtmlFive} from 'react-icons/im';
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
      <Skillbox logo={<ImHtmlFive />}/>
   <h1>HTML</h1>
    </div>
    </div>
  )
}

export default Skills