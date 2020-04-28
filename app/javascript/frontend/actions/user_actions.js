import * as UserAPIUtil from '../util/users_api_util';
import * as AuthAPIUtil from '../util/auth_util';

export const RECEIVE_USER = "RECEIVE_USER";
export const RECEIVE_USERS = "RECEIVE_USERS";
export const RECEIVE_CURRENT_USER = "RECEIVE_CURRENT_USER";
export const RECEIVE_USER_ERRORS = "RECEIVE_USER_ERRORS";
export const LOGOUT = "LOGOUT";


const receiveUsers = users => ({
  type: RECEIVE_USERS,
  users,
})

const receiveUser = user => ({
  type: RECEIVE_USER,
  user,
});

const receiveCurrentUser = ({user, auth_token}) => {
 return {
    type: RECEIVE_CURRENT_USER,
    user,
    authToken: auth_token
  }
};

const receiveUserErrors = errors => {
 return {
   type: RECEIVE_USER_ERRORS,
   errors
 } 
}

export const logout = () => {
  AuthAPIUtil.removeUser()
  return { type: LOGOUT };
}

export const signUp = data => dispatch => {
  return AuthAPIUtil.signUp(data).then(
    payload => {
      AuthAPIUtil.persistUser(payload.auth_token);
      dispatch(receiveCurrentUser(payload))
    },
    error => dispatch(receiveUserErrors(error))
  )
}

export const signIn = data => dispatch => {
  return AuthAPIUtil.signIn(data).then(
    payload => {
      AuthAPIUtil.persistUser(payload.auth_token);
      dispatch(receiveCurrentUser(payload));
    },
    error => dispatch(receiveUserErrors(error))
  )
}

export const fetchUser = (id, credentials) => dispatch => {
  return UserAPIUtil.fetchUser(id, credentials).then(
    user => dispatch(receiveUser(user)),
    error => dispatch(receiveUserErrors(error))
  );
}

export const fetchUsers = (credentials) => dispatch => {
  return UserAPIUtil.fetchUsers(credentials).then(
    users => dispatch(receiveUsers(users)),
    error => dispatch(receiveUserErrors(error))
  );
}

export const fetchCurrentUser = (credentials) => dispatch => {
  return UserAPIUtil.fetchCurrentUser(credentials).then(
    payload => {
      AuthAPIUtil.persistUser(payload.auth_token);
      dispatch(receiveCurrentUser(payload));
    },
    error => dispatch(receiveUserErrors(error))
  );
}