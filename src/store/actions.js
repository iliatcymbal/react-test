export const LOGIN_USER = 'Login user';
export const SET_USER = 'Set new user';
export const REMOVE_USER = 'Remove user';
export const setUser = data => ({ type: SET_USER, data });
export const removeUser = () => ({ type: REMOVE_USER });

export const GET_USERS_ASYNC = 'Get users';
export const SET_USERS = 'Set users';
export const getUsers = () => ({ type: GET_USERS_ASYNC });
export const setUsers = data => ({ type: SET_USERS, data });
