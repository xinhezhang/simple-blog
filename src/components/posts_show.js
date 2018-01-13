import React, { Component } from 'react';
import { connect } from 'react-redux';

import { fetchPost } from '../actions';

class PostsShow extends Component {
    componentDidMount() {
        const { id } = this.props.match.params;     // support by 'react-router-dom'
        this.props.fetchPost(id);
    }

    render() {
        const post = this.props.posts[this.props.match.params.id];  // the post we want to show

        return (
            <div>
                Posts Show
            </div>
        );
    }
}

function mapStateToProps({ posts }) {
    return {
        posts,
    };
}

export default connect(null, { fetchPost })(PostsShow);