<script>
import { store } from '../store.js';
export default {
    props: {
        media: Object
    },
    data() {
        return {
            store,
            votes: this.media.vote,
        }
    },
    methods: {
        stars(vote){
            const numStars = Math.ceil(vote / 2);
            return '★'.repeat(numStars) + '☆'.repeat(5 - numStars);
        }
    }
}
</script>
<template lang="">
    <div class="text-white ">
        <div class="container-fluid">
            <div >
                <img :src="`https://image.tmdb.org/t/p/w185${media.image}`" alt="">
                <h2>{{media.original_title}}</h2>
                <h2>{{media.title}}</h2>
                <span>{{stars(media.vote)}}</span>
                <span :class="{'fi': true, ['fi-' + media.original_language]: true}">
                </span>
            </div>
        </div>
    </div>
</template>
<style lang="scss" scoped>
@use '../styles/generals.scss';

span{
    font-size: 25px;
}
</style>

