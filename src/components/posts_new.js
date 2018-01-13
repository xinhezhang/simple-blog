import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';  // 'reduxForm' is similar to 'connect' in react-redux

class PostsNew extends Component {
    // we need 'field' argument since we may need to handle different kinds of components
    renderField(field) {
        return (
            <div className="form-group">
                <label>{field.label}</label>
                <input
                    className="form-control"
                    type="text"         // text input
                    {...field.input}    // field.input -> objects (including event-handlers, props)
                />
            </div>
        );
    }

    render() {
        return (
            <form action="">
                <Field          // Field is responsible for event-handling and updating different piece of states
                    label="Title"
                    name="title"
                    component={this.renderField}   // this is a function reference, not a function call
                />
                <Field
                    label="Categories"
                    name="categories"
                    component={this.renderField}
                />
                <Field
                    label="Post Content"
                    name="content"
                    component={this.renderField}
                />
            </form>
        );
    }
}

// form property MUST be unique, so redux-form could handle multiple forms in same page at the same time
export default reduxForm({
    form: 'PostsNewForm',
})(PostsNew);