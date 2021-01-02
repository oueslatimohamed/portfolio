import React from 'react';
import './signin.css';
import user from './user.png';

const SignInAdmin = (props) => {
    return(
        <div className="container-signin">
            <img src={user} alt="user"/>
            <h1>Sign in <strong>ADMIN</strong></h1>
            <form method="POST">
                <div className="input-username">
                <input type="text" name="username" placeholder="USERNAME"/>
                </div>
                <div className="input-password">
                <input type="password" name="password" placeholder="PASSWORD"/>
                </div>
                <button>LOGIN</button>
            </form>
        </div>
    );
}

export default SignInAdmin;