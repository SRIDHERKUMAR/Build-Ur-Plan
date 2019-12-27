

export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGOUT_SUCCESS = 'LOGOUT_SUCCESS';
export const LOGGED_IN_USER = 'LOGGED_IN_USER';
export const ADD_NEW_USER = 'ADD_NEW_USER';
export const RESET_PASSWORD = 'RESET_PASSWORD';
export const GET_USERS = 'GET_USERS';

export function loginSuccess(value) {
    return {
        type: LOGIN_SUCCESS,
        payload: value
    };

}
export function logout(value) {
    return {
        type: LOGOUT_SUCCESS,
        payload: value
    };

}
export function getUsers(users) {
    return {
        type: GET_USERS,
        users,
    };
}
export function loggedInUser(user) {
    return {
        type: LOGGED_IN_USER,
        user,
    };
}
export function addNewUser(value) {
    return {
        type: ADD_NEW_USER,
        value,
    };
}
export function resetPassword(value) {
    return {
        type: RESET_PASSWORD,
        value,
    };
}
