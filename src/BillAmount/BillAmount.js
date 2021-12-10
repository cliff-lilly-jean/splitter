import React, { useState } from 'react';

import './BillAmount.css';

const BillAmount = () => {

 const handleChange = (billAmount) => {

  // Check to see if the input value is a number or not
  const isNumber = isNaN(billAmount.target.value);


  if (isNumber === true) {
   alert('You need to input a number');
   billAmount.target.value = '';
  } else {
   console.log(billAmount.target.value);
  }
 };

 return (
  <div className="bill">
   <label className="label section-title" htmlFor="bill">Bill</label>
   <input className="bill-amount" type="text" name="bill" onChange={handleChange} />
  </div>
 );
};

export default BillAmount;
