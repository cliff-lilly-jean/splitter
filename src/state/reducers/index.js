import { combineReducers } from 'redux';
import billAmountReducer from './billAmountReducer';
import numberOfPplReducer from './numberOfPplReducer';
import tipPercentageReducer from './tipPercentageReducer';
import totalTipPerPersonReducer from './totalTipPerPersonReducer';

const reducers = combineReducers({
 bill: billAmountReducer,
 numberOfPpl: numberOfPplReducer,
 tipPercentage: tipPercentageReducer,
 totalTipPerPerson: totalTipPerPersonReducer
});

export default reducers;