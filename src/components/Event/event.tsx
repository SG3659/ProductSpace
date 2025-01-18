import {useState} from 'react'
import './event.css'
import {events} from "../../constants/event"
import UpcEventCard from "../Cards/UpcEvents/upcEventCard"
import PastEventCard from "../Cards/PastEvent/pastEventCard"
const Event: React.FC = () =>{

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
         <UpcEventCard displayedEvent={displayedEvents}/>
       </div>
     </div>

  
     <div className='mCard-container'>
       {/*headi*/}
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
       <PastEventCard/>
     </div>
   </div>
 </div>

)
}

export default Event


