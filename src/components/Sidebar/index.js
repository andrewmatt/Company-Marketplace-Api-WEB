// @flow
import React, { Component } from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';

class Sidebar extends Component {


  render(){

    return(
            
   <div className="wrapper">
    <nav id="sidebar">
        <div className="sidebar-header textPadding">
        <ul className="list-unstyled components">
            <li className="sidebarText">
              <i className="fa fa-home" aria-hidden="true"> </i>
                <Link to="/home" className="sidebarText" href="/home" >Dashboard</Link>
            </li>
            <li className="sidebarText">
              <i className="fa fa-cart-plus" aria-hidden="true"> </i>
                <Link to="/company/products" className="sidebarText" href="/company/products" >Products</Link>
            </li>
        </ul>
        </div>

    </nav>

</div>

    );
  }
}
export default connect()(Sidebar);