// @flow
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { signup } from '../../actions/session';
import SignupForm from '../../components/SignupForm';


class Signup extends Component {

  handleSignup = data => this.props.signup(data);

  render() {
    return (
      <div>
        <SignupForm onSubmit={this.handleSignup} />
      </div>
    );
  }
}

export default connect(null, { signup })(Signup);