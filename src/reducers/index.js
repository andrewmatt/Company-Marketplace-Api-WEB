import { combineReducers } from 'redux';
import {routerReducer} from 'react-router-redux';
import { reducer as form } from 'redux-form';
import session from './session';
import product from './product';
const appReducer = combineReducers({
  routing: routerReducer,
  form,
  session,
  product,
});

export default appReducer;