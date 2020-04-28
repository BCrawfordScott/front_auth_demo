import { RECEIVE_CURRENT_USER, LOGOUT } from '../../actions/user_actions';

const defaultState = {
    currentUser: {
        id: null,
        username: null,
        email: null,
    }, 
    authToken: null,
}

export default (state = defaultState, action) => {
    Object.freeze(state);
    const newState = Object.assign({}, state);

    switch(action.type){
        case RECEIVE_CURRENT_USER:
            return Object.assign(newState, { currentUser: action.user, authToken: action.authToken });
        case LOGOUT:
            return Object.assign(newState, defaultState)
        default:
            return newState;
    }
}

export const getCurrentUser = state => state.currentUser;
export const loggedIn = state => Boolean(state.authToken);
export const getCredentials = state => state.authToken;