import { combineReducers } from 'redux';
import billAmountReducer from './billAmountReducer';
import numberOfPplReducer from './numberOfPplReducer';
import tipPercentageReducer from './tipPercentageReducer';

const reducers = combineReducers({
 bill: billAmountReducer,
 numberOfPpl: numberOfPplReducer,
 tipPercentage: tipPercentageReducer,
});

export default reducers;