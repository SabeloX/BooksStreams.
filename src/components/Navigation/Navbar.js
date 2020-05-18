import { Link } from 'react-router-dom';
import React from 'react';
import './navbar.css';
import { connect } from 'react-redux';

const Navbar = (props) =>{

    const { isAuthenticated } = props;

    const handleOpen = (e) =>{
        document.getElementById('sidebar').style.width = '250px';
        document.getElementById('routes').style.marginRight = '250px';
    }

    
    if(isAuthenticated){
        return(
            <div>
                <div className='navbar'>
                    <Link id='logo' to='/'>BooksStreams</Link>
                    <Link onClick={handleOpen}>Menu</Link>
                </div>
            </div>
        );
    }
    else{
        return(
            <div className='navbar'>
                <Link id='logo' to='/home'>BooksStreams</Link>
                <Link to='/login'>Login</Link>
                <Link to='/signup'>Signup</Link>
            </div>
        );
    }
}

const mapStateToProps = (state) =>{
    return{
        isAuthenticated: state.auth.isAuthenticated
    }
}

export default connect(mapStateToProps)(Navbar);