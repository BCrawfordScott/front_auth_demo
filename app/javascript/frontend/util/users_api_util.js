export const fetchUser = (credentials = {}) => id => {
  fetch(`/api/users/${id}`, credentials);
};

export const fetchUsers = (credentials = {}) => () => fetch('api/users', credentials);

export const fetchCurrentUser = (credentials = {}) => () => fetch('api/users/current', credentials);


