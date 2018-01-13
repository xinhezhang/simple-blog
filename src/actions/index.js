import axios from 'axios';

export const FETCH_POSTS = 'FETCH_POSTS';

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