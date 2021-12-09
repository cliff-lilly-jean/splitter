import React from 'react';

import './BillAmount.css';

const BillAmount = () => {
 return (
  <div className="bill">
   <label className="label section-title" htmlFor="bill">Bill</label>
   <input type="text" name="bill" />
  </div>
 );
};

export default BillAmount;
