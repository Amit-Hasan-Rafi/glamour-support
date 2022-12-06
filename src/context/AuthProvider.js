import React, { createContext, useEffect, useState } from 'react'
import app from '../firebaseSDK/firebaseSDK'
import { createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth"

export const AuthContext = createContext()
function AuthProvider({ children }) {

    const auth = getAuth(app)
    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true)

    const CreatUser = (email, passsword) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, passsword)
    }
    const LogInWithEmailAndPassword = (email, passsword) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, passsword)
    }

    const logOut = () => {
        signOut(auth)
    }
    const UpdateUserProfile = profile => {
        return updateProfile(auth.currentUser, profile)
    }
    const loginWithGoogle = () =>{
        setLoading(true)
        const Provider = new GoogleAuthProvider()
        return signInWithPopup(auth , Provider)

    }

    useEffect(() => {
        const unsubcribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser)
            setLoading(false)
        });
        return () => unsubcribe();
    }, [])


    const authInfo = {
        CreatUser,
        logOut,
        LogInWithEmailAndPassword,
        user,
        loading,
        UpdateUserProfile,
        loginWithGoogle
    }
    return (
        <AuthContext.Provider value={authInfo} >
            {children}
        </AuthContext.Provider>
    )
}

export default AuthProvider