
const RECOMMEND_BREW = 'brews/RECOMMEND_BREW'

const recommend = (brews, title) => ({
    type: RECOMMEND_BREW,
    brews, 
    title
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


  export default function recommender(state = {}, action) {
    switch (action.type) {
      case RECOMMEND_BREW:
        const brews = action.brews
        return {...state, ...brews, "title": action.title}
      default:
        return state;
    }

  }
