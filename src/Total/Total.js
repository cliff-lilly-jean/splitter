import React, { useState } from 'react';
import { store } from '../state/store';

// CSS
import './Total.css';

const Total = () => {

 let [total, setTotal] = useState(0);

 // function(): calculate the total tip amount per person
 const handleChange = () => {
  // console.log(bill, numPeople, tipPercent);
  let newState = store.getState();

  let bill = newState.bill;
  let people = newState.numberOfPpl;

  total = (bill / people);

  if (isNaN(total) === true || isFinite(total) === false) {
   return total = 0.00;
  }

  return setTotal(total.toFixed(2));
 };

 return (
  <div className="total-tip two-col-grid">
   <div className="total-tip__left color--secondary sz--sm">Total<span className="sub-title">/ person</span></div>
   <div className="total-tip__right text-align--right text--md" onChange={store.subscribe(handleChange)}>${total}</div>
  </div>
 );
};

export default Total;
