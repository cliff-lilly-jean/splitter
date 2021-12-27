const reducer = (state = 0, action) => {
 switch (action.type) {
  case 'update number of people':
   return action.payload;
  default:
   return state;
 }
};

export default reducer;