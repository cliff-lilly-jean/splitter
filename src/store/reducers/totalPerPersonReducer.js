const reducer = (state = 0, action) => {
 switch (action.type) {
  case 'update total':
   return action.payload;
  default:
   return state;
 }
};

export default reducer;