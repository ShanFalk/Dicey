const GET_USERS = 'tags/GET_USERS';

const retrieveAll = (users) => ({
    type: GET_USERS,
    users
});

export const getAllUsers = () => async (dispatch) => {
    const response = await fetch('/api/users');

    if (response.ok) {
        const data = await response.json();
        if (data.errors) {
            return;
        }

        console.log(data)
        dispatch(retrieveAll(data));
    }
}

const initialState = {};

export default function userReducer(state = initialState, action) {
    switch (action.type) {
        case GET_USERS:
            const users = action.users
            return {...state, ...users}
        default:
            return state;
    }
}
