import { getAuth,  signInWithPopup, GoogleAuthProvider,signInWithEmailAndPassword,  createUserWithEmailAndPassword, signOut, onAuthStateChanged, updateProfile} from "firebase/auth";
import { useEffect, useState } from "react";
import inititlizeAuthentication from "../Firebase/firebase.init";

inititlizeAuthentication()

const useFirebase = () => {
    const [user, setUser] = useState({})
    const [error, setError] = useState('')

    const auth = getAuth()

    // Google sign in 
    const signInUsingGoogle = () => {
        const googleProvider = new GoogleAuthProvider()
        signInWithPopup(auth, googleProvider)
        .then(result => setUser(result.user))
        .catch(err => {
            setError(err)
        })
    }

    

    // user registration 
    const register = (name, email, password) => {
        createUserWithEmailAndPassword(auth, email, password)
        .then(result => {
            setUser(result.user)
            updateName(name)
        })
        .catch(err => {
            setError(err)
        })
    }

    // for collect user name 
    const updateName = (name) => {
        updateProfile(auth.currentUser,{
            displayName:name
        })
        .then(() => {
            const newUser = {...user, displayName:name}
            setUser(newUser)
        })
        .catch(err => {
            setError(err)
        })
    }


    // user login 
    const login = (email, password) => {
        signInWithEmailAndPassword(auth, email, password)
        .then(result => setUser(result.user))
        .catch(err => {
            setError(err)
        })
    }

    // user logOut 
    const logOut = () => {
        signOut(auth)
        .then(() => console.log('loged out'))
        .catch(err => err)
    }

    // Auth Change 
    useEffect(() => {
        const unsubscribed = onAuthStateChanged(auth, user => {
            if(user){
                setUser(user)
            }
            else{
                setUser({})
            }
        })
        return () => unsubscribed
    }, [])


    return{
        signInUsingGoogle,
        register,
        login,
        user,
        error,
        logOut
    }
}

export default useFirebase