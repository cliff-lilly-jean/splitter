const reducer = (state = 0, action) => {
 switch (action.type) {
  case 'add bill amount':
   return action.payload;
  default:
   return state;
 }
};

export default reducer;