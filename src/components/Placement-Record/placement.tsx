import React from 'react'
import "./placement.css"
import { Image } from '../../assets'
const placement = () => {
  return (
    <div className='placement-container'>
      <div className='placement-section'>
         {/* image*/}
         <div className='placed-image'>
            <img src={Image}/>
         </div>
         <div className='placed-text'>
            <h1>We help you succeed in your career </h1>
            <p>Our proven track record of transforming aspiring product managers into industry-leading professionals across top-tier tech companies.</p>
         </div>
      </div>
    </div>
  )
}

export default placement
