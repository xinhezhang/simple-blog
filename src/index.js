import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import promise from 'redux-promise';

import './index.css';

import App from './components/App';
import reducers from "./reducers";
import PostsIndex from './components/posts_index';
import PostsNew from './components/posts_new';
import PostsShow from './components/posts_show';


const createStoreWithMiddleware = applyMiddleware(promise)(createStore);

// Inside "Switch", put the most specific path on the top
// ':id' is the wildcard
ReactDOM.render(
    <Provider store={createStoreWithMiddleware(reducers)}>
        <div>
            <App />
            <BrowserRouter>
                <div>
                    <Switch>
                        <Route path="/posts/new" component={PostsNew} />
                        <Route path="/posts/:id" component={PostsShow} />
                        <Route path="/" component={PostsIndex} />
                    </Switch>
                </div>
            </BrowserRouter>
        </div>
    </Provider>,
    document.getElementById('root')
);