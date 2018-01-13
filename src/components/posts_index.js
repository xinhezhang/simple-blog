import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchPosts } from '../actions/index';

class PostsIndex extends Component {
    // fetching data after the component been rendered,
    // since fetching data is async operation
    componentDidMount() {
        this.props.fetchPosts();    // test using Postman
    }

    render() {
        return (
            <div>
                Posts Index
            </div>
        );
    }
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
export default connect(null, { fetchPosts })(PostsIndex);