const initialState = {
    isAuthenticated: false,
    currentUser: {},
    isVerified: false,
  };
  
  export default function (state = initialState, action) {
    switch (action.type) {
      case 'AUTHENTICATION_SUCCESS':
        return {
          ...state,
          isAuthenticated: true,
          currentUser: action.response,
        };
      case 'REGISTER_SUCCESS':
        return {
          ...state,
          currentUser: action.response,
        }

      case 'LOGOUT': {
        return {
          ...state,
          isAuthenticated: false,
          currentUser: {},
        };
      }

      case 'EDIT_SUCCESS':
      {
        return {
          ...state,
          currentUser: {
            ...state.currentUser,
            data : {
              ...state.currentUser.data,
              company: action.response.data
            }
          },
        };
      }
      case 'USER_VERIFIED':
        return {
          ...state,
          isVerified: true,
        }  
        case 'USER_NOT_VERIFIED':
        return {
          ...state,
          isVerified: false,
        }  
      default:
        return state;
    }
  }