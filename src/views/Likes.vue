<template lang="">
    <div class="user-list-page">
      <h2>Favorites</h2>
      <div className="result">
        <!--<div v-if="movies.length > 0" class="card" v-for="movie in movies" :key="movie.id"> -->
         <!--<Movie :movie="movie" :add="false" :setDataFromChild="setDataFromChild"/>-->
         <MovieItem :key="movie.id" v-for="movie in movies" :movie="movie" :setDataFromChild="setDataFromChild" />
        <!--</div> -->
      </div>
    </div>
  </template>
  
  <script>
  import Navbar from "../components/header/Navbar.vue";
  import Movie from "../components/movies/Movie.vue";
  import MovieItem from "../components/items/MovieItem.vue";
  import axios from 'axios';
  export default {
    components:{
        Navbar,
        Movie,
        MovieItem
    },
    data() {
      return {
        movies: []
      }
    },
    methods: {
      setDataFromChild (movieId) {
        //update tableau movies, pour rendu dynamique
        // passer en props à Card dans la fonction removeStorage()
        // ne pas mettre danss Card (cf -> this.movies de getMovies())
        this.movies = this.movies.filter(
          element => element.id !== movieId
        )
      },
      getMovies(){
        let moviesId = window.localStorage.movies ? window.localStorage.movies.split(",") : []
        console.log(moviesId);
        for (let i = 0; i <= moviesId.length; i++) {
          axios.get(
            `https://api.themoviedb.org/3/movie/${moviesId[i]}?api_key=c6dd21371d5119b5f6b49b5b09c58fff&language=en-US`
          )
          .then((result) => this.movies.push(result.data))
        }
      }
    },
    beforeMount() {
      this.getMovies()
    },
  }
  </script>