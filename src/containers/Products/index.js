// @flow
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import { getProducts, getProduct, productDelete }  from '../../actions/product';
import Navbar from '../../components/Navbar';
import Sidebar from '../../components/Sidebar';

class Products extends Component {

  componentDidMount() {
    const {currentUser} = this.props;
    const id = currentUser.data.company.id; 
    this.props.getProducts(id);
  }
  
  setCurrentProductState = (product) => {
    this.props.getProduct(product);
  }

  deleteProductById = (id, productIndex) => {
    this.props.productDelete(id, productIndex);
  }

  render() {
    const { currentCompanyProducts } = this.props;  
    return (

          <div>
          <Navbar/>  
          <div className="flex-container">
          <Sidebar/> 
          <div className="formWidth">
              <h3> Products List: </h3>
             <br/>
             <h4>This company has {currentCompanyProducts.length} product(s): 
             
             <Link to="/company/products/product-add">
               <button
                 type="button"
                 className="btn btn-primary productAddButton"
                >
                Add Product
              </button>
             </Link>
             
             </h4>
             <br/>
           <div className="table-responsive">
            <table className="table table-striped tableBorder">
              <thead>
                <tr>
                  <th scope="col">#</th>
                  <th scope="col">Name</th>
                  <th scope="col">Price ($)</th>
                  <th scope="col" className="editProductButton">Action</th>
                </tr>
              </thead>
              <tbody>
              {currentCompanyProducts.map((product,i) => 
                <tr key={i}>
                  <th scope="row">{i+1}</th>
                  <td>{product.name}</td>
                  <td>{product.price}</td>
                  <td> 
                    <button type="submit" 
                      onClick={() => this.deleteProductById(product.id, i)} 
                      className="btn btn-danger editProductButton">
                       Delete
                    </button>
                    <Link to="/company/products/product-edit"> 
                     <button type="submit"
                      onClick={() => this.setCurrentProductState(product.id)}
                      className="btn btn-success editProductButton">
                      Edit
                     </button>
                    </Link>
                    <Link to={{pathname: "/company/product"}}>
                     <button type="submit"
                      onClick={() => this.setCurrentProductState(product.id)}
                      className="btn btn-info editProductButton">
                      View
                     </button>
                    </Link>

                  </td>
                </tr>
              )}
              </tbody>
            </table>
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
   { getProducts, getProduct, productDelete }
)(Products);