import React, { useState } from 'react';
import { Redirect } from 'react-router-dom';
import { signupUser } from '../../redux/actions';
import { connect } from 'react-redux';
import './auth.css';

const Signup = (props) =>{

    const [name, setName] = useState("");
    const [surname, setSurname] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");

    const { isAuthenticated } = props;

    const handleSubmit = (e) =>{
        e.preventDefault();
        password === confirmPassword ? (
            props.dispatch(signupUser(email, password))
        ) : (
            document.getElementById('error').innerHTML = "<small>Passwords do not match</small>"
        )
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
                            <h2>Signup</h2>
                        </div>
                        <div>
                            <form onSubmit={handleSubmit}>
                                <input type='text' placeholder='Name' id='name' onChange={(e) =>setName(e.target.value)} /><br/>
                                <input type='text' placeholder="Surname" id='surname' onChange={(e) =>setSurname(e.target.value)} /><br/>
                                <input type='email' placeholder='Email' id='email' onChange={(e) =>setEmail(e.target.value)} /><br/>
                                <input type='password' placeholder='Password' id='password' onChange={(e) =>setPassword(e.target.value)} /><br/>
                                <input type='password' placeholder='Confirm Password' id='confirm-password' onChange={(e) =>setConfirmPassword(e.target.value)} /><br/>
                                <div style={{color: 'rgb(120,0,0)'}} id='error'></div>
                                <button type="submit">Signup</button>
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

export default connect(mapStateToProps)(Signup);