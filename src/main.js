import { createApp } from 'vue'
import App from './App.vue'
import 'flowbite';
import './style.css'
import router from './router'
import axios from 'axios'
import { createStore } from 'vuex'

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBdjp5DOL5by8gs39GMAPccAN6JaqWAodE",
  authDomain: "projecx-ad45c.firebaseapp.com",
  projectId: "projecx-ad45c",
  storageBucket: "projecx-ad45c.appspot.com",
  messagingSenderId: "4101535786",
  appId: "1:4101535786:web:aafa74d8cfb251add36b53"
};

// Initialize Firebase
 initializeApp(firebaseConfig);

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

