<template>
  <div class="mt-10 text-xl font-bold">
    UPCOMING MOVIES
    <Carousel
    >
      <Slide :index="i" :key="i" v-for="(movie, i) in this.upcomingMovies">
        <img :src="'https://image.tmdb.org/t/p/w500/' + movie.poster_path" />
        <div class="carousel__item bg-transparent">{{ movie.title }}</div>
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
  
 
});
</script>
<style scoped>
.carousel__prev,
.carousel__next {
  box-sizing: content-box;
  background: var(--vc-nav-background);
  border-radius: var(--vc-nav-border-radius);
  width: var(--vc-nav-width);
  height: var(--vc-nav-height);
  text-align: center;
  font-size: var(--vc-nav-height);
  padding: 0;
  color: var(--vc-nav-color);
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  border: 0;
  cursor: pointer;
  margin: 0 10px;
  top: 50%;
  transform: translateY(-50%);
}
</style>
