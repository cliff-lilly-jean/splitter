const reducer = (state = 0, action) => {
 switch (action.type) {
  case 'change percentage':
   return action.payload;
  default:
   return state;
 }
};

export default reducer;