const updatePpl = (state = 0, action) => {
 switch (action.type) {
  case 'update people':
   return state = action.payload;
  default:
   return state;
 }
};

export default updatePpl;