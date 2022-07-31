import React from 'react'
import "./Skillbox.css"

const Skillbox = ({logo,name}) => {
  return (
    <div className="skillbox">
       <span>{logo}</span>
       <span>{name}</span>
   </div>
  )
}

export default Skillbox