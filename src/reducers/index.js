import { combineReducers } from 'redux';
import PostsReducer from './reducer_posts';

// global application state
const rootReducer = combineReducers({
    posts: PostsReducer,
});

export default rootReducer;