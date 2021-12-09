import React from 'react';

// Components
import BillAmount from '../BillAmount/BillAmount';
import TipPercentage from '../TipPercentage/TipPercentage';
import NumberOfPeople from '../NumberOfPeople/NumberOfPeople';
import TipAmount from '../TipAmount/TipAmount';
import TotalTip from '../TotalTip/TotalTip';
import Button from '../Button/Button';

// CSS
import './Card.css';

const Card = () => {
 return (
  <div className="card">
   <div className="card__left">
    <BillAmount></BillAmount>
    <TipPercentage></TipPercentage>
    <NumberOfPeople></NumberOfPeople>
   </div>
   <div className="card__right">
    <TipAmount></TipAmount>
    <TotalTip></TotalTip>
    <Button></Button>
   </div>
  </div>
 );
};

export default Card;
