import { createApp } from "vue"
import App from "./App.vue"
import router from "./router"
import { useFirebase } from "./composables/firebase"

const { initializeFirebaseAnalytics } = useFirebase()
initializeFirebaseAnalytics()
createApp(App).use(router).mount("#app")
