import { reactive } from "vue";

export const store = reactive({
    MovieApiUrl: `https://api.themoviedb.org/3/search/movie?api_key=bed15c037451d61d3638b70f22e85aa7`,
    TvApiUrl: `https://api.themoviedb.org/3/search/tv?api_key=bed15c037451d61d3638b70f22e85aa7`,
    films : [],
    tvSeries : [],
})