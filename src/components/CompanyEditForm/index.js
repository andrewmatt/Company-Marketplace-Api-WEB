// @flow
import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import Input from '../Input';
import { connect } from 'react-redux';



class CompanyEditForm extends Component {

  handleSubmit = data => this.props.onSubmit({company: data});

  componentWillMount () {
    const { currentUser } = this.props;
     this.props.initialize({ id: currentUser.data.company.id, name: currentUser.data.company.name, logo: currentUser.data.company.logo, category: currentUser.data.company.category, address: currentUser.data.company.address, phone: currentUser.data.company.phone , bank_name: currentUser.data.company.bank_name , bank_account: currentUser.data.company.bank_account });
  }

  render() {
     const { handleSubmit, submitting } = this.props;
    return (
      <form
        className='formWidth'
         onSubmit={handleSubmit(this.handleSubmit)}
      >
        <h3>Edit Company:</h3>

        <label>Name</label>
        <Field
          name="name"
          type="text"
          component={Input}
          placeholder="Company Name"
          className="form-control"
        />
        <label>Logo</label>
        <Field
          name="logo"
          type="text"
          component={Input}
          placeholder="Logo Link"
          className="form-control"
        />
        <label>Category</label>
        <Field name="category" component="select" className="form-control">
          <option value="none">No Category</option>
          <option value="events">Events</option>
          <option value="services">Services</option>
          <option value="education">Education</option>
          <option value="apparel">Apparel</option>
          <option value="toys">Toys</option>
        </Field>
        <br/>
        <label>Address</label>
        <Field
          name="address"
          type="text"
          component={Input}
          placeholder="Address"
          className="form-control"
        />
        <label>Phone</label>
        <Field
          name="phone"
          type="text"
          component={Input}
          placeholder="Phone"
          className="form-control"
        />
        <label>Bank Name</label>
        <Field
          name="bank_name"
          type="text"
          component={Input}
          placeholder="Bank Name"
          className="form-control"
        />
        <label>Bank Account</label>
        <Field
          name="bank_account"
          type="text"
          component={Input}
          placeholder="Bank Account"
          className="form-control"
        />

         <button
          type="submit"
          disabled={submitting}
          className="btn btn-block btn-primary"
        >
          {submitting ? 'Submitting...' : 'Edit Data'}
        </button>
      </form>
    );
  }
}

CompanyEditForm = connect(
    state => ({
        isAuthenticated: state.session.isAuthenticated,
        currentUser: state.session.currentUser,
      }),
      { }
)(CompanyEditForm);


export default reduxForm({
  form: 'edit',
})(CompanyEditForm);