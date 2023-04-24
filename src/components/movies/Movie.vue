<template>
  <div class="flex">

    <div class="flex container mx-auto mt-20">
      <img
        :src="posterPath"
        style="height: 350px"
        class="hover:opacity-75"
      />
      <div class="ml-24">
        <h1 class="text-4xl font-bold">{{ this.movie.title }}</h1>
        <span class="text-gray-500">{{ this.movie.vote_average * 10 }}% | {{ this.movie.release_date}} <!--<span :key="index" v-for="(item, index) in movie.genres">{{ item.name }}<span v-if="movie.genres.length - 1 != index">, </span></span>--></span>
        <p class="mt-5">
          {{ this.movie.overview }}
        </p>
        <div class="mt-3">
          <span><h3 class="text-lg font-bold">Featured cast</h3></span>

          <div class="flex">
            <div class="mt-5 flex flex-col mr-5">
              <span>Scot Silver</span>
              <span class="text-gray-500"> writer</span>
            </div>

            <div class="mt-5 flex flex-col">
              <span>Bruce Berman </span>
              <span class="text-gray-500">Executive producer</span>
            </div>
          </div>
        </div>

        <div class="mt-8">
          <a href="#" class="rounded bg-red-700 px-3 py-3 inline-flex">
            <svg
              style="color: white"
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              class="bi bi-play mt-1"
              viewBox="0 0 16 16"
            >
              <path
                d="M10.804 8 5 4.633v6.734L10.804 8zm.792-.696a.802.802 0 0 1 0 1.392l-6.363 3.692C4.713 12.69 4 12.345 4 11.692V4.308c0-.653.713-.998 1.233-.696l6.363 3.692z"
                fill="white"
              ></path>
            </svg>
            Play trailer
          </a>

          <a href="#" class="rounded bg-red-700 px-3 py-3 inline-flex ml-8">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              class="bi bi-heart mt-1 mr-1"
              viewBox="0 0 16 16"
            >
              <path
                d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01L8 2.748zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143c.06.055.119.112.176.171a3.12 3.12 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15z"
              />
            </svg>
            <div  @click="addFavorite(movie)">Favourite</div>
            <!-- <div @click="removeFavorite(movie)">Favourite</div> -->
          </a>
          <a href="#" class="rounded bg-red-700 px-3 py-3 inline-flex ml-8">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              class="bi bi-heart mt-1 mr-1"
              viewBox="0 0 16 16"
            >
              <path
                d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01L8 2.748zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143c.06.055.119.112.176.171a3.12 3.12 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15z"
              />
            </svg>
            <div  @click="removeFavorite(movie)">Unavourite</div>
            <!-- <div @click="removeFavorite(movie)">Favourite</div> -->
          </a>
        </div>
      </div>
    </div>
  </div>


<!--  <Cast />
  <Images /> -->
</template>

<script>
// import { setEnvironmentData } from 'worker_threads';


export default {
    
    data() {
      return {
        movie: [],
      }
    },
    mounted() {
      this.fetchMovie(this.$route.params.id);
    },
    props: {
      //movie: Object,
      add: Boolean,
      setDataFromChild: Function
    },
    methods: {
      async fetchMovie(movieId) {
        const response = await this.axios.get(
          "https://api.themoviedb.org/3/movie/" + movieId + "?api_key=c6dd21371d5119b5f6b49b5b09c58fff&language=en-US"
        );
        console.log(response);
        this.movie = response.data;
      },
      addFavorite(movieId) {
        console.log("OUR_DEBUG: " + movieId)
        let favorites = window.localStorage.movies ? window.localStorage.movies.split(",") : [];
        if (!favorites.includes(movieId.id.toString())) {
          favorites.push(movieId.id)
          window.localStorage.movies = favorites;
        }
        console.log(favorites);
      },
      removeFavorite(movieId) {
        console.log(movieId)
        let favorites = window.localStorage.movies.split(',');
        console.log(favorites)
        
        let indexMovie = favorites.indexOf(movieId.id.toString());
        console.log("I got this far")
        if (indexMovie != -1) {
          //let movieId = this.movie
          favorites.splice(indexMovie,1);
          //this.setDataFromChild(movieId.id);
          window.localStorage.movies = favorites;
        }
        console.log(favorites);
      },
      checkIfFavorite(movieId) {
        let favorites = window.localStorage.movies.split(",");
        console.log(movieId)
        let indexMovie = favorites.indexOf(movieId.id.toString());
        if (indexMovie != -1)
          return true;
        else
          return false;
      }
    },
    
    computed: {
      posterPath() {
        return "https://image.tmdb.org/t/p/w500" + this.movie.poster_path;
      }
    }
};
</script>