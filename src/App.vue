<script>
import AppHeader from './components/AppHeader.vue';
import axios from 'axios';
import { store } from './store.js';
export default {
  components:{
    AppHeader
  },
  data() {
    return {
      store
    }
  },
  methods: {
    getMoviesAndSeries() {
      let apiUrl = store.endpoint;
      if(store.search !== '') {
        apiUrl += `?api_key=${store.api_key}&query=${store.search}`;
      }
      axios.get(apiUrl).then((response) => {
        store.movies = response.data.data;
        console.log(store.movies);
      })
    }
  },
}
</script>
<template lang="">
  <body>
    <AppHeader @search="getMoviesAndSeries"/>
  </body>
</template>
<style lang="scss">
  @use './styles/generals.scss';

  body {
    background-color: rgb(67, 67, 67);
  }
</style>