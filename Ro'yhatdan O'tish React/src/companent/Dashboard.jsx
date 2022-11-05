import React from "react";
import { auth } from "./firebase/config";



const Dashboard  = ({ user }) => {


    return (



        <>
   {/* <div className="accountInfo">
                    <h1>Salom, <span></span>{user.displayName}</h1>
                    <img src={user.photoURL} alt="photo" />
               </div> */}

            <button className='exit btn btn-danger' onClick={() => auth().signOut()}>Sign out</button>
        </>
    )

}






export default Dashboard



