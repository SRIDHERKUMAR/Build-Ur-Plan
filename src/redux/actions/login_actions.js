

export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGOUT_SUCCESS = 'LOGOUT_SUCCESS';
export const LOGGED_IN_USER = 'LOGGED_IN_USER';
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
