// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app"
import { getAnalytics } from "firebase/analytics"
// Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCErgCelxHp5Fb6f5TWIjklG667KJM33Fw",
    authDomain: "sts-site-79c41.firebaseapp.com",
    projectId: "sts-site-79c41",
    storageBucket: "sts-site-79c41.appspot.com",
    messagingSenderId: "728804189273",
    appId: "1:728804189273:web:e980cf2e1cba31692efd48",
    measurementId: "G-JYVSX4B7TY"
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)
const analytics = getAnalytics(app)

export function useFirebase() {
    function initializeFirebaseAnalytics() {
        return analytics
    }

    return {
        initializeFirebaseAnalytics
    }
}