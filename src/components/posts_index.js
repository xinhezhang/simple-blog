import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';    // like "anchor tag" in HTML
import _ from 'lodash';

import { fetchPosts } from '../actions/index';

class PostsIndex extends Component {
    // fetching data after the component been rendered,
    // since fetching data is async operation
    componentDidMount() {
        // test using Postman at 'http://reduxblog.herokuapp.com/api/posts?key=YOUR_API_KEY'
        this.props.fetchPosts();
    }

    renderPosts() {
        return _.map(this.props.posts, post => {
            return (
                <li className="list-group-item" key={post.id} >
                    <Link to={`/posts/${post.id}`}>
                        {post.title}
                    </Link>
                </li>
            );
        });
    }

    render() {
        //console.log(this.props.posts);

        return (
            <div>
                <div className="text-xs-right">
                    <Link className="btn btn-primary" to="/posts/new">Post</Link>
                </div>
                <h3>Posts</h3>
                <ul className="list-group">
                    {this.renderPosts()}
                </ul>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        posts: state.posts,
    };
}

// Use this way when you need to bind action creators or do something about it
//
// // import { bindActionCreators } from 'redux';
// function mapDispatchToProps(dispatch) {
//     return bindActionCreators({ fetchPosts }, dispatch);
//
// }
// export default connect(null, mapDispatchToProps)(PostsIndex);

// same as above, but with simple syntax
export default connect(mapStateToProps, { fetchPosts })(PostsIndex);