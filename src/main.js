import { createApp } from 'vue'
import App from './App.vue'
import 'flowbite';
import './style.css'
import router from './router'
import axios from 'axios'
import { createStore } from 'vuex'

// configure the store
const store = createStore({
  state() {
    return {

    }
  }
})

const app = createApp(App).use(router).use(store)
app.config.globalProperties.$store=store;
app.config.globalProperties.axios=axios

app.mount('#app')

