import axios from 'axios';

export const FETCH_POSTS = 'FETCH_POSTS';
export const CREATE_POST = 'CREATE_POST';
export const FETCH_POST = 'FETCH_POST';
export const DELETE_POST = 'DELETE_POST';

// api doc: http://reduxblog.herokuapp.com/
const ROOT_URL = 'http://reduxblog.herokuapp.com/api';
const API_KEY = 'simpleblogxinhezhang';     // as long as its unique

// action creator for fetch all posts
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

// action creator for fetch specific post
export function fetchPost(id) {
    const request = axios.get(`${ROOT_URL}/posts/${id}?key=${API_KEY}`);

    return {
        type: FETCH_POST,
        payload: request,
    };
}

// action creator for delete specific post
export function deletePost(id, callback) {
    const request = axios.delete(`${ROOT_URL}/posts/${id}?key=${API_KEY}`)
        .then(() => callback());

    return {
        type: DELETE_POST,
        payload: id,    // we do not need to return 'request' since we do not need the access of post anymore
    };
}