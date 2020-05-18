import React, { useState } from 'react';
import { connect } from 'react-redux';
import {loginUser, googleLogin} from '../../store/actions';
import { Redirect } from 'react-router-dom';
import './auth.css';

const Login = (props) =>{

    const [ username, setUsername ] = useState("");
    const [ password, setPassword ] = useState("");

    const { isAuthenticated, loginError } = props;

    const handleSubmit = (e) =>{
        e.preventDefault();
        const { dispatch } = props;
        dispatch(loginUser(username, password));
        const container = document.querySelector('.container');
        const load = document.querySelector('.load');
        load.style.width = '500px';
        load.style.height = '500px';
        container.style.opacity = '0.7';

        if(loginError){
            container.style.opacity = '1';
            load.style.width = 0;
            load.style.height = 0
        }
    };

    const handleGoogleLogin = () =>{
        props.dispatch(googleLogin());
    }

    if(isAuthenticated){
        return <Redirect to='/'/>
    }
    else{
        return(
            <div>
                <div className='container'>
                    <div className='card'>
                        <div id='heading'>
                            <h2>Login</h2>
                        </div>
                        <div>
                            <form onSubmit={handleSubmit}>
                                <input type='text' placeholder='Username' id='username' onChange={e => setUsername(e.target.value)} /><br/>
                                <input type='password' placeholder='Password' id='password' onChange={e => setPassword(e.target.value)} /><br/>
                                <button className='button' type="submit">Login</button>
                            </form>
                        </div>
                        <div className='button'>
                            <button onClick={handleGoogleLogin}>Login with Google</button>
                        </div>
                        <div id='user-not-found'></div>
                        <div className='load'></div>
                    </div>
                </div>
            </div>
        );
    }    
}

const mapStateToProps = (state) =>{
    return{
        isAuthenticated: state.auth.isAuthenticated,
        user: state.auth.user,
        loginError: state.auth.loginError
    }
}

export default connect(mapStateToProps)(Login);