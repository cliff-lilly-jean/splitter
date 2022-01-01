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

  // Handle case where input is not a number
  if (isNumber === true) {
   // alert('You need to input a number');
   currentUserInputNumber = 0;
   const billAmountInput = document.getElementsByClassName('bill-amount');
   billAmountInput[0].value = '';
  } else {
   return updateBillAmount(currentUserInputNumber);
  }
 };

 return (
  <div className="bill">
   <label className="label section-title" htmlFor="bill">Bill</label>
   <input className="bill-amount input--primary" value={updateBillAmount(bill)} required type="text" name="bill" onChange={handleChange} />
  </div>
 );
};

export default (BillAmount);
