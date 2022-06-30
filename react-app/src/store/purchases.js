const GET_PURCHASES = 'purchases/GET_PURCHASES'
const CREATE_PURCHASES = 'purchases/CREATE_PURCHASES'


const getAction = (purchases) => ({
    type: GET_PURCHASES,
    purchases
})

const createAction = (purchases) => ({
    type: CREATE_PURCHASES,
    purchases
})


export const getPurchases = (id) => async (dispatch) => {
    const response = await fetch(`/api/users/${id}/purchases`);
    if (response.ok) {
      const data = await response.json();
      if (data.errors) {
        return data.errors;
      }

      dispatch(getAction(data));
    }
  }

export const createPurchases = (payload) => async (dispatch) => {
    // const {
    //   user_id,
    //   brew_ids
    // } = payload

    // const form = new FormData();
    // form.append('user_id', user_id);
    // form.append('brew_ids', brew_ids);

    const response = await fetch('/api/purchases', {
      method: 'POST',
      body: JSON.stringify(payload)
    });

    if (response.ok) {
      const data = await response.json();
      if (data.errors) {
        return data.errors;
      }
      dispatch(createAction(data));
      return data
    }
}

  export default function purchaseReducer(state = {}, action) {
    switch (action.type) {
      case GET_PURCHASES:
        return {...state, ...action.purchases }
      case CREATE_PURCHASES:
        return {...state, ...action.purchases }
      default:
        return state;
    }

  }
