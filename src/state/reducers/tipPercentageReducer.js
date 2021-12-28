const reducer = (state = 0, action) => {
 switch (action.type) {
  case 'update/change tip percentage':
   return state = action.payload;
  default:
   return state;
 }
};

export default reducer;