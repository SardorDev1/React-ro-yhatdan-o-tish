import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Signin from './companent/Signin'
import Signup from './companent/Signup'

import Dashboard from './companent/Dashboard'
import { AuthProvider } from './Auth'
import PrivateRoute from './companent/PrivateRoute'
import firebase from './companent/firebase/config'
import { useState } from 'react'
import { useEffect } from 'react'
function App() {
const  [user , setUser] = useState(null)

useEffect(() => {
firebase.auth().onAuthStateChanged(user => {
  setUser(user)
})
}, [])


  return (
    <>
      
      <AuthProvider>
        <Router>
        {user ? <Dashboard user={user}/> : <Signin/>}
            <PrivateRoute exact path="/" component={Dashboard} />
            <Route  path="/login" component={Signin} />
            <Route  path="/register" component={Signup} />
        

        </Router>
      </AuthProvider>

    </>
  )
}

export default App
