import { FETCH_POSTS , FETCH_POST, DELETE_POST } from '../actions/index';
import _ from 'lodash';

export default function (state = {}, action) {
    switch (action.type) {
        case FETCH_POSTS:
            //console.log(action.payload.data);   // [ post1, post2, ... ]
            return _.mapKeys(action.payload.data, 'id');    // posts['id']
        case FETCH_POST:
            // const post = action.payload.data;
            // const newState = { ...state };
            // newState[post.id] = post;
            // return newState;

            // same as above, using ES6 syntax
            return { ...state, [action.payload.data.id]: action.payload.data };
        case DELETE_POST:
            // look at the 'state' object, if it has a key of the post id, just drop/omit it from this object,
            // and return a new object that not contain that id
            // '_.omit' will not modify the existent state object, instead it will return a new state object
            return _.omit(state, action.payload);
        default:
            return state;
    }
}