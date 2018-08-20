// @flow
import React, { Component } from 'react';
import { connect } from 'react-redux';
import Navbar from '../../components/Navbar';
import Sidebar from '../../components/Sidebar';
import { getProducts, getProduct }  from '../../actions/product';
import { Link } from 'react-router';

class Home extends Component {

  componentDidMount() {
    const {currentUser} = this.props;
    const id = currentUser.data.company.id; 
    this.props.getProducts(id);

  }

  handleClick(data, index) {
  	this.setState({
    	activeIndex: index,
    });
  };

  calculateTotalValue(currentCompanyProducts){
    let sum=0;
    currentCompanyProducts.map((product,i) => {
      sum += product.price;
      return sum;
    });
    return sum;
  }

  render() {
    const {currentCompanyProducts} = this.props;
    const sum =  this.calculateTotalValue(currentCompanyProducts);
    return (
      
      <div>
      <Navbar/>     
      <div className="flex-container">
      <Sidebar/> 
      <div id="main">

        <div className="row">
          <div className="dashboardDiv ">
            <p> &nbsp; Total Products</p> 
            <p className="text2"> 
            {currentCompanyProducts.length}
            </p>
          </div>
          <div className="dashboardDiv">
            <p> &nbsp; Total Value </p>
            <p className="text"> 
            {sum}$
            </p>
          </div>

          <div>            
          <Link to="/company/products" className="sidebarText btnShow" href="/company/products" >

            <button className="btn btn-info btnShow" type="button">
               View Products
            </button>
          </Link>
          </div>

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
    currentCompanyProducts: state.product.currentCompanyProducts,
    currentProduct: state.product.current,
  }),
  { getProducts, getProduct }
)(Home);