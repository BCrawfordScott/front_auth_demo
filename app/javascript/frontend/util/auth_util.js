import { postReq } from "./req_maker";

export const signUp = async data => {
  return await postReq({
    path: '/api/users',
    data: { user: data }
  })
};

export const signIn = async data => {
  return await postReq({
    path: '/api/authentications',
    data: { user: data },
  })
};

export const persistUser = token => localStorage.setItem('credentials', token);

export const removeUser = () => localStorage.removeItem('credentials');