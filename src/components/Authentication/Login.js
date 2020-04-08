import React, { useState } from 'react';
import { connect } from 'react-redux';
import {loginUser} from '../../redux/actions';
import { Redirect } from 'react-router-dom';
import './auth.css';

const Login = (props) =>{

    const [ username, setUsername ] = useState("");
    const [ password, setPassword ] = useState("");

    const { isAuthenticated } = props;

    const handleSubmit = (e) =>{
        e.preventDefault();
        const { dispatch } = props;
        dispatch(loginUser(username, password));
    };

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
                                <button type="submit">Login</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        );
    }    
}

const mapStateToProps = (state) =>{
    return{
        isAuthenticated: state.auth.isAuthenticated
    }
}

export default connect(mapStateToProps)(Login);