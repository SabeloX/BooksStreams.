import React from 'react';

const SignupForm = ({
    handleGoogleClick,
    handleSubmit,
    setConfirmPassword,
    setEmail,
    setName,
    setPassword,
    setSurname
}) => (
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
                    <div id='user-exists'></div>
                </form>
            </div>
        </div>
    </div>
);

export default SignupForm;