import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { bindActionCreators } from 'redux';
import { actionCreators } from '../state/index';

// CSS
import './TipPercentage.css';

const TipPercentage = () => {

 // pull in the state
 let tipPercentage = useSelector((state) => state.tipPercentage);
 // let customTipPercentage = useSelector((state) => state.tipPercentage);

 // create a dispatch hook
 const dispatch = useDispatch();

 // get the action creators
 const { updateTipPercentage } = bindActionCreators(actionCreators, dispatch);


 const handleClick = (buttonPercentage) => {
  let clickedButtonPercentage = buttonPercentage.target;
  // tipPercentage = clickedButtonPercentage;
  console.log(clickedButtonPercentage);

  handleButtonActive(clickedButtonPercentage);
  handleInnerHtml(clickedButtonPercentage);


  return updateTipPercentage(parseInt(clickedButtonPercentage.innerHTML));

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

 const handleChange = (userInput) => {

  // get the users input
  let currentUserInputNumber = userInput.target.value;
  let customInput = document.querySelector('.option.custom');

  if (customInput.length <= 0) {
   customInput.value = 'Custom';
   console.log(customInput.value);
   return customInput.value;
  }

  return updateTipPercentage(currentUserInputNumber);
 };

 const resetInput = (e) => {
  e.target.value = '';
 };

 // Todo: figure out why the custom button isn't reading  the word custom when the input field is empty

 return (
  <div className="tip-percentage">
   <p className="section-title tip">Select Tip %</p>
   <div className="tip-percentage__options">
    <button className="option" onClick={handleClick}>{generateATipPercent(5)}</button>
    <button className="option" onClick={handleClick}>{generateATipPercent(10)}</button>
    <button className="option" onClick={handleClick}>{generateATipPercent(15)}</button>
    <button className="option" onClick={handleClick}>{generateATipPercent(25)}</button>
    <button className="option" onClick={handleClick}>{generateATipPercent(50)}</button>
    <input className="option custom" onClick={(e) => resetInput(e)} onChange={handleChange} value={tipPercentage} name="tip" />
   </div>
  </div>
 );
};

export default TipPercentage;
