import React, { Component } from 'react';
import { connect } from 'react-redux';

import { fetchPost } from '../actions';

class PostsShow extends Component {
    componentDidMount() {
        const { id } = this.props.match.params;     // support by 'react-router-dom'
        this.props.fetchPost(id);
    }

    render() {
        // this.props === ownProps
        // this.props.post === this.props.posts[this.props.match.params.id]

        const { post } = this.props;

        // check if post is undefined or not
        if (!post) {
            return <div>Loading...</div>;
        }

        return (
            <div>
                <h3>{post.title}</h3>
                <h6>Categories: {post.categories}</h6>
                <p>{post.content}</p>
            </div>
        );
    }
}

// mapStateToProps(application state, props going to this component)
function mapStateToProps({ posts }, ownProps) {
    return {
        post: posts[ownProps.match.params.id],
    };
}

export default connect(mapStateToProps, { fetchPost })(PostsShow);