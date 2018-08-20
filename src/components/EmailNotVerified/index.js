// @flow
import React, { Component } from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';

class EmailNotVerified extends Component {


  render(){
    return(
  <div style={{ margin: '25px auto', textAlign: 'center' }}>

    <h3> Email is not Verified! Check your email for a verification link! </h3>
    <p><Link to="/login">Go to Login →</Link></p>
  </div>
    );
  }
}

export default connect(
  state => ({
  })
)(EmailNotVerified);