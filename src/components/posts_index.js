import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchPosts } from '../actions/index';

class PostsIndex extends Component {
    // fetching data after the component been rendered,
    // since fetching data is async operation
    componentDidMount() {
        // test using Postman at 'http://reduxblog.herokuapp.com/api/posts?key=YOUR_API_KEY'
        this.props.fetchPosts();
    }

    render() {
        console.log(this.props.posts);
        
        return (
            <div>
                Posts Index
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