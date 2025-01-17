import React from 'react'
import programList from "../../constants/program";
import "./program.css"
import { MdOutlineFileDownload } from "react-icons/md";

const Programs: React.FC = () => {
  return (
    <div className="programs-container">
      <div className='programs-section'>
        <h1 className="programs-title">Programs We Offer</h1>

       <div className="programs-grid">
        {programList.map((program) => (
          <div className="program-card" key={program.id}>
            <div className="program-icons">
              <img src={program.icon} alt={`${program.name} Icons`} />
            </div>
               <div className="program-content">
                  <h3 className="program-name">{program.name}</h3>
                   <div className="enrollment-tag">{program.duration}</div>

                   <ul className="program-features">
                     {program.features.map((feature, index) => (
                       <li key={index}>{feature}</li>
                     ))}
                  </ul>

                 {/* // <div className="pricing-section">
                  //   <p className="price-label">Course Pricing</p>
                  //   <p className="price-amount">
                  //     {program.price} <span>{program.priceSuffix}</span>
                  //   </p>
                  // </div>
*/}
                   <div className="card-actions">
                     <button className="enroll-btn btn-common">Enroll Now</button>
                     <button className="curriculum-btn btn-common">
                     Download Curriculum
                       <span className="downloads-icons"><MdOutlineFileDownload />
                       </span>
                     </button>
                   </div> 
                </div>*
          </div>
        ))}
      </div> 
      </div>
    </div>
  );
};

export default Programs;