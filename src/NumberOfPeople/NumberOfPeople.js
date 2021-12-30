import React from 'react';

// CSS
import './NumberOfPeople.css';

const NumberOfPeople = () => {

 return (
  <div className="number-of-people">
   <label htmlFor="people" className="section-title num-of-ppl">Number of People</label>
   <input type="text" name="people" id="people" className='input--primary' placeholder='0' />
  </div>
 );
};

export default NumberOfPeople;
