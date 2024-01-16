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
        stars(vote) {
            const numStars = Math.ceil(vote / 2);
            return '★'.repeat(numStars) + '☆'.repeat(5 - numStars);
        }
    }
}
</script>
<template lang="">
        <div class="my-container">
            <div class="row">
                <div class="card">
                    <div class="card-top">
                        <img :src="`https://image.tmdb.org/t/p/w185${media.image}`" alt="">
                    </div>
                    <div class="card-bottom">
                        <h2>{{media.original_title}}</h2>
                        <h2>{{media.title}}</h2>
                        <span>{{stars(media.vote)}}</span>
                        <span :class="{'fi': true, ['fi-' + media.original_language]: true}">
                        </span>
                    </div>
                </div>
            </div>
        </div>
</template>
<style lang="scss" scoped>
@use '../styles/generals.scss';

.my-container {
    display: flex;
    width: 250px;

    .row {
        display: flex;
        width: 100%;

        .card {
            margin: 10px;
            width: 100%;

            
            .card-top {
                width: 100%;

                img{
                    width: 100%;
                }
            }

            span {
                font-size: 20px;
            }
            
            h2{
                font-size: 25px;
            }

        }
    }
}
</style>

