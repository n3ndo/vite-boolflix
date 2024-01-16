import { reactive } from "vue";

export const store = reactive({
    movieEndpoint: `https://api.themoviedb.org/3/search/movie`,
    seriesEndpoint : `https://api.themoviedb.org/3/search/tv`,
    movies : [],
    series : [],
    search : '',
    api_key : 'e8e8c7d0562028f13739da4efa361e4c',
    flags: {
        'it': 'url(./public/Flags_of_italy.svg.png)',
        'en': 'url(./public/inghilterra.png)',
        'es': 'url(./public/spagna.png)',
        'fr': 'url(./public/Flags_of_France.svg.png)',
    }
})