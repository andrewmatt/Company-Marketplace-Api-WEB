import { reset } from 'redux-form';
import api from '../api';
import {browserHistory} from 'react-router';

function setCurrentUser(dispatch, response) {
  localStorage.setItem('token', JSON.stringify(response.meta.token));
  dispatch({ type: 'AUTHENTICATION_SUCCESS', response });
}

export function login(data) {
  return dispatch => api.post('/sessions', data)
    .then((response) => {
      if (response.data.isVerified){
        // if the user field isVerified is true then normally set the token and the user
        setCurrentUser(dispatch, response);
        dispatch(reset('login'));
        browserHistory.push('/home');
      } else {
        // if the user field isVerified is false then just call the same reducer that brings the user without the token
        dispatch({ type: 'REGISTER_SUCCESS', response });
        browserHistory.push('/email-not-verified');
      }
    });
}

export function userVerify(data) {
  return dispatch => api.get(`/verify/${data}`)
  .then((response) => {
      if (response.success === false){
        dispatch({type: 'USER_NOT_VERIFIED', response})      
      }
      else if (response.success === true){
        dispatch({type: 'USER_VERIFIED', response});

      }
  });
}

export function signup(data) {
  return dispatch => api.post('/users', data)
    .then((response) => {
      dispatch({ type: 'REGISTER_SUCCESS', response });
      dispatch(reset('signup'));
      browserHistory.push('/email-not-verified');
    });
}

export function logout() {
  return dispatch => api.delete('/sessions')
    .then(() => {
      localStorage.removeItem('token');
      dispatch({ type: 'LOGOUT' });
      browserHistory.push('/login');
    });
}

export function authenticate() {
  return dispatch => api.post('/sessions/refresh')
    .then((response) => {
      setCurrentUser(dispatch, response);
    })
    .catch(() => {
      localStorage.removeItem('token');
      window.location = '/login';
    });
}