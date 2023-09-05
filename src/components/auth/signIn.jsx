import { signInWithEmailAndPassword } from 'firebase/auth';
import React, { useState } from 'react'
import { auth } from '../../firebase';

export const SignIn = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const signIn = (e) => {
        e.preventDefault();
        signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            console.log(userCredential)
            setEmail('')
            setPassword('')
        }).catch((error) => {
            console.log(error)
        })
    }
    return (
        <div className='sign-in-container'>
            <form onSubmit={signIn}>
                <h1>
                    Log In
                </h1>
                <input className='email' type="email" placeholder='Enter your email'
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}

                ></input>
                <input className='password' type="password" placeholder='Enter your password'
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                ></input>
                <div> <button type="submit"> Log In </button> </div>
                
            </form>
        </div>
    )
}
