const updateBill = (state = 0, action) => {
 switch (action.type) {
  case 'update bill':
   return state = action.payload;
  default:
   return state;
 }
};

export default updateBill;