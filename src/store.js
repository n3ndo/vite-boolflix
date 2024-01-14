import { reactive } from "vue";

export const store = reactive({
    endpoint: `https://api.themoviedb.org/3/search/movie`,
    movies : [],
    tvSeries : [],
    search : '',
    api_key : 'bed15c037451d61d3638b70f22e85aa7',
})