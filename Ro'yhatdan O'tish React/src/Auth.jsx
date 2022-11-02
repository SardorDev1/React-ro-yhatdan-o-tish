import React, { useState, useEffect, } from 'react';
import config from './companent/firebase/config';
import { AuthContext } from './companent/context/Context'




export const AuthProvider = ({ children }) => {
   const [currentUser, setCurrentUser] = useState(null)
   const [loading, setLoading] = useState(true)

   useEffect(() => {
      config.auth().onAuthStateChanged((user) => {
         setCurrentUser(user)
         setTimeout(() => {
            setLoading(false)
         } , 2000)
      })
   })
   if (loading) {
      return <>
      <div className="load">
         <img src="https://media0.giphy.com/media/jAYUbVXgESSti/giphy.gif?cid=ecf05e4780lwq6dy2p7a35q7h2xaon773dn7u7les81q8436&rid=giphy.gif&ct=g" alt="" />
      </div>
      </>
   }

   return (

      <>
         <AuthContext.Provider value={{ currentUser }}>
            {children}

         </AuthContext.Provider>
      </>
   )
}




