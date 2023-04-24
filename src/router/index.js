import { createRouter, createWebHistory } from 'vue-router'
import Home from '../components/Home.vue'
import Movie from '../components/movies/Movie.vue'
import Likes from '../views/Likes.vue'
import SearchBar from '../components/header/SearchBar.vue'
import { getAuth, onAuthStateChanged } from "firebase/auth"

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
      meta: {
        requiresAuth: true
      }
    },
    {
      path: '/movie/:id',
      name: 'movie',
      component: Movie,
      meta: {
        requiresAuth: true
      }
    },    
    {
      path: '/profile',
      name: 'profile',
      component: Likes,
      meta: {
        requiresAuth: true
      }
    },
    {
      path: '/searchbar',
      name: 'searchbar',
      component: SearchBar,
      meta: {
        requiresAuth: true
      }
    },
    {
      path: "/register", component: () => import("../views/Register.vue")
    },
    {
      path: "/sign-in", component: () => import("../views/SignIn.vue")
    }
  ]
});

const getCurrentUser = () => {
  return new Promise ((resolve, reject) => {
    const removeListener = onAuthStateChanged(
      getAuth(),
       (user) => {
        removeListener();
        resolve(user);
       },
      reject
    )
  })
}

router.beforeEach(async(to, from, next) => {
  if(to.matched.some((record) => record.meta.requiresAuth)) {
  if (await getCurrentUser()) {
    next();
  } else {
    alert ("Please log in or register!")
    next("/sign-in")
  }
} else {
  next();
}

});
export default router
