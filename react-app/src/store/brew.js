const CREATE_BREW = 'brews/CREATE_BREW';
const SEARCH_BREW = 'brews/SEARCH_BREW';


const createBrew = (brew) => ({
  type: CREATE_BREW,
  brew
});

const getBrews = (term) => ({
  type: SEARCH_BREW,
  term
})


export const creation = (payload) => async (dispatch) => {

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


    const response = await fetch('/api/brews/', {
      headers: {
        'Content-Type': 'application/json'
      },
      method: "POST",
      body: form
    });
    if (response.ok) {
      const data = await response.json();
      if (data.errors) {
        return;
      }

      dispatch(createBrew(data));
    }
  }

const searchBrews = (term) => async (dispatch) => {
  const response = await fetch(`/api/brews/${term}`)

  if (response.ok) {
    const data = await response.json();
    if (data.errors) {
      return;
    }
    dispatch(getBrews(data));
  }
}

const initialState = { brew: null };


export default function reducer(state = initialState, action) {
    switch (action.type) {
      case CREATE_BREW:
        return {...state, [action.brew.id] : action.payload }
      default:
        return state;
    }
  }
