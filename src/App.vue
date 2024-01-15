<script>
import AppHeader from './components/AppHeader.vue';
import FilmCard from './components/FilmCard.vue';
import axios from 'axios';
import { store } from './store.js';
export default {
  components: {
    AppHeader,
    FilmCard
  },
  data() {
    return {
      store,
      movies: [],
      series: [],
    }
  },
  methods: {
    getMoviesAndSeries() {
      axios.get(this.store.endpoint += `?api_key=${store.api_key}&query=${store.search}`).then((response) => {
        let movies_response = response.data.results;
        movies_response.forEach((elem) => {
          let obj = {
            image: elem.backdrop_image,
            title: elem.title,
            original_title: elem.original_title,
            vote: elem.vote_average,
            original_language: elem.original_language
          }

          this.movies.push(obj);
          console.log(this.movies);
        });
      })
    }
  },


}
</script>
<template lang="">
  <body>
    <AppHeader @search="getMoviesAndSeries"/>
    <FilmCard v-for="movie, index in movies" :key="index" :movie="movie"/>
  </body>
</template>
<style lang="scss">
@use './styles/generals.scss';

body {
  background-color: rgb(67, 67, 67);
}
</style>
