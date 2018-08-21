// @flow
import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import Input from '../Input';
import { connect } from 'react-redux';



class ProductEditForm extends Component {

  handleSubmit = (data) => this.props.onSubmit({product: data});


  componentDidUpdate(){
    const { currentProduct } = this.props;
   if (currentProduct && currentProduct.id && currentProduct.name && !this.props.initialized) {
     this.props.initialize({ 
       id: currentProduct.id, name: currentProduct.name,
       description: currentProduct.description, 
       attributes: currentProduct.attributes,
       options: currentProduct.options,
       package: currentProduct.package ? "true" : "false", 
       price: currentProduct.price,
       sessions: currentProduct.sessions,
       stock_qty: currentProduct.stock_qty, 
       subscription: currentProduct.subscription ? "true" : "false"
      });
    }

  }

  render() {
    const { handleSubmit, submitting } = this.props;
 
    return (
      
      <form
        className='formWidth'
         onSubmit={handleSubmit(this.handleSubmit)}
      >
        <h3> Edit Product (All Fields are Requied) </h3>

        <label>Name</label>
        <Field
          name="name"
          type="text"
          component={Input}
          placeholder="Product Name"
          className="form-control"
        />
        <label>Description</label>
        <Field
          name="description"
          type="text"
          component={Input}
          placeholder="Description"
          className="form-control"
        />
        <label>Price</label>
        <Field
          name="price"
          type="text"
          component={Input}
          placeholder="Price"
          className="form-control"
        />
         <label>Package</label>
        <Field name="package" component="select" className="form-control" >
          <option value="true">Yes</option>
          <option value="false">No</option>
        </Field>
        <br/>
        <label>Sessions Included</label>
        <Field
          name="sessions"
          type="text"
          component={Input}
          placeholder="Sessions Included"
          className="form-control"
        />
        <label>Subscription</label>
        <Field name="subscription" component="select" className="form-control">
          <option value="true">Yes</option>
          <option value="false">No</option>
        </Field>
        <br/>
        <label>Stock Quantity</label>
        <Field
          name="stock_qty"
          type="text"
          component={Input}
          placeholder="Stock Quantity"
          className="form-control"
        />
        <label>Attributes</label>
        <Field
          name="attributes"
          type="text"
          component={Input}
          placeholder="Attributes"
          className="form-control"
        />
        <label>Options</label>
        <Field
          name="options"
          type="text"
          component={Input}
          placeholder="Options"
          className="form-control"
        />

         <button
          type="submit"
          disabled={submitting}
          className="btn btn-block btn-primary"
        >
          {submitting ? 'Submitting...' : 'Edit Product'}
        </button>
      </form>
    );
  }
}

ProductEditForm = connect(
    state => ({
      currentCompanyProducts: state.product.currentCompanyProducts,
      currentUser: state.session.currentUser,
      currentProduct: state.product.current,
      }),
      { }
)(ProductEditForm);


export default reduxForm({
  form: 'prodEdit',
})(ProductEditForm);