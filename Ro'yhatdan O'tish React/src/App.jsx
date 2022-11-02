import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Signin from './companent/Signin'
import Signup from './companent/Signup'

import Dashboard from './companent/Dashboard'
import { AuthProvider } from './Auth'
import PrivateRoute from './companent/PrivateRoute'
function App() {

  return (
    <>
      <AuthProvider>
        <Router>

            <PrivateRoute exact path="/" component={Dashboard} />
            <Route  path="/login" component={Signin} />
            <Route  path="/register" component={Signup} />


        </Router>
      </AuthProvider>

    </>
  )
}

export default App
