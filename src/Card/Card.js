import React from 'react';

// Components
import BillAmount from '../BillAmount';
import TipPercentage from '../TipPercentage';
import NumberOfPeople from '../NumberOfPeople';
import TipAmount from '../TipAmount';
import TotalTip from '../TotalTip';
import Button from '../Button';

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
