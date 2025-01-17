import React from 'react'

const programs = () => {
  return (
   <div className="programs-container">
      <h2 className="programs-title">Programs We Offer</h2>
      
      <div className="programs-grid">
        {/* PM Fellowship Program Card */}
        <div className="program-card">
          <div className="program-icons">
            <img src="/pm-icons.png" alt="PM Fellowship Icons" />
          </div>
          
          <h3 className="program-name">PM Fellowship Program</h3>
          <div className="enrollment-tag">4 Month COHORT Based</div>
          
          <ul className="program-features">
            <li>Hands on way to learn product management</li>
            <li>Learn in small groups with experienced product managers</li>
            <li>Super live and interactive with live Projects</li>
            <li>Live Q&A mentoring</li>
            <li>Build an industry-ready portfolio</li>
          </ul>
          
          <div className="pricing-section">
            <p className="price-label">Course Pricing</p>
            <p className="price-amount">₹10,000 <span>onwards</span></p>
          </div>
          
          <div className="card-actions">
            <button className="enroll-btn">Enroll Now</button>
            <button className="curriculum-btn">
              Download Curriculum
              <span className="download-icon">↓</span>
            </button>
          </div>
        </div>
       </div>
   </div>     
  )
}

export default programs
