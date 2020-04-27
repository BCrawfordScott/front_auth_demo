export const signUp = (user) => {
  return fetch(
    `/api/users`,
    {
      method: 'POST',
      data: { user }
    }
  )
}

export const signIn = user => {
  return fetch(
    `/api/authentications`,
    {
      method: 'POST',
      data: { user }
    }
  )
}

export const authorizeFetch = token => req_util => {
  const credentials = { headers: `Authorization: ${token}` }
  return req_util(credentials) 
};
export const formatAuth = token => ({ headers: `Authorization: ${token}` })
