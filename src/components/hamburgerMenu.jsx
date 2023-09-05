import React, { useEffect, useState } from 'react'
import "./hamburgerMenu.css"
import { SignIn } from './auth/signIn'
import { SignUp } from './auth/signUp'
import { ArrowFatLeft, UserCircle, SignOut, GoogleLogo } from "phosphor-react";
import { auth } from '../firebase';
import { onAuthStateChanged, signOut } from 'firebase/auth'
import { UserProfile } from './userProfile';
import { signInWithGoogle } from '../firebase';
import { UploadProduct } from './uploadProduct';

export const HamburgerMenu = ({ isOpen, toggleMenu }) => {
  // const [isOpen, setIsOpen] = useState(true)

  // const toggleMenu = () => {
  //   setIsOpen(!isOpen)
  // }

  // const [isSignUp, setSignUp] = useState(false)

  // const toggleSignUp = () => {
  //   setSignUp(!isSignUp)
  // }

  const [isSignIn, setSignIn] = useState(false)

  const toggleSignIn = () => {
    setSignIn(!isSignIn)
  }

  const [authUser, setAuthUser] = useState('')

  useEffect(() => {
    const listen = onAuthStateChanged(auth, (user) => {
      if (user) {
        setAuthUser(user)
      } else {
        setAuthUser(null)
      }
    })

    return () => {
      listen()
    }
  }, [])

  const userSignOut = () => {
    signOut(auth).then(() => {
      console.log('sign out successful')
    }).catch(error => console.log(error))
  }


  return (
    <div className={`hamburger-menu ${isOpen ? 'open' : ''}`}>
      <div className='back-icon' onClick={toggleMenu}>
        <ArrowFatLeft size={32} />
      </div>
      <div className='menu-items'> {authUser ?
        <>
          <UserProfile />
          {authUser.displayName == null && (
            <UserCircle size={32} />
          )}

          <p>{`Signed In as ${authUser.email}`}</p> 
        </>
        :
        <>
        <div className='signInUp'> 
          {isSignIn ? < SignUp /> : < SignIn />}
          </div>

          <div className='toggleSign'>
            {!isSignIn ? <button onClick={toggleSignIn} > Create an account </button> : <button onClick={toggleSignIn} > I already have an account </button>}
          </div>

          <div className='signwithgoogle'>
            <button onClick={signInWithGoogle}>
              <GoogleLogo size={32} />
            </button>
          </div>
        </>}
        
        <div className='uploadProduct'> 

        { authUser !== null && (
            authUser.email === "alicihansarac@gmail.com" && (
              <UploadProduct />
            )
          )
            
          }
          </div>
          {
            authUser && (
              <button className='signOutBttn' onClick={userSignOut}> <SignOut size={32} /> </button>
            )
          }
          
      </div>
     
    </div>
  )
}
