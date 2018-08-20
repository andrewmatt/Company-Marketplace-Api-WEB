const initialState = {
    currentCompanyProducts: [],
    current: {},
  };
  
  export default function (state = initialState, action) {
    switch (action.type) {
      case 'PRODUCTS_GET_SUCCESS':
        return {
        ...state,
        currentCompanyProducts: action.response.data
      };
    
      case 'SET_CURRENT_PRODUCT':
      {
        return {
          ...state,
          current: action.response.data
        }
      }
      case 'PRODUCT_ADD':
      {
      return {
        ...state,
        currentCompanyProducts: [...state.currentCompanyProducts, action.response.data],
      };
    }
    case 'PRODUCT_DELETE':
      { 
          const index = action.productIndex;
 
      return {
        ...state,
       currentCompanyProducts: [        
          ...state.currentCompanyProducts.slice(0, index),
          ...state.currentCompanyProducts.slice(index + 1)
       ],   
      };
    }
    case 'PRODUCT_EDIT':
    {
      return {
        ...state,
        currentCompanyProducts: [...state.currentCompanyProducts, action.response.data],
      };
    }
      default:
        return state;
    }
  }