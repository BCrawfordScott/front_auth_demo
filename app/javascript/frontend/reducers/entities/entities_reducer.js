import { combineReducers } from "redux";
import users, * as UserSelectors from './users_reducer'

export default combineReducers({
    users,
})


export const getUser = (state, id) => UserSelectors.getUser(state.users, id);
export const getUsers = state => UserSelectors.getUsers(state.users);
