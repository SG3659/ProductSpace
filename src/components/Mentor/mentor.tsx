import React from 'react'
import mentors from"../../constants/mentor"
import "./mentor.css"
const mentor = () => {
  return (
    <div className='mentor-container'>
      {/*heading*/}
      <div className='mentor-Heading'>
         <h1>Learn from the Best</h1>
         <p>Fast track your journey into product management and emerge into your dream role as PM</p>
      </div>
      <div className='mentor-section'>
         {/*card*/}
         <div className="mentor-cards-container">
            {mentors.map((mentor, index) => (
               <div key={index} className="mentor-card">
                  <div className="mentor-image">
                     <img src={mentor.profileImage} alt={mentor.name} />
                  </div>
                  <div className="mentor-content">
                     <div className="mentor-logo">
                        <img src={mentor.companyLogo} alt={`${mentor.name} Logo`} />
                     </div>
                        <h3>{mentor.name}</h3>
                        <p>{mentor.role}</p>
                  </div>
               </div>
               
            ))}
         </div>  
         {/*mentor-button*/}
         <div className='mentor-btn'>
            <button>
               Become a Mentor
            </button>
      </div>
      </div>

      
      
    </div>


  )
}

export default mentor;

