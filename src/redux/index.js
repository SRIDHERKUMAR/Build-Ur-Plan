import { combineReducers } from 'redux';
import { loginReducer }  from './reducers/loginReducer';


export const RESET_STATE = 'RESET_STATE';

export function resetReduxState() {
    return {
        type: RESET_STATE
    }
}

const appReducer = combineReducers({
    loginReducer
});


const rootReducer = (state, action) => {
    if (action.type === 'RESET_STATE') {
        state = undefined
    }

    return appReducer(state, action)
};

export default rootReducer;