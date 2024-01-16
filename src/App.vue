<script>
import AppHeader from './components/AppHeader.vue';
import MediaCard from './components/MediaCard.vue';
import axios from 'axios';
import { store } from './store.js';
export default {
  components: {
    AppHeader,
    MediaCard
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
      this.movies = [];
      axios.get(this.store.movieEndpoint += `?api_key=${store.api_key}&query=${store.search}`).then((response) => {
        let movies_response = response.data.results;
        console.log(movies_response);
        movies_response.forEach((elem) => {
          let obj = {
            image: elem.poster_path,
            title: elem.title,
            original_title: elem.original_title,
            overview: elem.overview,
            vote: elem.vote_average,
            original_language: elem.original_language
          }

          this.movies.push(obj);

        });
      })

      this.series = [];
      axios.get(this.store.seriesEndpoint += `?api_key=${store.api_key}&query=${store.search}`).then((response) => {
        let series_response = response.data.results;
        series_response.forEach((elem) => {
          let obj = {
            image: elem.poster_path,
            title: elem.name,
            original_title: elem.original_name,
            overview: elem.overview,
            vote: elem.vote_average,
            original_language: elem.original_language
          }

          this.series.push(obj);
        });
      })
    }
  },


}
</script>
<template lang="">
  <body>
    <AppHeader @search="getMoviesAndSeries"/>
    <div class="container-fluid">
      <div class="row">
        <h3>FILM</h3>
        <MediaCard v-for="movie, index in movies" :key="index" :media="movie"/>
        <h3>SERIE TV</h3>
        <MediaCard v-for="serie, index in series" :key="index" :media="serie"/>
      </div>
    </div>
  </body>
</template>
<style lang="scss">
@use './styles/generals.scss';

body {
  background-color: rgb(19, 19, 19);

  h3 {
    color: white;
    font-size: 25px;
    padding-left: 10px;
  }
}
</style>
