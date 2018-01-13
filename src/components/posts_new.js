import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';  // 'reduxForm' is similar to 'connect' in react-redux

class PostsNew extends Component {
    // we need 'field' argument since we may need to handle different kinds of components
    renderTitleField(field) {
        return (
            <div>
                <input
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
                    name="title"
                    component={this.renderTitleField}   // this is a function reference, not a function call
                />
            </form>
        );
    }
}

// form property MUST be unique, so redux-form could handle multiple forms in same page at the same time
export default reduxForm({
    form: 'PostsNewForm',
})(PostsNew);