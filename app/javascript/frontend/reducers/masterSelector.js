import * as UiSelectors from './ui/ui_reducer';
import * as EntitiesSelectors from './entities/entities_reducer';
import * as ErrorsSelectors from './errors/errors_reducer';


export const getCurrentUser = state => UiSelectors.getCurrentUser(state.ui);
export const loggedIn = state => UiSelectors.loggedIn(state.ui);
export const getCredentials = state => UiSelectors.getCredentials(state.ui);
export const getUser = (state, id) => EntitiesSelectors.getUser(state.entities, id);
export const getUsers = state => EntitiesSelectors.getUsers(state.entities);
export const getUserErrors = state => ErrorsSelectors.getUserErrors(state.errors);