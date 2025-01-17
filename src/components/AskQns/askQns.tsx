import "./askQns.css"
import faqs from "../../constants/faqindx"
import { useState } from "react"
const askQns: React.FC = () => {
   const [activeIndex, setActiveIndex] = useState(null);
   const toggleFAQ = (index) => {
      setActiveIndex(activeIndex === index ? null : index);
    };
  return (
   <div className="faq-container">
      <div className="faq-wrapper">
      <h2>Frequently Asked Questions</h2>
   
   <div className="faq-questions">
     {faqs.map((faq,index) => (
       <div 
         key={index} 
         className={`faq-item ${activeIndex === index ? 'active' : ''}`}
       >
         <button className="faq-question" onClick={() => toggleFAQ(index)}>
           {faq.question}
           <span className="arrow">▼</span>
         </button>
         <div className="faq-answer">
           <p>{faq.answer}</p>
         </div>
       </div>
     ))}
   </div>

   <div className="faq-footer">
     <h3>Still Have Questions?</h3>
     <button className="contact-btn">
       Contact Us <span>→</span>
     </button>
   </div>

      </div>
   </div>
  )
}

export default askQns;

