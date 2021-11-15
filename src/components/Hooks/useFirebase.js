import { getAuth,  signInWithPopup, GoogleAuthProvider,signInWithEmailAndPassword,  createUserWithEmailAndPassword, signOut, onAuthStateChanged, updateProfile} from "firebase/auth";
import { useEffect, useState } from "react";
import inititlizeAuthentication from "../Firebase/firebase.init";


inititlizeAuthentication()

const useFirebase = () => {
    const [user, setUser] = useState({})
    const [error, setError] = useState('')
    const [admin, setAdmin] = useState(false)
    const [isLoding, setIsLoding] = useState(true)


    const auth = getAuth()

    

    // Google sign in 
    const signInUsingGoogle = (history, redirect_uri) => {
        setIsLoding(true)
        const googleProvider = new GoogleAuthProvider()
        return signInWithPopup(auth, googleProvider)
        .then(result => setUser(result.user))
        .then(result => {
            history.push(redirect_uri)
        })
        .catch(err => {
            setError(err)
        }) 
        .finally(() => setIsLoding(false))
    }

    

    // user registration 
    const register = (name, email, password, history, redirect_uri) => {
        setIsLoding(true)
        createUserWithEmailAndPassword(auth, email, password)
        .then(result => {
            setUser(result.user)
            updateName(name)
        })
        .then(result => {
            history.push(redirect_uri)
            window.location.reload()
        })
        .catch(err => {
            setError(err)
        })
        .finally(() => setIsLoding(false))
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

    const login = (email, password, history, redirect_uri) => {
        setIsLoding(true)
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
        setIsLoding(true)
        signOut(auth)
        .then(() => '')
        .catch(err => err)
        .finally(() => setIsLoding(false))
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
            setIsLoding(false)
        })
        return () => unsubscribed
    }, [auth])

    useEffect(() =>{
        fetch(`https://suptohita-toy-shop-server.herokuapp.com/getuser/${user.email}`)
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
        admin,
        isLoding
    }
}

export default useFirebase