import { 
    RECEIVE_USER,
    RECEIVE_USERS,
} from '../../actions/user_actions';

const defaultUsers = {};

export default (state = defaultUsers, action) => {
    Object.freeze(state);
    const newState = Object.assign({}, state);

    switch(action.type){
        case RECEIVE_USER:
            return Object.assign(newState, { [action.user.id]: action.user } )
        case RECEIVE_USERS:
            return Object.assign(newState, action.users)
        default:
            return newState;
    }
}

export const getUser = (state, id) => state[id];
export const getUsers = state => Object.values(state); 