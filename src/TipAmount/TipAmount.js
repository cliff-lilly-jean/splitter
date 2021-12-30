import React, { useState } from 'react';
import { store } from '../state/store';

// CSS
import './TipAmount.css';

const TipAmount = () => {

 let [tipAmountPerPerson, setTipAmountPerPerson] = useState(0);

 // function(): calculate the total tip amount per person
 const handleChange = () => {
  // console.log(bill, numPeople, tipPercent);
  let newState = store.getState();

  let bill = newState.bill;
  let tip = newState.tipPercentage;
  let people = newState.numberOfPpl;

  tipAmountPerPerson = (bill / people) * tip / 100;

  if (isNaN(tipAmountPerPerson) === true || isFinite(tipAmountPerPerson) === false) {
   return tipAmountPerPerson = 0.00;
  }

  return setTipAmountPerPerson(tipAmountPerPerson.toFixed(2));
 };

 return (
  <div className="tip-amount two-col-grid">
   <div className="tip-amount__left color--secondary sz--sm">Tip Amount <span className="sub-title">/ person</span></div>
   <div className="tip-amount__right text-align--right text--md" onChange={store.subscribe(handleChange)}>{tipAmountPerPerson}</div>
  </div >
 );
};

export default TipAmount;
