import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import { fetchPost, deletePost } from '../actions';

class PostsShow extends Component {
    componentDidMount() {
        // enable this if you do not want to re-fetch all posts when user go to main page
        //
        // if (!this.props.post) {
        //     const { id } = this.props.match.params;     // support by 'react-router-dom'
        //     this.props.fetchPost(id);
        // }

        const { id } = this.props.match.params;     // support by 'react-router-dom'
        this.props.fetchPost(id);
    }

    onDeleteClick() {
        // BAD way, since post maybe unavailable during fetching data
        //this.props.deletePost(this.props.post.id);          // BAD

        const { id } = this.props.match.params;
        this.props.deletePost(id);
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
                <Link to="/" className="btn btn-primary">Back</Link>
                <button
                    className="btn btn-danger pull-xs-right"
                    onClick={this.onDeleteClick.bind(this)}
                >
                   Delete
                </button>
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

export default connect(mapStateToProps, { fetchPost, deletePost })(PostsShow);