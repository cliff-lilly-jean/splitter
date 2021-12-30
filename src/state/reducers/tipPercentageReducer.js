const updateTip = (state = 0, action) => {
 switch (action.type) {
  case 'update tip':
   return state = action.payload;
  default:
   return state;
 }
};

export default updateTip;