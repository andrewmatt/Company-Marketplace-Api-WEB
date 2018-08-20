import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import { Link } from 'react-router';
import Input from '../Input';

class LoginForm extends Component {
    handleSubmit = data => this.props.onSubmit(data);

    render(){
        const { handleSubmit, submitting } = this.props;
            return (
                <form className="loginForm" onSubmit={handleSubmit(this.handleSubmit)}>
                {/* By wrapping the handleSubmit action in this.props.handleSubmit,
                 a special prop supplied by redux-form, we get the data from each Field based on it’s name. 
                 The submitting prop is also a value from redux-form that evaluates to true
                  if you pass an onSubmit prop to your form that returns a Promise. */}
                    <h3> LOGIN </h3>
                    <Field name="email" type="text" component={Input} placeholder="Email" />
                    <Field name="password" type="password" component={Input} placeholder="Password" />
                    <button
                         type="submit"
                        disabled={submitting}
                        className="btn btn-block btn-primary"
                        >
                        {submitting ? 'Logging in...' : 'Login'}
                   </button>
                   <Link to="/signup" className="btn btn-block btn-primary">
                         Create a new account
                    </Link>
                </form>
            );

    }


}

const validate = (values) => {
    const errors = {};
    if (!values.email) {
      errors.email = 'Required';
    }
    if (!values.password) {
      errors.password = 'Required';
    }
    return errors;
  };

export default reduxForm({
    form: 'login',
    validate,
  })(LoginForm);