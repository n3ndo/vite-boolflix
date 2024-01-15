import { reactive } from "vue";

export const store = reactive({
    movieEndpoint: `https://api.themoviedb.org/3/search/movie`,
    seriesEndpoint : `https://api.themoviedb.org/3/search/tv`,
    movies : [],
    series : [],
    search : '',
    api_key : '50e720e23ae0f616a0d8a6ba8bcdeb7e',
    flags: {
        'it': 'url(./public/Flags_of_italy.svg.png)',
        'en': 'url(./public/inghilterra.png)',
        'es': 'url(./public/spagna.png)',
        'fr': 'url(./public/Flags_of_France.svg.png)',
    }
})