import React from 'react';
import { connect } from 'react-redux';

const About = ({user}) =>{
    const styles = {
        width: '300px',
        height: '300px',
        borderRadius: '50%'
    }

    return(
        <div className='about-container'>
            <h2>[{user.displayName}]</h2>
            <div>
                <img style={styles} src={user.photoURL} alt='Profile Picture'/>
            </div>
            <div className='about'>
                <h4>Biography</h4>
                <p>I love reading fictional books</p>
            </div>
        </div>
    )
}

const mapStateToProps = (state) =>{
    return{
        user: state.auth.user
    }
}

export default connect(mapStateToProps)(About);