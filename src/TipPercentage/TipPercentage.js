import React from 'react';

// CSS
import './TipPercentage.css';

const TipPercentage = () => {

 const handleClick = (buttonPercentage) => {
  let clickedButtonPercentage = buttonPercentage.target.innerHTML;

  // Handle the custom value
  if (buttonPercentage.target.innerHTML === 'Custom') {
   // Get a custom value from the user
   let usersCustomValue = 0;
   usersCustomValue = prompt('Please enter your custom value');

   // Check if the custom value is a number
   if (isNaN(usersCustomValue) === true) {
    alert('It has to be a number value');
    return;
   } else {
    clickedButtonPercentage = usersCustomValue;
   }
   return clickedButtonPercentage;
  }
  return clickedButtonPercentage;
 };

 return (
  <div className="tip-percentage">
   <p className="section-title tip">Select Tip %</p>
   <div className="tip-percentage__options">
    <button className="option" onClick={handleClick}>5%</button>
    <button className="option" onClick={handleClick}>10%</button>
    <button className="option" onClick={handleClick}>15%</button>
    <button className="option" onClick={handleClick}>25%</button>
    <button className="option" onClick={handleClick}>50%</button>
    <button className="option custom" onClick={handleClick}>Custom</button>
   </div>
  </div>
 );
};

export default TipPercentage;
