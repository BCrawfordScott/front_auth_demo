import { 
    RECEIVE_USER,
    RECEIVE_USERS,
    RECEIVE_CURRENT_USER,
    RECEIVE_USER_ERRORS,
    LOGOUT, 
} from '../../actions/user_actions';

const defaultErrors = [];

export default (state = defaultErrors, action) => {
    Object.freeze(state);

    switch(action.type) {
        case RECEIVE_USER_ERRORS:
            return action.errors
        case RECEIVE_USER:
        case RECEIVE_USERS:
        case RECEIVE_CURRENT_USER:
        case LOGOUT:
            return [];
        default:
            return state;
    }
}

export const getUserErrors = state => state;