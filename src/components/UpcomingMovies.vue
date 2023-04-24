<template>
  <div class="mt-10 text-xl font-bold ">
    UPCOMING MOVIES
    <Carousel class="bg-dark text-white" v-bind="settings" :breakpoints="breakpoints">
      <Slide  :index="i" :key="i" v-for="(movie, i) in this.upcomingMovies">
        <img :src="'https://image.tmdb.org/t/p/w500/' + movie.poster_path" />
        <div class="carousel__item">{{  movie.title  }}</div>
      </Slide>

      <template #addons>
        <Navigation />
      </template>
    </Carousel>
  </div>
</template>

<script>

import { defineComponent } from "vue";
import { Carousel, Navigation, Slide } from "vue3-carousel";

import "vue3-carousel/dist/carousel.css";

export default defineComponent({
  name: "Breakpoints",
  components: {
    Carousel,
    Slide,
    Navigation,
  },
 
  data() {
    return {
      upcomingMovies: [],
    };
  },
 
  mounted() {
    this.fetchUpcomingMovies();
  },
  methods: {
    async fetchUpcomingMovies() {
      const response = await this.axios.get(
        "https://api.themoviedb.org/3/movie/top_rated?api_key=c6dd21371d5119b5f6b49b5b09c58fff&language=en-US&page=1"
      );
      this.upcomingMovies = response.data.results.slice(1, 21);
      console.log(this.upcomingMovies);
    },
  },
   // carousel settings
   settings: {
      itemsToShow: 1,
      snapAlign: "start",
      
    },
    // breakpoints are mobile first
    // any settings not specified will fallback to the carousel settings
    breakpoints: {
      // 700px and up
      700: {
        itemsToShow: 3.5,
        snapAlign: "start",
      },
      // 1024 and up
      1024: {
        itemsToShow: 5,
        snapAlign: "start",
      },
    },

})
</script>
  