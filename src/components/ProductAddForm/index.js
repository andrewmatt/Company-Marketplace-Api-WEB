// @flow
import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import Input from '../Input';
import { connect } from 'react-redux';



class ProductAddForm extends Component {

  handleSubmit = (data) => this.props.onSubmit({product: data});

  componentWillMount () {
    const { currentUser } = this.props;
    this.props.initialize({ company_id: currentUser.data.company.id});
  }

  render() {
     const { handleSubmit, submitting } = this.props;
    return (
      <form
        className='formWidth'
         onSubmit={handleSubmit(this.handleSubmit)}
      >
        <h3> Add Product: </h3>

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
        <Field name="package" component="select" className="form-control">
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
          {submitting ? 'Submitting...' : 'Add Product'}
        </button>
      </form>
    );
  }
}

ProductAddForm = connect(
    state => ({
      currentCompanyProducts: state.product.currentCompanyProducts,
      currentUser: state.session.currentUser,
      currentProduct: state.product.current,
      }),
      { }
)(ProductAddForm);


export default reduxForm({
  form: 'prodAdd',
})(ProductAddForm);