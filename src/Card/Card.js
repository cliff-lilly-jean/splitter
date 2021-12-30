import React from 'react';

// Components
import BillAmount from '../BillAmount/BillAmount';
import TipPercentage from '../TipPercentage/TipPercentage';
import NumberOfPeople from '../NumberOfPeople/NumberOfPeople';
import TipAmount from '../TipAmount/TipAmount';
import Total from '../Total/Total';
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
    <Total></Total>
    <Button></Button>
   </div>
  </div>
 );
};

export default Card;
