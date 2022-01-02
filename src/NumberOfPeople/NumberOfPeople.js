import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { bindActionCreators } from 'redux';
import { actionCreators } from '../state/index';

// CSS
import './NumberOfPeople.css';

const NumberOfPeople = () => {

 // pull in the state
 const numOfPpl = useSelector((state) => state.numberOfPpl);

 // create a dispatch hook
 const dispatch = useDispatch();

 // get the action creators
 const { updateNumberOfPpl } = bindActionCreators(actionCreators, dispatch);

 const handleChange = (userInput) => {

  // get the users input
  let currentUserInputNumber = userInput.target.value;

  // Check to see if the input value is a number or not
  const isNumber = isNaN(currentUserInputNumber);
  const numOfPplInput = document.getElementsByClassName('input--primary people');
  const errorMessage = document.querySelector('.num-of-ppl > .error-message');

  let requiredState = numOfPplInput[0].required;

  // Handle case where input is not a number
  if (isNumber === true) {
   requiredState = true;
   errorMessage.style.opacity = 1;
   numOfPplInput[0].classList.add('invalid');
  } else {
   requiredState = false;
   errorMessage.style.opacity = 0;
   numOfPplInput[0].classList.remove('invalid');
  }

  // handle case where the number is 0
  if (parseInt(currentUserInputNumber) == 0) {
   currentUserInputNumber = parseInt(currentUserInputNumber);
   requiredState = true;
   errorMessage.style.opacity = 1;
   numOfPplInput[0].classList.add('invalid');
  } else if (parseInt(currentUserInputNumber) >= 1) {
   currentUserInputNumber = parseInt(currentUserInputNumber);
   errorMessage.style.opacity = 0;
   requiredState = false;
   numOfPplInput[0].classList.remove('invalid');
  } else {
   currentUserInputNumber = currentUserInputNumber.toString();
  }
  return updateNumberOfPpl(currentUserInputNumber);
 };

 return (
  <div className="number-of-people">
   <label htmlFor="people" className="section-title num-of-ppl">Number of People <span className="error-message">
    {typeof numOfPpl == 'string' ? "Can't be a letter" : "Can't be zero"}</span></label>
   <input type="text" name="people" id="people" className='people input--primary' required value={updateNumberOfPpl(numOfPpl)} onChange={handleChange} />
  </div>
 );
};

export default NumberOfPeople;
