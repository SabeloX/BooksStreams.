import {myFirebase} from '../firebase/firebase';

// Logging In
export const LOGIN_REQUEST = "LOGIN_REQUEST";
export const LOGIN_SUCCESS = "LOGIN_SUCCESS";
export const LOGIN_FAILURE = "LOGIN_FAILURE";

// Logging Out
export const LOGOUT_REQUEST = "LOGOUT_REQUEST";
export const LOGOUT_SUCCESS = "LOGOUT_SUCCESS";
export const LOGOUT_FAILURE = "LOGOUT_FAILURE";

// Verify
export const VERIFY_REQUEST = "VERIFY_REQUEST";
export const VERIFY_SUCCESS = "VERIFY_SUCCESS";

//Signning Up
export const SIGNUP_REQUEST = "SIGNUP_REQUEST";
export const SIGNUP_SUCCESS = "SIGNUP_SUCCESS";
export const SIGNUP_FAILURE = "SIGNUP_FAILURE";

//LOGIN
// For a user requesting to login
const requestLogin = () => {
    return{
        type: LOGIN_REQUEST
    }
}

// successful login... takes in the user(payload) object
const receiveLogin = user => {
    return{
        type: LOGIN_SUCCESS,
        user
    }
}

// unsuccessful login
const loginError = () =>{
    return{
        type: LOGIN_FAILURE
    }
}

//LOGOUT
// For a user requesting to logout
const requestLogout = () => {
    return{
        type: LOGOUT_REQUEST
    }
}

// successful logout
const receiveLogout = () =>{
    return{
        type: LOGOUT_SUCCESS
    }
}

// unsuccessful logout
const errorLogout = () =>{
    return{
        type: LOGOUT_FAILURE
    }
}

//VERIFY
const verifyRequest = () =>{
    return{
        type: VERIFY_REQUEST
    }
}

const verifySuccess = () =>{
    return{
        type: VERIFY_SUCCESS
    }
}

//SIGNIN
//Signning up request
const signupRequest = () =>{
    return{
        type: SIGNUP_REQUEST
    };
};

//Successful signup
const signupReceived = () =>{
    return{
        type: SIGNUP_SUCCESS
    };
};

//Unsuccessful signup
const signupFailure = () =>{
    return{
        type: SIGNUP_FAILURE
    };
};

// Bound Action Creators

// LOGIN
export const loginUser = (email, password) => dispatch =>{
    dispatch(requestLogin());
    myFirebase
    .auth()  // firebase auth instance
    .signInWithEmailAndPassword(email, password)
    .then(user =>{  // if the user's email and password are found, call the action type: LOGIN_SUCCESS
        dispatch(receiveLogin(user))
    })
    .catch(() =>{
        dispatch(loginError())
    })
}

//LOGOUT
export const logoutUser = () => dispatch =>{
    dispatch(requestLogout);
    myFirebase
    .auth()
    .signOut()  // signout from the app
    .then(() =>{
        dispatch(receiveLogout());
    })
    .catch(error =>{
        dispatch(errorLogout());
    });
}

//VERIFY
export const verifyAuth = () => dispatch =>{
    dispatch(verifyRequest());
    myFirebase
    .auth()
    .onAuthStateChange(user =>{
        (user !== null) ? (
            dispatch(receiveLogin())
        ) : (
            dispatch(verifySuccess())
        )
    })
}

//SIGNUP
export const signupUser = (email, password) => dispatch =>{
    dispatch(signupRequest());
    myFirebase
    .auth()
    .createUserWithEmailAndPassword(email, password)
    .then(user =>{
        dispatch(signupReceived());
    })
    .catch(() =>{
        dispatch(signupFailure());
    });
};