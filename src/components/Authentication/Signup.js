import React, { useState } from 'react';
import { Redirect } from 'react-router-dom';
import { signupUser, googleLogin, facebookLogin } from '../../store/actions';
import { connect } from 'react-redux';
import './auth.css';
import SignupForm from './SignupForm'

const Signup = (props) =>{

    const [name, setName] = useState("");
    const [surname, setSurname] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [userExists, setUserExists] = useState("");
    const { isAuthenticated } = props;

    const handleSubmit = (e) =>{
        e.preventDefault();
        if(password === confirmPassword){
            props.dispatch(signupUser(email, password))
        }
        else{
            document.getElementById('error').innerHTML = "<small>Passwords do not match</small>"
        }
    };

    const handleGoogleClick = (e) =>{
        props.dispatch(googleLogin());
    };

    const handleFacebookClick = (e) =>{
        props.dispatch(facebookLogin());
    };

    if(isAuthenticated){
        return <Redirect to='/'/>
    }
    else{
        return(
            <div>
                <SignupForm
                    setConfirmPassword={setConfirmPassword}
                    setEmail={setEmail}
                    setName={setName}
                    setPassword={setPassword}
                    setSurname={setSurname}
                    handleGoogleClick={handleGoogleClick}
                    handleSubmit={handleSubmit}
                />
            </div>
        );
    }
}

const mapStateToProps = (state) =>{
    return{
        isAuthenticated: state.auth.isAuthenticated,
        signupError: state.auth.signupError
    }
}

export default connect(mapStateToProps)(Signup);