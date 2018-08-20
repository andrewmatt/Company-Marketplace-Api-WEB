// @flow
import React, { Component } from 'react';
import { connect } from 'react-redux';
import Avatar from '../../components/Avatar';
import Navbar from '../../components/Navbar';
import Sidebar from '../../components/Sidebar';
import { Link } from 'react-router';


class CompanyDetails extends Component {

  render() {
    const { currentUser } = this.props;

    return (
      <div>
      <Navbar/>
      <div className="flex-container">      
      <Sidebar/>
      <div className="formWidth">
        <h3>Company Details: </h3>
          <div>
          
           <span>Company Name: {currentUser.data.company.name}</span> 
            <br/>
            <span>Category: {currentUser.data.company.category}</span> 
            <br/>
            <span>Address: {currentUser.data.company.address}</span> 
            <br/>
            <span>Phone: {currentUser.data.company.phone}</span> 
            <br/>
            <span>Bank Name: {currentUser.data.company.bank_name}</span> 
            <br/>
            <span>Bank Account: {currentUser.data.company.bank_account}</span> 
            <br/>
            <span> Avatar: &nbsp; </span>
               <Avatar email={currentUser.data.company.name} user_avatar={currentUser.data.company.logo} size={100} />
            <br/>
            <br/>
               <Link to="/company-edit" className="" href="/company-edit" >
               <button
                 type="button"
                 className="btn btn-primary"
                >
                Edit Company
              </button>
       </Link>          

          </div>
      </div>
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
  {}
)(CompanyDetails);