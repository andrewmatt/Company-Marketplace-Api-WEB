// @flow
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { companyEdit }  from '../../actions/company';
import CompanyEditForm from '../../components/CompanyEditForm';
import Navbar from '../../components/Navbar';
import Sidebar from '../../components/Sidebar';


class CompanyEdit extends Component {

    handleEdit = data => this.props.companyEdit(data);

  render() {
    return (
          <div>
           <Navbar/> 
           <div className="flex-container">
           <Sidebar/> 
           <CompanyEditForm onSubmit={this.handleEdit} />
           </div>
          </div>
    );
  }
}

export default connect(
  state => ({
    isAuthenticated: state.session.isAuthenticated,
    currentUser: state.session.currentUser,
  }),
   { companyEdit }
)(CompanyEdit);