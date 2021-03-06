import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { createPost } from '../actions';

class PostsNew extends Component {

  renderField(field) {
    const { meta : { touched , error} } = field;
    const className = `form-group ${ touched && error ? 'has-danger' : ''}`

    return(
      <div className={ className }>
        <label>{field.label}</label>
        <input
          className="form-control"
          type="text"
          {...field.input}
        />
        <span className="text-help span-error">{ touched ? error : ''}</span>
      </div>
    );
  }


  onSubmit(values){
    this.props.createPost(values, () => {
      this.props.history.push('/');
    });
  }

  render() {

    const { handleSubmit } = this.props;

    return(
      <form className="container" onSubmit={handleSubmit(this.onSubmit.bind(this))}>
        <Field
          label="Title : "
          name="title"
          component={this.renderField}
        />
        <Field
          label="Categories : "
          name="categories"
          component={this.renderField}
        />
        <Field
          label="Content for Post "
          name="content"
          component={this.renderField}
        />
        <button type="submit" className="btn btn-success">Save</button>
        <Link className="btn btn-danger" to="/">Cancel</Link>
      </form>
    );
  }
}

function validate(values) {
  const errors = {};

  if(!values.title){
    errors.title = "Enter a title !";
  }
  if (!values.categories) {
    errors.categories = "Enter a category!";
  }
  if (!values.content) {
    errors.content = "Enter a Content for the post!";
  }


  return errors
}

export default reduxForm({
  validate,
  form : 'PostsNewForm'
})(
  connect(null,{ createPost })(PostsNew)
);
