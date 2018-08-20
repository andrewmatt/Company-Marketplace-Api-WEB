// @flow
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { login } from '../../actions/session';
import LoginForm from '../../components/LoginForm';

class Login extends Component {

    handleLogin = data => this.props.login(data);

    render(){
        return (
            <LoginForm onSubmit={this.handleLogin} />
        );
    }


}

export default connect (null, {login})(Login);