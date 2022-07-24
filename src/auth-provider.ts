import { Users } from './screenes/project-list/type'
const localStorageKey = '__auth_provider_token__'
export const getToken = () => {
  return window.localStorage.getItem(localStorageKey)
}
export const handleUserResponce = ({ user }: { user: Users }) => {
  window.localStorage.setItem(localStorageKey, user.token)
  return user
}

const apiUrl = process.env.REACT_APP_API_URL

export const login = (data: { username: string; password: string }) => {
  return fetch(`${apiUrl}/login`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  }).then(async (response) => {
    if (response.ok) {
      return handleUserResponce(await response.json());
    } else {
      return Promise.reject(await response.json());
    }
  });
};
export const register = (data: { username: string; password: string }) => {
  return fetch(`${apiUrl}/register`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  }).then(async (response) => {
    if (response.ok) {
      return handleUserResponce(await response.json());
    } else {
      return Promise.reject(await response.json());
    }
  });
};

export const logout = async () => {
  window.localStorage.removeItem(localStorageKey)
}