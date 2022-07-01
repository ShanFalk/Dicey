const REMOVE_RECOMMENDED = 'brews/REMOVE_RECOMMENDED'
const RECOMMEND_BREW = 'brews/RECOMMEND_BREW'

const recommend = (brews, title) => ({
    type: RECOMMEND_BREW,
    brews, 
    title
  })

  const removal = () => ({
    type: REMOVE_RECOMMENDED
  })

export const recommendBrews = (id) => async dispatch => {
    const response = await fetch(`/api/brews/${id}/recommend`)
  
    if (response.ok) {
      const data = await response.json();
      if (data.errors) {
        return;
      }
  
      dispatch(recommend(data.brews, data.title))
      return null
  }
  }

  export const removeRecommended = (id) => async dispatch => {
      dispatch(removal())
      return null
  }


  export default function recommender(state = {}, action) {
    switch (action.type) {
      case RECOMMEND_BREW:
        const brews = action.brews
        return {...state, ...brews, "title": action.title}
      case REMOVE_RECOMMENDED:
        return {}
      default:
        return state;
    }

  }
