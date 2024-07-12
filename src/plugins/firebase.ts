import { initializeApp } from "firebase/app"
import { getAnalytics } from "firebase/analytics"
import { App } from "vue"

type FirebaseOptions = {
    analytics?: boolean
}

const firebaseConfig = {
    apiKey: "AIzaSyCErgCelxHp5Fb6f5TWIjklG667KJM33Fw",
    authDomain: "sts-site-79c41.firebaseapp.com",
    projectId: "sts-site-79c41",
    storageBucket: "sts-site-79c41.appspot.com",
    messagingSenderId: "728804189273",
    appId: "1:728804189273:web:e980cf2e1cba31692efd48",
    measurementId: "G-JYVSX4B7TY"
}

const firebase = {
    install: (app: App, options: FirebaseOptions) => {
        const firebaseApp = initializeApp(firebaseConfig)
        if (options.analytics) {
            getAnalytics(firebaseApp)
        }
        app.config.globalProperties.$firebase = firebaseApp
    }
}

export default firebase