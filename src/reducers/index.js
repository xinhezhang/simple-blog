import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';    // redux-form.com

import PostsReducer from './reducer_posts';

// global application state
const rootReducer = combineReducers({
    posts: PostsReducer,
    form: formReducer,
});

export default rootReducer;