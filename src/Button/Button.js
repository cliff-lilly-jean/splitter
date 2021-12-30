import React from 'react';
import { useDispatch } from 'react-redux';
import { bindActionCreators } from 'redux';
import { actionCreators } from '../state/index';


// CSS
import './Button.css';

const Button = () => {

 // create a dispatch hook
 const dispatch = useDispatch();

 // get the action creators
 const { updateBillAmount, updateNumberOfPpl, updateTipPercentage } = bindActionCreators(actionCreators, dispatch);


 const handleReset = () => {
  // declare a variable to hold all the inputs
  let inputs = Array.from(document.querySelectorAll('input'));

  // declare a variable to hold all the buttons with the class option
  let tipButtons = Array.from(document.querySelectorAll('button.option.active'));

  // use classList to remove the active class
  if (tipButtons.length) {
   tipButtons.forEach(button => button.classList.remove('active'));
  }

  // use forEach to iterate through each input and clear them
  inputs.forEach(input => input.value = '');

  // update the state of the store
  updateBillAmount(0);
  updateNumberOfPpl(0);
  updateTipPercentage(0);
 };

 return (
  <button onClick={handleReset} className="button">reset</button>
 );
};

export default Button;
