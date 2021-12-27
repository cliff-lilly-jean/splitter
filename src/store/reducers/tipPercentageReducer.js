const reducer = (state = 0, action) => {
 switch (action.type) {
  case 'update tip percentage':
   return action.payload;
  default:
   return state;
 }
};

export default reducer;