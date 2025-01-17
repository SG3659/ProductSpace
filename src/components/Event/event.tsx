import {useState} from 'react'
import './event.css'
import {events, pastEvents} from "../../constants/event"
const Event = () => {

   const [currentIndex, setCurrentIndex] = useState(0);
   const itemsPerPage = 3;
 
   const displayedEvents = events.slice(currentIndex, currentIndex + itemsPerPage);
 
   const handlePrev = () => {
     setCurrentIndex((prevIndex) => Math.max(0, prevIndex - itemsPerPage));
   };
 
   const handleNext = () => {
     setCurrentIndex((prevIndex) => 
       Math.min(events.length - itemsPerPage, prevIndex + itemsPerPage)
     );
   };

  return (
   <div className='event-containers'>
   <div className='event'>
     {/*upc-event*/}
     <div className='upc-event'>
       {/*heading*/}
       <div className='event-heading'>
         <h1>Events at Product Space</h1>
         <p>Claim your free lesson today and start exploring</p>
       </div>
       {/*card*/}
       <div className='mCard-container'>
         {/*heading*/}
         <div className='heading'>
           <h1>Live/Upcoming Events</h1>
           <div className='change-btn'>
             <button 
               className="custom-button" 
               onClick={handlePrev} 
               disabled={currentIndex === 0}
             >
               <span className="icon">&lt;</span>
             </button>
             <button 
               className="custom-button" 
               onClick={handleNext} 
               disabled={currentIndex + itemsPerPage >= events.length}
             >
               <span className="icon">&gt;</span>
             </button>
           </div>
         </div>

         {/*card */}
         <div className="card-container">
           {displayedEvents.map((event) => (
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
       </div>
     </div>

     {/*past-event*/}
     <div className='mCard-container'>
       {/*heading*/}
       <div className='heading'>
         <h1>Past Events</h1>
         <div className='change-btn'>
           <button className="custom-button">
             <span className="icon">&lt;</span>
           </button>
           <button className="custom-button">
             <span className="icon">&gt;</span>
           </button>
         </div>
       </div>
       {/*card */}
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
     </div>
   </div>
 </div>

)
}

export default Event


