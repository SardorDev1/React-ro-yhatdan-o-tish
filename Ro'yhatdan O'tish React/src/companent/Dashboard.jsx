import React from 'react';
import config from './firebase/config';
import '../assets/style.css'
const Dashboard = () => {
    return (
        <div>
         
            <button className='exit btn btn-danger' onClick={() => config.auth().signOut()}>Sign out</button>   
        </div>
    );
};


export default Dashboard;