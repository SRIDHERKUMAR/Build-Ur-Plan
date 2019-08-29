

export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';

export function loginSuccess(value) {
    return {
        type: LOGIN_SUCCESS,
        payload: value
    };

}
