const reducer = (state = 0, action) => {
 switch (action.type) {
  case 'update bill amount':
   return action.payload;
  default:
   return state;
 }
};

export default reducer;