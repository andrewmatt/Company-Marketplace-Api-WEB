// @flow
import React, { Component } from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';

class NotFound extends Component {

  render(){
    return(
  <div style={{ margin: '25px auto', textAlign: 'center' }}>
    <p>Page not found</p>
    { this.props.isAuthenticated &&
    <p><Link to="/home">Go to Home →</Link></p>
    }
     {!this.props.isAuthenticated &&
    <p><Link to="/login">Go to Login →</Link></p>
     }
  </div>
    );
  }
}

export default connect(
  state => ({
    isAuthenticated: state.session.isAuthenticated,
  })
)(NotFound);