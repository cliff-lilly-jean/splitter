export const updateBillAmount = (newBillAmount) => {
 return (dispatch) => {
  dispatch({
   type: 'update/change amount',
   payload: newBillAmount
  });
 };
};

export const updateNumberOfPpl = (newNumberOfPpl) => {
 return (dispatch) => {
  dispatch({
   type: 'update/change number of ppl',
   payload: newNumberOfPpl
  });
 };
};

export const updateTipPercentage = (newTipPercentage) => {
 return (dispatch) => {
  dispatch({
   type: 'update/change tip percentage',
   payload: newTipPercentage
  });
 };
};

export const updateTotalTipPercentage = (newTotalTip) => {
 return (dispatch) => {
  dispatch({
   type: 'update/change total tip percentage',
   payload: newTotalTip
  });
 };
};