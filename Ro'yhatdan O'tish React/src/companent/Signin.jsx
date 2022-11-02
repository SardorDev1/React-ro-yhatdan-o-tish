import React, { useCallback, useContext } from 'react';
import { withRouter, Redirect, Link } from 'react-router-dom';
import config from './firebase/config';
import { AuthContext } from './context/Context'
import '../assets/style.css'
const Login = ({ history }) => {

  const handleSignIn = useCallback(
    async event => {
      event.preventDefault();
      const { email, password } = event.target.elements;
      try {
        await config
          .auth()
          .signInWithEmailAndPassword(email.value, password.value);
          
        history.push("/");
      } catch(error){
        const err = error.message;
confirm(err)
      }
    },
    [history]
  );

  const { currentUser } = useContext(AuthContext);

  if (currentUser) {
    return <Redirect to="/" />
  }

  return (
    <>
<div className="bodyin">
  
<div className="login card w-50 mx-auto p-3 mt-5">
        <h1 className='text-center mt-4 mb-5' >Kirish</h1>
        <form onSubmit={handleSignIn}>
          <input  className='form-control  mx-auto '   type="email" name="email" placeholder="Emailingizni kiriting" />
          <input    className='form-control mt-3 mb-3 ' type="password" name="password" placeholder="Maxfiy parolingizni kiriting" />
          <button  className='btn btn-outline-success w-100' type="submit">Kirish</button>
       <p ></p>
        </form>
        <p className='pageup text-center mt-5' >      <Link className="linkPage" to="/register">Ro'yhatdan O'tmaganman !!!</Link>
      </p>
      </div>
</div>

  
     
    </>
  );
};

export default Login;