// @flow
import React, { Component } from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';
import { userVerify }  from '../../actions/session';

class EmailSuccesfullyVerified extends Component {

componentDidMount(){
  const url_string =  document.URL;
  const token = url_string.substring(url_string.lastIndexOf('/') + 1);
  this.props.userVerify(token);
}

  render(){
    const { isVerified } = this.props;
    return(
  <div style={{ margin: '25px auto', textAlign: 'center' }}>
    {isVerified &&  
    <h3> Email Verification Success! Click below and Login! </h3>
    }
    {!isVerified &&
    <h3> TOKEN EXPIRED OR INVALID ->  <button> Resend </button>  </h3>
    }
    <p><Link to="/login">Go to Login</Link></p>
  </div>
    );
  }
}

export default connect(
  state => ({
    isVerified: state.session.isVerified
  }),
  {userVerify}
)(EmailSuccesfullyVerified);