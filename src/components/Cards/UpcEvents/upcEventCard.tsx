import React from 'react'
import "./upcEvent.css"
 const upcEventCard:React.FC = (props) => {
  let displayedEvent =props.displayedEvent
  return (
   <div className="card-container">
   {displayedEvent.map((event) => (
     <div className="events-card" key={event.id}>
       <div className='card-section'>
         <img src={event.banner} alt={`${event.title} Banner`} className="card-banner" />
         <div className='event-info'>
           <div className="date-badge">
             <p>{event.date.month}&nbsp;{event.date.day}</p>
             <p className="events-time">{event.time}</p>
           </div>
           <button>🔗</button>
         </div>
         <div className="event-details">
           <p>{event.title}</p>
         </div>
       </div>
       <button className="register-button">Register</button>
     </div>
   ))}
 </div>
  )
}
export default upcEventCard;