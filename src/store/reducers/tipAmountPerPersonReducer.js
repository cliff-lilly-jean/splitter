const reducer = (state = 0, action) => {
 switch (action.type) {
  case 'tip per person':
   return action.payload;
  default:
   return state;
 }
};

export default reducer;