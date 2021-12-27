import { combineReducers } from 'redux';

import tipPercentageReducer from './tipPercentageReducer';
import billAmountReducer from './billAmountReducer';
import numberOfPeopleReducer from './numberOfPeopleReducer';

const reducers = combineReducers({
 tipPercentage: tipPercentageReducer,
 billAmount: billAmountReducer,
 numberOfPeople: numberOfPeopleReducer
});

export default reducers;