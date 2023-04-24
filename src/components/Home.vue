<template>
    <div class=" container mx-auto " >
    <UpcomingMovies />
    <PopularMovies />
    </div>
</template>

<script>

import PopularMovies from "../components/PopularMovies.vue"
import UpcomingMovies from "../components/UpcomingMovies.vue"


export default {
components: {
    PopularMovies,
    UpcomingMovies
  
}
};
</script>