import React from 'react';

// CSS
import './TipPercentage.css';

const TipPercentage = () => {

 const handleClick = (buttonPercentage) => {
  let clickedButtonPercentage = buttonPercentage.target;
  // let targetedButton = buttonPercentage.target;

  handleButtonActive(clickedButtonPercentage);

  if (clickedButtonPercentage.innerHTML === 'Custom') {
   handleCustomValueClick(clickedButtonPercentage);  // Handle the custom value
  } else {
   // console.log(clickedButtonPercentage);
   return clickedButtonPercentage;
  }
 };


 const handleCustomValueClick = (clickedButton) => {
  // Get a custom value from the user
  let usersCustomValue = 0;
  usersCustomValue = prompt('Please enter your custom value');

  // Check if the custom value is a number
  if (isNaN(usersCustomValue) === true) {
   alert('It has to be a number value');
   return;
  } else {
   clickedButton = usersCustomValue;
  }

  console.log(clickedButton);
  return clickedButton;
 };

 const handleButtonActive = (clickedButton) => {
  // Get the ID of the specific button
  let currentActiveButton = clickedButton;

  // get all the buttons
  let allButtons = document.getElementsByClassName('option');

  // if a button has the active class already remove it

  for (let i = 0; i <= allButtons.length - 1; i++) {
   allButtons[i].classList.remove('active');
  }

  // add the active class to the current clicked button
  currentActiveButton.classList.add('active');
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
  </div >
 );
};

export default TipPercentage;
