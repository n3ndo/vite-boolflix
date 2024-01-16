<script>
import { store } from '../store.js';
export default {
    props: {
        media: Object
    },
    data() {
        return {
            store
        }
    },
}
</script>
<template lang="">
    <div class="text-white ">
        <div class="container-fluid">
            <div >
                <img :src="`https://image.tmdb.org/t/p/w185${media.image}`" alt="">
                <h2>{{media.original_title}}</h2>
                <h2>{{media.title}}</h2>
                <h2>{{media.vote}}</h2>
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

