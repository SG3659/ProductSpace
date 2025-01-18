import React from 'react'
import"./pastEvent.css"
import {pastEvents} from "../../../constants/event"
import "./pastEvent.css"
 const pastEventCard:React.FC = () => {
  return (
   <div className="card-container">
   {pastEvents.map((event) => (
     <div className="events-card" key={event.id}>
       <div className='card-section'>
         <img src={event.banner} alt={`${event.title} Banner`} className="card-banner" />
         <div className="last-event-details">
           <p>{event.title}</p>
           <p>{event.expire}</p>
         </div>
       </div>
       <button className="register-button">Event Details</button>
     </div>
   ))}
 </div>
  )
}
export default pastEventCard;