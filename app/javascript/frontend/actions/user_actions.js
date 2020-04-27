import { formatAuth } from '../util/auth_util';
import * as UserAPIUtil from '../util/users_api_util';

const RECEIVE_USER = "RECEIVE_USER";
const RECEIVE_USERS = "RECEIVE_USERS";
const RECEIVE_CURRENT_USER = "RECEIVE_CURRENT_USER";


const receiveUsers = users => ({
  type: RECEIVE_USERS,
  users,
})

const receiveUser = user => ({
  type: RECEIVE_USER,
  user,
});

const receiveCurrentUser = user => ({
  type: RECEIVE_CURRENT_USER,
  user
});

const fetchUser = token => id => dispatch => {
  const authFetch = UserAPIUtil.fetchUser(formatAuth(token));

  authFetch(id)
    .then(response => response.json())
    .then(
      user => dispatch(receiveUser(user)),
      error => dispatch(receiveUserErrors(error))
    )
}