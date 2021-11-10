import { getAuth,  signInWithPopup, GoogleAuthProvider,signInWithEmailAndPassword,  createUserWithEmailAndPassword, signOut, onAuthStateChanged} from "firebase/auth";
import inititlizeAuthentication from "../Firebase/firebase.init";

inititlizeAuthentication()

const useFirebase = () => {

    const auth = getAuth()

    const signInUsingGoogle = () => {
        const googleProvider = new GoogleAuthProvider()
        signInWithPopup(auth, googleProvider)
    }

    const register = (name, email, password) => {
        createUserWithEmailAndPassword(auth, email, password)
        .then(result => console.log(result))
    }

    const login = (email, password) => {
        signInWithEmailAndPassword(auth, email, password)
        .then(result => console.log(result))
    }

    return{
        signInUsingGoogle,
        register,
        login
    }
}

export default useFirebase