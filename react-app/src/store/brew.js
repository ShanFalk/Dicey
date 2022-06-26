const CREATE_BREW = 'brews/CREATE_BREW';


const createBrew = (brew) => ({
  type: CREATE_BREW,
  payload: brew
});


export const creation = (payload) => async (dispatch) => {
    const response = await fetch('/api/brews/', {
      headers: {
        'Content-Type': 'application/json'
      }, 
      method: "POST", 
      body: payload
    });
    if (response.ok) {
      const data = await response.json();
      if (data.errors) {
        return;
      }
    
      dispatch(createBrew(data));
    }
  }

const initialState = { brew: null };


export default function reducer(state = initialState, action) {
    switch (action.type) {
      case CREATE_BREW:
        return { brew: action.payload }
      default:
        return state;
    }
  }
