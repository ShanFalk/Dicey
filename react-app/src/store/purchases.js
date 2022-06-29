const GET_PURCHASES = 'purchases/GET_PURCHASES'


const getAction = (purchases) => ({
    type: GET_PURCHASES,
    purchases
})


export const getPurchases = () => async (dispatch) => {
    const response = await fetch('/api/purchases');
  
    if (response.ok) {
      const data = await response.json();
      if (data.errors) {
        return data.errors;
      }
  
      dispatch(getAction(data));
    }
  }

  export default function purchaseReducer(state = {}, action) {
    switch (action.type) {
      case GET_PURCHASES:
        return {...state, ...action.purchases }
      default:
        return state;
    }

  }
