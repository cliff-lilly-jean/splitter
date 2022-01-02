import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { bindActionCreators } from 'redux';
import { actionCreators } from '../state/index';

// css
import './BillAmount.css';

const BillAmount = () => {

 // pull in the state
 const bill = useSelector((state) => state.bill);

 // create a dispatch hook
 const dispatch = useDispatch();

 // get the action creators
 const { updateBillAmount } = bindActionCreators(actionCreators, dispatch);

 const handleChange = (userInput) => {

  // get the users input
  let currentUserInputNumber = userInput.target.value;

  // Check to see if the input value is a number or not
  const isNumber = isNaN(currentUserInputNumber);
  const billAmountInput = document.getElementsByClassName('input--primary bill-amount');
  const errorMessage = document.querySelector('.error-message');

  let requiredState = billAmountInput[0].required;

  // Handle case where input is not a number
  if (isNumber === true) {
   requiredState = true;
   errorMessage.style.opacity = 1;
   billAmountInput[0].classList.add('invalid');
  } else {
   requiredState = false;
   errorMessage.style.opacity = 0;
   billAmountInput[0].classList.remove('invalid');
  }

  // handle case where the number is 0
  if (parseInt(currentUserInputNumber) == 0) {
   currentUserInputNumber = parseInt(currentUserInputNumber);
   requiredState = true;
   errorMessage.style.opacity = 1;
   billAmountInput[0].classList.add('invalid');
  } else if (parseInt(currentUserInputNumber) >= 1) {
   currentUserInputNumber = parseInt(currentUserInputNumber);
   errorMessage.style.opacity = 0;
   requiredState = false;
   billAmountInput[0].classList.remove('invalid');
  } else {
   currentUserInputNumber = currentUserInputNumber.toString();
  }
  return updateBillAmount(currentUserInputNumber);
 };

 return (
  <div className="bill">
   <label className="label section-title" htmlFor="bill">Bill <span className="error-message">
    {typeof bill == 'string' ? "Can't be a letter" : "Can't be zero"}</span></label>
   <input className="bill-amount input--primary" value={updateBillAmount(bill)} required name="bill" onChange={handleChange} />
  </div>
 );
};

export default (BillAmount);
