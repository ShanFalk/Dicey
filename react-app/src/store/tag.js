const GET_TAGS = 'tags/GET_TAGS';

const retrieveAll = (tags) => ({
    type: GET_TAGS,
    tags
});

export const getAllTags = () => async (dispatch) => {
    const response = await fetch('/api/tags');

    if (response.ok) {
        const data = await response.json();
        if (data.errors) {
            return;
        }
        dispatch(retrieveAll(data));
    }
}

const initialState = {};

export default function tagReducer(state = initialState, action) {
    switch (action.type) {
        case GET_TAGS:
            const tags = action.tags
            return {...state, ...tags}
        default:
            return state;
    }
}