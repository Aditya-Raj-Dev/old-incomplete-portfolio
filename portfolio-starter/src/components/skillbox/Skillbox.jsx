import React from 'react'
import "./Skillbox.css"

const Skillbox = ({logo,name}) => {
  return (
    <div className="skillbox">
       <h1>{logo}</h1>
       <h1>{name}</h1>
  
 </div>
  )
}

export default Skillbox