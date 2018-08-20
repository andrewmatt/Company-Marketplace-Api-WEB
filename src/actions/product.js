import api from '../api';
import {browserHistory} from 'react-router';

  

export function productAdd(data) {
    return dispatch => api.post(`/product/`, data)
    .then((response) => {
        dispatch({ type: 'PRODUCT_ADD', response });
        
        browserHistory.push('company/products');

    });
}

export function productEdit(data) {
    return dispatch => api.patch(`/product/`, data)
    .then((response) => {
        dispatch({ type: 'PRODUCT_EDIT', response });
        
        browserHistory.push('/company/products');

    });
}

export function getProducts(data) {
    return dispatch => api.get(`/products/${data}`)
        .then((response) => {
            dispatch({ type: 'PRODUCTS_GET_SUCCESS', response });
        });
}
  
export function getProduct(id) {
    return dispatch => api.get(`/product/${id}`)
        .then((response) => {
            dispatch({ type: 'SET_CURRENT_PRODUCT', response });
        });
}


export function productDelete(id, productIndex) {

    return dispatch => api.delete(`/product/${id}`)
    .then(( ) => {
  
        dispatch({ type: 'PRODUCT_DELETE', productIndex });
    });
}