import React from 'react';
import { connect } from 'react-redux';

const Dashboard = ({ user }) =>{

    return(

        <div>
            <h1>BooksStreams</h1>
        </div>
    );
}

const mapStateToProps = (state) =>{
    return{
        user: state.auth.user
    }
}

export default connect(mapStateToProps)(Dashboard);