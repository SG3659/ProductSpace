import React from 'react'
import "./program.css"
import ProgramCard from "../Cards/program/programCard"

const Programs: React.FC = () => {
  return (
    <div className="programs-container">
      <div className='programs-section'>
        <h1 className="programs-title">Programs We Offer</h1>
        <ProgramCard/>
      </div>
    </div>
  );
};

export default Programs;