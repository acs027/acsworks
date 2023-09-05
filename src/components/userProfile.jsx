import React from 'react'
import { getAuth } from 'firebase/auth'

export const UserProfile = () => {
    const auth = getAuth()
    const user = auth.currentUser
    return (
        <div >
        { user && (
        <div className="userPP" >
        <img src={user.photoURL} />
        </div>
        
        )}
        { user && (
        <div>
        {user.displayName}
        </div>
        
        )}
        </div>
  )
}
