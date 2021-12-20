import React, { useState } from 'react';

import './BillAmount.css';

const BillAmount = () => {

 const [billAmount, setBillAmount] = useState('');

 const handleChange = (userInput) => {

  let currentUserInputNumber = userInput.target.value;

  // Check to see if the input value is a number or not
  const isNumber = isNaN(currentUserInputNumber);

  // Handle case where input is not a number
  if (isNumber === true) {
   alert('You need to input a number');
   currentUserInputNumber = '';
  } else {
   setBillAmount(currentUserInputNumber);
  }
 };

 return (
  <div className="bill">
   <label className="label section-title" htmlFor="bill">Bill</label>
   <input className="bill-amount input--primary" value={billAmount} type="text" name="bill" onChange={handleChange} />
  </div>
 );
};

export default BillAmount;
