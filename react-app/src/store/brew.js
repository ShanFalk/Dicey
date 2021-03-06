const CREATE_BREW = 'brews/CREATE_BREW';
const GET_BREWS = 'brews/GET_BREWS'
const MODIFY_BREW = 'brews/MODIFY_BREW';
const DELETE_BREW = 'brews/DELETE_BREW'




const creation = (brew) => ({
  type: CREATE_BREW,
  brew
});

const retrieveAll = (brews) => ({
  type: GET_BREWS,
  brews
});

const update = (brew) => ({
  type: MODIFY_BREW,
  brew
});

const deletion = (brewId) => ({
  type: DELETE_BREW,
  brewId
})






export const createBrew = (payload) => async (dispatch) => {
    const {
      description,
      title,
      pdf_url,
      price,
      imgs,
      brew_tags,
      user_id
    } = payload

    const form = new FormData();
    form.append('title', title);
    form.append('description', description);
    form.append('pdf_url', pdf_url);
    for (let [key, img] of Object.entries(imgs)) {
      form.append(`img_${key}`, img);
    }
    form.append('price', price);
    form.append('brew_tags', brew_tags);
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
    return data
  }
}



export const getAllBrews = () => async (dispatch) => {
  const response = await fetch('/api/brews');

  if (response.ok) {
    const data = await response.json();
    if (data.errors) {
      return data.errors;
    }

    dispatch(retrieveAll(data));
  }
}



export const updateBrew = (payload) => async (dispatch) => {
  const {
    description,
    title,
    pdf_url,
    price,
    id,
    imgs,
    brew_tags
  } = payload

  const form = new FormData();
  form.append('title', title)
  form.append('description', description)
  form.append('pdf_url', pdf_url)
  for (let [key, img] of Object.entries(imgs)) {
    if(key.startsWith('E-')) {
      form.append(key.slice(2), img)
    } else {
      form.append(`img_${key}`, img);
    }
  }
  form.append('price', price)
  form.append('brew_tags', brew_tags)
  form.append('id', id)

  const response = await fetch('/api/brews', {
    method: "PUT",
    body: form
  });

  if (response.ok) {
    const data = await response.json();
    if (data.errors) {
      return;
    }

    dispatch(creation(data));
    return data
  }
}

export const deleteBrew = (brewId) => async dispatch => {
  const response = await fetch(`/api/brews/${brewId}`, {
    method: "DELETE"
  })
  if (response.ok) {
    const data = await response.json()
    if(data.errors){
      return;
    }
    if(data.Successful) dispatch(deletion(brewId))

    else dispatch(creation(data))

    return data
  }
}

export const addReviewToBrew = (payload) => async (dispatch) => {
  const {
    brew_id,
    content,
    rating,
    user_id,
  } = payload

  const form = new FormData();
  form.append('brew_id', brew_id)
  form.append('content', content)
  form.append('rating', rating)
  form.append('user_id', user_id)

  const response = await fetch('/api/reviews', {
    method: "POST",
    body: form
  });

  if (response.ok) {
    const data = await response.json();
    if (data.errors) {
      return data;
    }

    dispatch(creation(data));
    return data
  }
}

export const updateReviewOnBrew = (payload) => async (dispatch) => {
  const {
    id,
    brew_id,
    content,
    rating,
    user_id,
  } = payload

  const form = new FormData();
  form.append('id', id)
  form.append('brew_id', brew_id)
  form.append('content', content)
  form.append('rating', rating)
  form.append('user_id', user_id)

  const response = await fetch('/api/reviews', {
    method: "PUT",
    body: form
  });
  if (response.ok) {
    const data = await response.json();
    if (data.errors) {
      return data;
    }

    dispatch(creation(data));
    return data
  }
}

export const deleteReview = (reviewId, brewId) => async dispatch => {
  const response = await fetch(`/api/reviews/${reviewId}`, {
    method: "DELETE",
    body: brewId
  })
  if (response.ok) {
    const data = await response.json();
    if (data.errors) {
      return;
    }

    dispatch(creation(data));
    return null
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
      case MODIFY_BREW:
        return {...state, [action.brew.id] : action.brew }
      case DELETE_BREW:
        let newState = {...state}
        delete newState[action.brewId]
        return newState
      default:
        return state;
    }

  }
