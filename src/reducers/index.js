import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';    // document/examples: redux-form.com

import PostsReducer from './reducer_posts';

// global application state
const rootReducer = combineReducers({
    posts: PostsReducer,
    form: formReducer,
});

export default rootReducer;

// 'redux-form' work flow:
//
// 1. Identify different pieces of from state
// 2. Make one 'Field' component per piece of state
// 3. User changes a 'Field' input
// 4. Redux form automatically handles changes
// 5. User submits form
// 6. We validate inputs and handle form submittal