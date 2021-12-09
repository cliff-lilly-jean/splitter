import React from 'react';

// CSS
import './TotalTip.css';

const TotalTip = () => {
 return (
  <div className="total-tip two-col-grid">
   <div className="total-tip__left color--secondary sz--sm">Total<span className="sub-title">/ person</span></div>
   <div className="total-tip__right text-align--right text--md">$32.79</div>
  </div>
 );
};

export default TotalTip;
