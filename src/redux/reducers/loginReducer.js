
//Initial State Here
import {LOGIN_SUCCESS} from "../actions/login_actions";

const initialState = {
    login: false,
};



//reducer here
export function loginReducer(state= initialState, action) {
    switch (action.type){

        case LOGIN_SUCCESS:
            return Object.assign({}, state, {login: action.payload});
        default:
            return state;
    }
}
