import firebaseConfig from './firebase.config'
import {initializeApp} from 'firebase/app';


const inititlizeAuthentication = () => {
    initializeApp(firebaseConfig)    
}

export default inititlizeAuthentication