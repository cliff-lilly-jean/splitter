import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { updateBill } from '../state/actions/billAmount';

// css
import './BillAmount.css';

const BillAmount = () => {
 // billAmount state
 const billAmount = useSelector(state => state.billAmount);

 const dispatch = useDispatch();

 const handleChange = (userInput) => {
  // get the users input
  let currentUserInputNumber = userInput.target.value;

  // Check to see if the input value is a number or not
  const isNumber = isNaN(currentUserInputNumber);

  // Handle case where input is not a number
  if (isNumber === true) {
   alert('You need to input a number');
   updateBill(currentUserInputNumber = '');
  } else {
   return updateBill(currentUserInputNumber);
  }
 };

 return (
  <div className="bill">
   <label className="label section-title" htmlFor="bill">Bill</label>
   <input className="bill-amount input--primary" placeholder='0' type="text" name="bill" value='' onChange={handleChange} />
  </div>
 );
};

export default BillAmount;
