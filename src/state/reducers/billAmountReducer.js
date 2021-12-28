const reducer = (state = 0, action) => {
 switch (action.type) {
  case 'update/change amount':
   return state = action.payload;
  default:
   return state;
 }
};

export default reducer;