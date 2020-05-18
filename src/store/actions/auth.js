import {myFirebase} from '../firebase/firebase';
import firebase from 'firebase/app';

// Logging In
export const LOGIN_SUCCESS = "LOGIN_SUCCESS";
export const LOGIN_FAILURE = "LOGIN_FAILURE";

// Logging Out
export const LOGOUT_SUCCESS = "LOGOUT_SUCCESS";
export const LOGOUT_FAILURE = "LOGOUT_FAILURE";

// Verify
export const VERIFY_FAILURE = "VERIFY_FAILURE";
export const VERIFY_SUCCESS = "VERIFY_SUCCESS";

//Signning Up
export const SIGNUP_SUCCESS = "SIGNUP_SUCCESS";
export const SIGNUP_FAILURE = "SIGNUP_FAILURE";

//LOGIN

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

//SIGNIN

//Successful signup
const signupReceived = (user) =>{
    return{
        type: SIGNUP_SUCCESS,
        user
    };
};

//Unsuccessful signup
const signupFailure = () =>{
    return{
        type: SIGNUP_FAILURE
    };
};

//verify success
const verifySuccess = () =>{
    return{
        type: VERIFY_SUCCESS
    }
}

//verify failure
const verifyFailure = () =>{
    return{
        type: VERIFY_FAILURE
    }
}

// Bound Action Creators

// LOGIN WITH EMAIL
export const loginUser = (email, password) => dispatch =>{
    myFirebase
    .auth()  // firebase auth instance
    .signInWithEmailAndPassword(email, password)
    .then(user =>{  // if the user's email and password are found, call the action type: LOGIN_SUCCESS
        dispatch(receiveLogin(user))
    })
    .catch(error =>{
        dispatch(loginError())
        if(error.code === 'auth/user-not-found'){
            document.getElementById('user-not-found').innerHTML = '<small>Please Try Signing Up First.</small>'
        }
    })
}

//LOGOUT
export const logoutUser = () => dispatch =>{
    myFirebase
    .auth()
    .signOut()  // signout from the app
    .then(() =>{
        dispatch(receiveLogout());
    })
    .catch(error =>{
        dispatch(errorLogout());
    });
};

//VERIFY
export const verifyAuth = () => dispatch =>{
    myFirebase
    .auth()
    .onAuthStateChanged(user =>{
        if(user !== null){
            dispatch(verifySuccess());
        }
        else{
            dispatch(verifyFailure());
        }
    })
};

//SIGNUP WITH EMAIL
export const signupUser = (email, password) => dispatch =>{
    myFirebase
    .auth()
    .createUserWithEmailAndPassword(email, password)
    .then(user =>{
        dispatch(signupReceived(user));
    })
    .catch(error =>{
        if(error.code === 'auth/email-already-in-use'){
            dispatch(signupFailure());
            document.getElementById('user-exists').innerHTML = '<small>User Exists. Try Logging In</small>'
        }
        else{
            console.log('An Error has occured.')
        }
    });
};

//LOGIN WITH GOOGLE
export const googleLogin = () => dispatch =>{
    const provider = new firebase.auth.GoogleAuthProvider();
    myFirebase
    .auth()
    .signInWithPopup(provider)
    .then(result =>{
        const token = result.credential.accessToken;   //google access token
        const user = result.user;
        dispatch(receiveLogin(user));
    })
    .catch(error =>{
        dispatch(loginError());
    });
};

//SIGNUP WITH FACEBOOK
export const facebookLogin = () => dispatch =>{
    dispatch(receiveLogin());
    const provider = new firebase.auth.FacebookAuthProvider();
    myFirebase
    .auth()
    .signInWithPopup(provider)
    .then(result =>{
        dispatch(receiveLogin(result.user))
    })
    .catch( error =>{
        console.log(error.email)
    })
}