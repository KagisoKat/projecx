<template>
  <div class="mt-8 flex">
    <input
      type="text"
      class="rounded-full w-45 h-12 px-5 mr-10 text-black focus:outline-shadow"
      placeholder="search.."
      @input="debounceSearch"
    />

    <div
      v-if="searchResult.length != 0"
      class="absolute mt-12 ml-2 rounded bg-gray-900 w-64"
    >
      <ul class="mt-3">
        <li :key="index" v-for="(movie, index) in searchResult" class="flex">
          <img :src="posterPath(movie.poster_path)" alt="" class="w-10 p-1" />
          <span>{{ movie.title }}</span>
        </li>
      </ul>
    </div>
  </div>
</template>



<script>

export default {
 
  data() {
    return {
      searchResult: [],
    };
  },

  methods: {
    debounceSearch(event) {
      clearTimeout(this.debounce);
      this.debounce = setTimeout(() => {
        this.fetchSearch(event.target.value);
      }, 600);
    },

    async fetchSearch(term) {
      try {
        // const response = await this.axios.get("https://api.themoviedb.org/3/movie/popular?api_key=c6dd21371d5119b5f6b49b5b09c58fff&language=en-US&page=1&search=" + term
        const response = await this.axios.get(
          "https://api.themoviedb.org/3/search/movie?api_key=c6dd21371d5119b5f6b49b5b09c58fff&query=" +
            term
        );
        this.searchResult = response.data.results;
      } catch (error) {
        console.log(error);
      }
    },

    posterPath(poster_path) {
      return "https://image.tmdb.org/t/p/w500" + poster_path;
    },
  },
};
</script>


