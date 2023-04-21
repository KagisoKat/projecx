<template>
    <div >
    <h1 class="mt-5 text-xl font-bold">POPULAR MOVIES</h1>

     <div class="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-4  " >
     <MovieItem 
    :key="movie.id" v-for="movie in movies" :movie="movie"/>
    
    </div>
</div>
</template>

<script>
 import MovieItem from './items/MovieItem.vue';

 
 export default{
    components:{
        MovieItem
    },
    data: function() {
        return {
            movies: [],
        }
    },
    
   async mounted() {
    try{const response = await  this.axios.get("https://api.themoviedb.org/3/movie/popular?api_key=c6dd21371d5119b5f6b49b5b09c58fff&language=en-US&page=1")
      this.movies = response.data.results;
     } catch (error) {
        console.log(error);
     }
    }
 };
   



</script>