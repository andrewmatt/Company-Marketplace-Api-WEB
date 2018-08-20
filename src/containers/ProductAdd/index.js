// @flow
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { productAdd }  from '../../actions/product';
import ProductAddForm from '../../components/ProductAddForm';
import Navbar from '../../components/Navbar';
import Sidebar from '../../components/Sidebar';


class ProductAdd extends Component {

    handleAdd = data => this.props.productAdd(data);

  render() {
    return (
          <div>
          <Navbar/>
          <div className="flex-container">
          <Sidebar/> 
           <ProductAddForm onSubmit={this.handleAdd} />
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
   { productAdd }
)(ProductAdd);