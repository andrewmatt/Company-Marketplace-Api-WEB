// @flow
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { productEdit }  from '../../actions/product';
import ProductEditForm from '../../components/ProductEditForm';
import Navbar from '../../components/Navbar';
import Sidebar from '../../components/Sidebar';


class ProductEdit extends Component {


  handleEdit = data => {
    this.props.productEdit(data);}

  render() {
    return (
          <div>
           <Navbar/>
           <div className="flex-container">
           <Sidebar/> 
           <ProductEditForm onSubmit={this.handleEdit} />
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
   { productEdit }
)(ProductEdit);