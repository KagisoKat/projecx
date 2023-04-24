import { createRouter, createWebHistory } from 'vue-router'
import Home from '../components/Home.vue'
import Movie from '../components/movies/Movie.vue'
import Likes from '../views/Likes.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/movie/:id',
      name: 'movie',
      component: Movie
    },    
    {
      path: '/profile',
      name: 'profile',
      component: Likes
    },
    
  ]
})

export default router
