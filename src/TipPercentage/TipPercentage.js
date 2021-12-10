import React from 'react';

// CSS
import './TipPercentage.css';

const TipPercentage = () => {

 const handleClick = (buttonPercentage) => {
  const clickedButtonPercentage = buttonPercentage.target.innerHTML;
  console.log(clickedButtonPercentage + '%');
 };

 return (
  <div className="tip-percentage">
   <p className="section-title tip">Select Tip %</p>
   <div className="tip-percentage__options">
    <button className="option" onClick={handleClick}>1%</button>
    <button className="option" onClick={handleClick}>8%</button>
    <button className="option" onClick={handleClick}>15%</button>
    <button className="option" onClick={handleClick}>20%</button>
    <button className="option" onClick={handleClick}>25%</button>
    <button className="option" onClick={handleClick}>30%</button>
   </div>
  </div>
 );
};

export default TipPercentage;
