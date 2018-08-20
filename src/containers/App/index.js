// @flow
import React, { Component } from 'react';
import { Router, Route, Redirect  } from 'react-router';
import Home from '../Home';
import CompanyDetails from '../CompanyDetails';
import CompanyEdit from '../CompanyEdit';
import NotFound from '../../components/NotFound';
import EmailNotVerified from '../../components/EmailNotVerified';
import EmailSuccesfullyVerified from '../../components/EmailSuccesfullyVerified';
import Login from '../Login';
import Signup from '../Signup';
import Products from '../Products';
import ProductDetails from '../ProductDetails';
import ProductAdd from '../ProductAdd';
import ProductEdit from '../ProductEdit';
import {browserHistory} from 'react-router';
import { routerActions, syncHistoryWithStore} from 'react-router-redux';
import { UserAuthWrapper} from 'redux-auth-wrapper';
import store from '../../store';
import { connect } from 'react-redux';
import { authenticate } from '../../actions/session';

const history = syncHistoryWithStore(browserHistory, store);

const UserIsAuthenticated = UserAuthWrapper({
  authSelector: state => state.session.currentUser && state.session.currentUser.meta && state.session.currentUser.meta.token && state.session.currentUser.meta.token.length ? state.session : {},
  redirectAction: routerActions.replace,
  failureRedirectPath: '/login',
  wrapperDisplayName: 'UserIsAuthenticated',
});


class App extends Component {

  componentDidMount() {
    const token = localStorage.getItem('token');

    if (token) {
      this.props.authenticate();
    }
}

  render() {
    return (
      <div>
        <Router history={history}>
          <div>
            <Redirect from="/" to="/login"/>
            <Route path="/home" component={UserIsAuthenticated(Home)}/>
            <Route path="/company" component={UserIsAuthenticated(CompanyDetails)} />
            <Route path="/company-edit" component={UserIsAuthenticated(CompanyEdit)} />
            <Route path="/company/products/product-add" component={UserIsAuthenticated(ProductAdd)} />
            <Route path="/company/products" component={UserIsAuthenticated(Products)} />
            <Route name="/company/product" path="/company/product" component={UserIsAuthenticated(ProductDetails)} />
            <Route path="/company/products/product-edit" component={UserIsAuthenticated(ProductEdit)} />
            <Route path="/email-not-verified" component={EmailNotVerified} /> 
            <Route path="/email-success/:token" component={EmailSuccesfullyVerified} /> 
            <Route path="/login" component={Login} /> 
            <Route path="/signup" component={Signup} />
            <Route path="/404" component={NotFound} />
            <Route path="*" component={NotFound} />
          </div>
        </Router>
      </div> 

    );
  }
}

export default connect(
  null,
  { authenticate }
)(App);