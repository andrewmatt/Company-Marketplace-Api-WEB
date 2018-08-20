// @flow
import React, { Component } from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';
import Avatar from '../Avatar';
import { logout } from '../../actions/session';

class Navbar extends Component {

  handleLogout = () => this.props.logout();

  render(){
    const {currentUser} = this.props;
    return(

      
<nav className="navbar navbar-expand-lg navbar-light bg-light nav">
  <Link to="/home" className="navbar-brand">Company Marketplace</Link>
    <ul className="navbar-nav mr-auto">
    </ul>
    <Avatar email={currentUser.data.company.name} user_avatar={currentUser.data.company.logo} size={45} />
    <div className="nav-item dropdown">
        <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          {currentUser.data.company.name}
        </a>
        <div className="dropdown-menu" aria-labelledby="navbarDropdown">
            <Link to="/company" className="dropdown-item" href="/company" >Company</Link>        
          <a className="dropdown-item" href="#" onClick={()=>this.handleLogout()}>Logout</a>



        </div>
    </div>
</nav>
     

    );
  }
}
export default connect(
  state => ({
    currentUser: state.session.currentUser,
  }),
  { logout }
)(Navbar);