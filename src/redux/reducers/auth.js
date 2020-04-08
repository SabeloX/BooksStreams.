import {
    LOGIN_REQUEST,
    LOGIN_SUCCESS,
    LOGIN_FAILURE,
    LOGOUT_REQUEST,
    LOGOUT_SUCCESS,
    LOGOUT_FAILURE,
    VERIFY_REQUEST,
    VERIFY_SUCCESS,
    SIGNUP_FAILURE,
    SIGNUP_REQUEST,
    SIGNUP_SUCCESS
} from "../actions";

const initialState = {
    isLoggingIn: false,
    isLoggingOut: false,
    isVerifying: false,
    loginError: false,
    logoutError: false,
    isSigningUp: false,
    signupError: false,
    isAuthenticated: false,
    user: {}
}

export default (state = initialState, action) =>{
    switch(action.type){
        case LOGIN_REQUEST:
            return{
                ...state,
                isLoggingIn: true,
                loginError: false
            }

        case LOGIN_FAILURE:
            return{
                ...state,
                isLoggingIn: false,
                isAuthenticated: false,
                loginError: true
            }

        case LOGIN_SUCCESS:
            return{
                ...state,
                isAuthenticated: true,
                isLoggingIn: false,
                user: action.user
            }

        case LOGOUT_REQUEST:
            return{
                ...state,
                isLoggingOut: true,
                logoutError: false
            }

        case LOGOUT_SUCCESS:
            return{
                ...state,
                isLoggingOut: false,
                isAuthenticated: false,
                user: {}
            }
        
        case LOGOUT_FAILURE:
            return{
                ...state,
                isLoggingOut: false,
                logoutError: true
            }

        case VERIFY_REQUEST:
            return{
                ...state,
                isVerifying: true,
            }

        case VERIFY_SUCCESS:
            return{
                ...state,
                isVerifying: false
            }

        case SIGNUP_REQUEST:
            return{
                ...state,
                isSigningUp: true,
                signupError: false
            }

        case SIGNUP_SUCCESS:
            return{
                ...state,
                signupError: false,
                isSigningUp: false,
                isAuthenticated: true
            }
        
        case SIGNUP_FAILURE:
            return{
                ...state,
                isAuthenticated: false,
                signupError: true
            }

        default:
            return state;
    };
};