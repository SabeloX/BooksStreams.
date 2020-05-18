import {
    LOGIN_SUCCESS,
    LOGIN_FAILURE,
    LOGOUT_SUCCESS,
    LOGOUT_FAILURE,
    SIGNUP_FAILURE,
    SIGNUP_SUCCESS,
    VERIFY_SUCCESS,
    VERIFY_FAILURE
} from "../actions";

const initialState = {
    loginError: false,
    logoutError: false,
    signupError: false,
    isAuthenticated: false,
    user: null
}

export default (state = initialState, action) =>{
    switch(action.type){

        case LOGIN_FAILURE:
            return{
                ...state,
                isAuthenticated: false,
                loginError: true
            }

        case LOGIN_SUCCESS:
            return{
                ...state,
                isAuthenticated: true,
                user: action.user
            }

        case LOGOUT_SUCCESS:
            return{
                ...state,
                isAuthenticated: false,
                user: null
            }
        
        case LOGOUT_FAILURE:
            return{
                ...state,
                logoutError: true
            }

        case SIGNUP_SUCCESS:
            return{
                ...state,
                signupError: false,
                isAuthenticated: true,
                user: action.user
            }
        
        case SIGNUP_FAILURE:
            return{
                ...state,
                isAuthenticated: false,
                signupError: true
            }
        
        case VERIFY_SUCCESS:
            return{
                ...state,
                isAuthenticated: true
            }

        case VERIFY_FAILURE:
            return{
                ...state,
                isAuthenticated: false
            }
        default:
            return state;
    };
};