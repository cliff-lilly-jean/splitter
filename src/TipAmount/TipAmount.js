import React from 'react';

// CSS
import './TipAmount.css';

const TipAmount = () => {

 return (
  <div className="tip-amount two-col-grid">
   <div className="tip-amount__left color--secondary sz--sm">Tip Amount <span className="sub-title">/ person</span></div>
   <div className="tip-amount__right text-align--right text--md"></div>
  </div >
 );
};

export default TipAmount;
