import { combineReducers } from 'redux';

// global application state
const rootReducer = combineReducers({
    state: (state = {}) => state
});

export default rootReducer;