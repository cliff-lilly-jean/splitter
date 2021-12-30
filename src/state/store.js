import { combineReducers } from 'redux';
import billAmountReducer from './reducers/billAmountReducer';
import numberOfPeopleReducer from './reducers/numberOfPeopleReducer';
import tipPercentageReducer from './reducers/tipPercentageReducer';

const reducers = combineReducers({
 billAmount: billAmountReducer,
 numberOfPeople: numberOfPeopleReducer,
 tipPercentage: tipPercentageReducer
});

export default reducers;