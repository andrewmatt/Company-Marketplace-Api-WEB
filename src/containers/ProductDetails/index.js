// @flow
import React, { Component } from 'react';
import { connect } from 'react-redux';
import {getProduct} from '../../actions/product';
import Navbar from '../../components/Navbar';
import Sidebar from '../../components/Sidebar';

class ProductDetails extends Component {
  render() {
    const { currentProduct } = this.props;  
    return (
      <div>
      <Navbar/>
      <div className="flex-container">
      <Sidebar/> 
      <div className="formWidth">
        <h3>Product Details:</h3>
          <div>
          
          
           <span>Product Name: {currentProduct.name}</span> 
            <br/>
            <span>Description: {currentProduct.description}</span> 
            <br/>
            <span>Price: {currentProduct.price}</span> 
            <br/>
            <span>Package: {currentProduct.package ? "yes" : "no" }</span> 
            <br/>
            <span>Sessions: {currentProduct.sessions}</span> 
            <br/>
            <span>Subscription: {currentProduct.subscription ? "yes" : "no"}</span> 
            <br/>
            <span>Stock Quantity: {currentProduct.stock_qty}</span> 
            <br/>
            <span>Attributes: {currentProduct.attributes}</span> 
            <br/>
            <span>Options: {currentProduct.options}</span> 
            <br/>
            {/* <span>Pictures (TODO_PICTURE_LIST): {}</span>  */}
            {/* <br/> */}


          </div>
      </div>
      </div>
    </div>
    );
  }
}

export default connect(
  state => ({
    currentCompanyProducts: state.product.currentCompanyProducts,
    currentUser: state.session.currentUser,
    currentProduct: state.product.current,
  }),
  {getProduct}
)(ProductDetails);