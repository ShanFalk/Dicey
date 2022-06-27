const CREATE_BREW = 'brews/CREATE_BREW';
const GET_BREWS = 'brews/GET_BREWS'
const SEARCH_BREW = 'brews/SEARCH_BREW';


const creation = (brew) => ({
  type: CREATE_BREW,
  brew
});

const retrieveAll = (brews) => ({
  type: GET_BREWS,
  brews
});
const getBrews = (term) => ({
  type: SEARCH_BREW,
  term
});



export const createBrew = (payload) => async (dispatch) => {
    const {
      description,
      title,
      pdf_url,
      price,
      img_url,
      tags,
      user_id
    } = payload

    const form = new FormData();
    form.append('title', title)
    form.append('description', description)
    form.append('pdf_url', pdf_url)
    form.append('img_url', img_url)
    form.append('price', price)
    form.append('tags', tags)
    form.append('user_id', user_id)

  

    
    const response = await fetch('/api/brews', {
      method: "POST",
      body: form
    });
    if (response.ok) {
      const data = await response.json();
      if (data.errors) {
        return;
      }
    
      dispatch(creation(data));
    }
  }


export const getAllBrews = () => async (dispatch) => {
  const response = await fetch('/api/brews');

  if (response.ok) {
    const data = await response.json();
    if (data.errors) {
      return;
    }
      dispatch(retrieveAll(data));
    }
  }

export const searchBrews = (term) => async (dispatch) => {
  const response = await fetch(`/api/brews/${term}`)

  if (response.ok) {
    const data = await response.json();
    if (data.errors) {
      return;
    }
    dispatch(getBrews(data));
  }
}


const initialState = {  };


export default function brewReducer(state = initialState, action) {
    switch (action.type) {
      case CREATE_BREW:
        return {...state, [action.brew.id] : action.brew }
      case GET_BREWS:
        const brews = action.brews
        return {...state, ...brews}
      default:
        return state;
    }
  }
