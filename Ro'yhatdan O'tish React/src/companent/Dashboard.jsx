import React from 'react';
import config from './firebase/config';
import '../assets/style.css'
// import server from './server/server'
import { BrowserRouter , Router , Route } from 'react-router-dom';
const Dashboard = () => {
    return (
        <div>
         <BrowserRouter>
  <Router>       
<Route path="/" component={} />
<Route path="/all" element={Api_max} />
</Router>


</BrowserRouter>
            <button className='exit btn btn-danger' onClick={() => config.auth().signOut()}>Sign out</button>   
        </div>
    );
};


export default Dashboard;