import { postRequest } from "./req_maker";

export const signUp = async data => {
  return await postRequest({
    path: '/api/users',
    data: { user: data }
  })
};

export const signIn = async data => {
  return await postRequest({
    path: '/api/authentications',
    data: { user: data },
  })
};

export const persistUser = token => localStorage.setItem('credentials', token);

export const removeUser = () => localStorage.removeItem('credentials');
