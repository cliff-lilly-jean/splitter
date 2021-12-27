import { combineReducers } from 'redux';

import tipPercentageReducer from './tipPercentageReducer';
import billAmountReducer from './billAmountReducer';
import numberOfPeopleReducer from './numberOfPeopleReducer';
import tipAmountPerPersonReducer from './tipAmountPerPersonReducer';
import totalPerPersonReducer from './totalPerPersonReducer';

const reducers = combineReducers({
 tipPercentage: tipPercentageReducer,
 billAmount: billAmountReducer,
 numberOfPeople: numberOfPeopleReducer,
 tipAmount: tipAmountPerPersonReducer,
 total: totalPerPersonReducer
});

export default reducers;