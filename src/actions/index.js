import axios from 'axios';

export const FETCH_POSTS = 'FETCH_POSTS';
export const CREATE_POST = 'CREATE_POST';

// api doc: http://reduxblog.herokuapp.com/
const ROOT_URL = 'http://reduxblog.herokuapp.com/api';
const API_KEY = 'simpleblogxinhezhang';     // as long as its unique

export function fetchPosts() {
    const request = axios.get(`${ROOT_URL}/posts?key=${API_KEY}`);

    return {
        type: FETCH_POSTS,
        payload: request,
    };
}

// action creator for create post
export function createPost(values, callback) {
    const request = axios.post(`${ROOT_URL}/posts?key=${API_KEY}`, values)  // a Promise
        .then(() => callback());

    return {
        type: CREATE_POST,
        payload: request,
    };
}