import React from 'react';
import { Link } from 'react-router-dom';
import './sidebar.css';
import { logoutUser } from '../../store/actions'

const Sidebar = (props) =>{

    const handleClose = (e) =>{
        document.getElementById('sidebar').style.width = '0px';
        document.getElementById('routes').style.marginRight = '0px';
    };

    const handleLogout = () =>{
        return props.dispatch(logoutUser());
    }

    return(
        <div id='sidebar' className='sidebar'>
            <ul>
                <li><Link className='close' onClick={handleClose}>&times;</Link></li>
                <li><Link to='/profile' onClick={handleClose}>Profile</Link></li>
                <li><Link to='/book-category' onClick={handleClose}>Book Category</Link></li>
                <li><Link to='/books' onClick={handleClose}>Your Books</Link></li>
                <li><Link to='/about' onClick={handleClose}>About</Link></li>
                <li><Link onClick={handleLogout} onClick={handleClose}>Logout</Link></li>
            </ul>
        </div>
    );
};

export default Sidebar;