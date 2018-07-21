import { combineReducers } from 'redux';
import AuthReducer from './AuthReducer';
import LifetimeReducer from './LifetimeReducer';
import CurrentReducer from './CurrentReducer';
import PriorReducer from './PriorReducer';

export default combineReducers({
    auth: AuthReducer,
    lifetime: LifetimeReducer,
    current: CurrentReducer,
    prior: PriorReducer
});