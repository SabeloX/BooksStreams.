import React from 'react';
import FavouriteBooks from './FavoriteBooks';
import About from './About';
import './profile.css';

const Profile = () =>{
    return(
        <div className='profile-container'>
            <About/>
            <FavouriteBooks/>
        </div>
    )
}

export default Profile;