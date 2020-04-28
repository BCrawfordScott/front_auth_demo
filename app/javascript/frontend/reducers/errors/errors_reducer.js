import { combineReducers } from "redux";
import userErrors, * as UserErrorSelectors from './user_errors_reducer'

export default combineReducers({
    userErrors,
});

export const getUserErrors = state => UserErrorSelectors.getUserErrors(state.userErrors);