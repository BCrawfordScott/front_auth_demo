import { getRequest } from './req_maker';

export const fetchUser = async (id, credentials) => {
  return await getRequest({
    path: `/api/users/${id}`,
    credentials,
  })
}

export const fetchUsers = async (credentials) => {
  return await getRequest({
    path: `/api/users`,
    credentials,
  })
}

export const fetchCurrentUser = async (credentials) => {
  return await getRequest({
    path: `/api/users/current`,
    credentials,
  })
}
