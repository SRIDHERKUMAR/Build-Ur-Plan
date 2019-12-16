
//Initial State Here
import * as actions from "../actions/login_actions";

const initialState = {
    login: false,
    users: [],
    user: {}
};



//reducer here
export function loginReducer(state= initialState, action) {
    switch (action.type){

        case actions.LOGIN_SUCCESS:
            return Object.assign({}, state, {login: action.payload});
        case actions.LOGOUT_SUCCESS:
            return Object.assign({}, state, {
                login: !action.payload,
                user: {}
            });
        case actions.LOGGED_IN_USER:
            return Object.assign({}, state, {user: action.user});
        case actions.GET_USERS:
            return Object.assign({}, state, {users: action.users});
        default:
            return state;
    }
}
