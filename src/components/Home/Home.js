import React from 'react';
import './dashboard.css';
import logo from './booksstreams-logo.png';

const Home = () =>{
    return(
        <div>
            <div className='container'>
                <div className='dash'>
                    <h1>Welcome to</h1>
                </div>
                <div>
                    <img src={logo} alt='logo' style={{width: '200px'}}/>
                </div>
            </div>
        </div>
    );
}

export default Home;