import { getAuth,  signInWithPopup, GoogleAuthProvider,signInWithEmailAndPassword,  createUserWithEmailAndPassword, signOut, onAuthStateChanged, updateProfile} from "firebase/auth";
import { useEffect, useState } from "react";
import inititlizeAuthentication from "../Firebase/firebase.init";


inititlizeAuthentication()

const useFirebase = () => {
    const [user, setUser] = useState({})
    const [error, setError] = useState('')
    const [admin, setAdmin] = useState(false)


    const auth = getAuth()

    

    // Google sign in 
    const signInUsingGoogle = (history, redirect_uri) => {
        const googleProvider = new GoogleAuthProvider()
        return signInWithPopup(auth, googleProvider)
        .then(result => setUser(result.user))
        .then(result => {
            history.push(redirect_uri)
        })
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
    const login = (email, password, history, redirect_uri) => {
        signInWithEmailAndPassword(auth, email, password)
        .then(result => setUser(result.user))
        .then(result => {
            history.push(redirect_uri)
        })
        .catch(err => {
            setError(err)
        })
    }

    // user logOut 
    const logOut = () => {
        signOut(auth)
        .then(() => '')
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
    }, [auth])

    useEffect(() =>{
        fetch(`http://localhost:8000/getuser/${user.email}`)
        .then(res => res.json())
        .then(data => setAdmin(data.admin))
    }, [user.email])

    return{
        signInUsingGoogle,
        register,
        login,
        user,
        setError,
        setUser,
        error,
        logOut,
        admin
    }
}

export default useFirebase