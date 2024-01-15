import { reactive } from "vue";

export const store = reactive({
    movieEndpoint: `https://api.themoviedb.org/3/search/movie`,
    seriesEndpoint : `https://api.themoviedb.org/3/search/tv`,
    movies : [],
    series : [],
    search : '',
    api_key : '50e720e23ae0f616a0d8a6ba8bcdeb7e',
})