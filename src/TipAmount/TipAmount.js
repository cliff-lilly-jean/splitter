import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { bindActionCreators } from 'redux';
import { actionCreators } from '../state/index';
import { store } from '../state/store';

// CSS
import './TipAmount.css';

const TipAmount = () => {

 // pull in the state
 const state = useSelector((state) => state);

 // create a dispatch hook
 const dispatch = useDispatch();

 // get the action creators
 const { updateTotalTipPercentage } = bindActionCreators(actionCreators, dispatch);

 // function(): calculate the total tip amount per person
 const handleChange = (bill, ppl, tip) => {

  let newTip = bill * tip / ppl;
  console.log(newTip);
  totalTipPerPerson = newTip;
  return updateTotalTipPercentage(totalTipPerPerson);
 };

 return (
  <div className="tip-amount two-col-grid">
   <div className="tip-amount__left color--secondary sz--sm">Tip Amount <span className="sub-title">/ person</span></div>
   <div className="tip-amount__right text-align--right text--md" onChange={() => handleChange}><p onChange={updateTotalTipPercentage(totalTipPerPerson)}>{totalTipPerPerson}</p></div>
  </div >
 );
};

export default TipAmount;
