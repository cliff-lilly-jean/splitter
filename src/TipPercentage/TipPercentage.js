import React from 'react';

// CSS
import './TipPercentage.css';

const TipPercentage = () => {
 return (
  <div className="tip-percentage">
   <p className="section-title tip">Select Tip %</p>
   <div className="tip-percentage__options">
    <div className="option">1%</div>
    <div className="option">8%</div>
    <div className="option">15%</div>
    <div className="option">20%</div>
    <div className="option">25%</div>
    <div className="option">30%</div>
   </div>
  </div>
 );
};

export default TipPercentage;
