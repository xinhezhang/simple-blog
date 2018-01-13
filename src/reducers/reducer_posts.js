import { FETCH_POSTS } from '../actions/index';

export default function (state = {}, action) {
    switch (action.type) {
        case FETCH_POSTS:
            console.log(action.payload.data);   // [ post1, post2, ... ]
            break;
        default:
            return state;
    }
}