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
                {field.meta.error}
            </div>
        );
    }

    render() {
        return (
            <form>
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
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
        );
    }
}

// This function will be called automatically during some point in the Form's lifecycle (like when user submit the form)
// 'values': the object contains all the values that user has entered into the form
function validate(values) {
    // console.log(values) -> { title: 'a', categories: 'b', content: 'c' }
    const errors = {};

    // validate the inputs form 'values'
    if (!values.title || values.title.length < 3) {
        errors.title = "Please enter a title that is at least 3 characters!";
    }
    if (!values.categories) {
        errors.categories = "Please enter a category!";
    }
    if (!values.content) {
        errors.content = "Please enter some content!";
    }

    // if 'errors' is empty, the form is OK to submit
    // if 'errors' has ANY properties, redux form assumes form is invalid
    return errors;
}

// form property MUST be unique, so redux-form could handle multiple forms in same page at the same time
export default reduxForm({
    validate,
    form: 'PostsNewForm',
})(PostsNew);