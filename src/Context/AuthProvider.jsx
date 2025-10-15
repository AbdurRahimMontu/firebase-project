import React, { useEffect, useState } from 'react';
import { AuthContext } from './AuthContext';
import { createUserWithEmailAndPassword,GoogleAuthProvider,onAuthStateChanged,signInWithEmailAndPassword, signInWithPopup, signOut } from 'firebase/auth';
import { auth } from '../Firebase/firebase.init';



const googleProvider =new GoogleAuthProvider()

const AuthProvider = ({children}) => {
  
    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true)

  const createUser = (email, password)=>{
    setLoading(true)
    return createUserWithEmailAndPassword(auth, email, password)
  }

  const signInUser = (email, password)=>{
    setLoading(true)
    return signInWithEmailAndPassword(auth, email, password)
  }
  
  const signInWithGoogle = ()=>{
    setLoading(true)
    return signInWithPopup(auth, googleProvider )
  }

  const signOutUser =()=>{
    setLoading(true)
    return signOut(auth)
  }

  useEffect(()=>{
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
       console.log(currentUser);
       setUser(currentUser)
       setLoading(false)
    })
    return () => {
        unsubscribe();
    }
  },[])

    const userInfo = {
       user,
       loading,
        createUser,
       signInUser,
       signInWithGoogle,
       signOutUser,
       
    }
    return (
        <div>
          <AuthContext value={userInfo}>
            {children}
          </AuthContext>
        </div>
    );
};

export default AuthProvider;