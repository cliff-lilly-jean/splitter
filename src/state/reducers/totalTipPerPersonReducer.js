const reducer = (state = 0, action) => {
 switch (action.type) {
  case 'update/change total tip percentage':
   return state = action.payload;
  default:
   return state;
 }
};

export default reducer;