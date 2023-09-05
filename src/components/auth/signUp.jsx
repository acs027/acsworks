import { createUserWithEmailAndPassword } from 'firebase/auth';
import React, { useState } from 'react'
import { auth } from '../../firebase';

export const SignUp = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const signUp = (e) => {
        e.preventDefault();
        createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            console.log(userCredential)
            setEmail('')
            setPassword('')
        }).catch((error) => {
            console.log(error)
        })
    }
    return (
        <div className='sign-up-container'>
            <form onSubmit={signUp}>
                <h1>
                    Create an Account
                </h1>
                <input className="email" type="email" placeholder='Enter your email'
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}

                ></input>
                <input className='password' type="password" placeholder='Enter your password'
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                ></input>
                <div>
                <button type="submit"> Sign Up </button>
                </div>
            </form>
        </div>
    )
}
