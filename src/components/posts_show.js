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
        return (
            <div>
                Posts Show
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