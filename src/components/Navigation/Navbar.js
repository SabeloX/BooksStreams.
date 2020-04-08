import { Link } from 'react-router-dom';
import React from 'react';
import './navbar.css';
import { connect } from 'react-redux';
import { logoutUser } from '../../redux/actions'


const Navbar = (props) =>{
    const { isAuthenticated } = props;
    const handleLogout = () =>{
        return props.dispatch(logoutUser());
    }
    if(isAuthenticated){
        return(
            <div className='navbar'>
                <ul>
                    <li><Link to='/'>BooksStreams</Link></li>
                    <li><Link onClick={handleLogout}>Logout</Link></li>
                </ul>
            </div>
        );
    }
    else{
        return(
            <div className='navbar'>
                <ul>
                    <li><Link to='/home'>BooksStreams</Link></li>
                    <li><Link to='/login'>Login</Link></li>
                    <li><Link to='/signup'>Signup</Link></li>
                </ul>
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