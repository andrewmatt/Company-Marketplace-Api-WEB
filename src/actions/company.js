import api from '../api';
import {browserHistory} from 'react-router';

  

export function companyEdit(data) {
    return dispatch => api.patch('/company/', data)
        .then((response) => {
            dispatch({ type: 'EDIT_SUCCESS', response });
            browserHistory.push('/company');
        });
}
  