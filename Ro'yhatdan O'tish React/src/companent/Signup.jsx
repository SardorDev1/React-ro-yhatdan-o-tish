
import React, { useCallback } from 'react';
import { withRouter, Link } from "react-router-dom"
import config from './firebase/config';
import '../assets/style.css'
const Signup = ({ history }) => {




    const handleSignUp = useCallback(async event => {
        event.preventDefault()
        const { email, password , number } = event.target.elements;

   if(number.value === "" ){
    confirm("Iltomos Telefon Raqamingizni Kiriting ")
    window.location.reload()
   }


        try {
            await config
                .auth()

                .createUserWithEmailAndPassword(email.value, password.value)

            history.push("/");
        } catch (error) {
          const err = error.message;
    alert(err)
        }
    }, [history])
    return (
        <>
         <div className="body">
         <div className='register card w-50 mx-auto p-3'>
                <h1 className='text-center mt-4 mb-5' >Royhatdan O'tish</h1>
                <form onSubmit={handleSignUp}>
                    <input className='form-control  mx-auto ' type="email" name='email' placeholder='Emailingizni kiriting' />
                    <input className='form-control mt-3   ' type="password" name='password' placeholder='Maxfiy parolingizni kiriting' />
                    <input className='form-control mt-3 mb-3 ' type="number" name='number' placeholder='Telefon raqamingizni kiriting' />
                    <button className='btn btn-outline-success w-100' type="submit" >Yuborish</button>

                    <p className='pagein text-center mt-5' ><Link className="linkPage" to="/login" >Ro'yatdan O'tganman !!!</Link></p>
                </form>
            </div>

         </div>

        </>
    );
};


export default Signup;