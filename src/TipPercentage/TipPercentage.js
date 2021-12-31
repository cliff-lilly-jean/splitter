import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { bindActionCreators } from 'redux';
import { actionCreators } from '../state/index';

// CSS
import './TipPercentage.css';

const TipPercentage = () => {

 const custom = 'Custom';

 // pull in the state
 let tipPercentage = useSelector((state) => state.tipPercentage);

 // create a dispatch hook
 const dispatch = useDispatch();

 // get the action creators
 const { updateTipPercentage } = bindActionCreators(actionCreators, dispatch);


 const handleClick = (buttonPercentage) => {
  let clickedButtonPercentage = buttonPercentage.target;
  tipPercentage = clickedButtonPercentage;

  handleButtonActive(tipPercentage);
  handleInnerHtml(tipPercentage);

  if (clickedButtonPercentage.innerHTML === 'Custom') {
   // Handle the custom value
   handleCustomValueClick(tipPercentage);
  } else {
   return updateTipPercentage(parseInt(tipPercentage.innerHTML));
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
  return updateTipPercentage(clickedButton);
 };

 // function(): handle the current button's active state
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

 // function(): handle the retrieval of the inner html
 const handleInnerHtml = (item) => {
  return item.innerHTML;
 };

 const generateATipPercent = (num) => {
  return num + '%';
 };

 const generateACustomTipPercent = (num) => {
  return num;
 };


 return (
  <div className="tip-percentage">
   <p className="section-title tip">Select Tip %</p>
   <div className="tip-percentage__options">
    <button className="option" onClick={handleClick}>{generateATipPercent(5)}</button>
    <button className="option" onClick={handleClick}>{generateATipPercent(10)}</button>
    <button className="option" onClick={handleClick}>{generateATipPercent(15)}</button>
    <button className="option" onClick={handleClick}>{generateATipPercent(25)}</button>
    <button className="option" onClick={handleClick}>{generateATipPercent(50)}</button>
    <button className="option custom" onClick={handleClick}>{generateACustomTipPercent(custom)}</button>
   </div>
  </div>
 );
};

export default TipPercentage;
