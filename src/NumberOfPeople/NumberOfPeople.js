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

  // Handle case where input is not a number
  if (isNumber === true) {
   currentUserInputNumber = 0;
   const numOfPplInput = document.querySelector('.people');
   // numOfPplInput.value = '';
  } else {
   // numOfPplInput.removeAttribute('attrName');
   return updateNumberOfPpl(currentUserInputNumber);
  }
 };

 return (
  <div className="number-of-people">
   <label htmlFor="people" className="section-title num-of-ppl">Number of People</label>
   <input type="text" name="people" id="people" className='people input--primary' required value={updateNumberOfPpl(numOfPpl)} onChange={handleChange} />
  </div>
 );
};

export default NumberOfPeople;
