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
            sowDatailsOverlay: false
        }
    },
    methods: {
        stars(vote) {
            const numStars = Math.ceil(vote / 2);
            return '★'.repeat(numStars) + '☆'.repeat(5 - numStars);
        },

        showDetails() {
            this.sowDatailsOverlay = true
        },
        hideDetails() {
            this.sowDatailsOverlay = false
        }
    }
}
</script>
<template lang="">
        <div class="my-container">
            <div class="row">
                <div class="card" @mouseover="showDetails" @mouseleave="hideDetails">
                    <div class="card-top">
                        <img :src="`https://image.tmdb.org/t/p/w185${media.image}`" alt="">
                    </div>
                    <div class="card-bottom">
                        <div v-if="sowDatailsOverlay" class="overlay">
                            <div class="overlay-content">
                                <h2>{{media.original_title}}</h2>
                                <h2>{{media.title}}</h2>
                                <p>{{media.overview}}</p>
                                <span>{{stars(media.vote)}}</span>
                                <span :class="{'fi': true, ['fi-' + media.original_language]: true}">
                                </span>
                            </div>
                        </div>
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
            position: relative;
            perspective: 1000px;
            padding: 0px;
            background-color: rgba(0, 0, 0, 0.5);

            .card-top {
                position: relative;
                width: 100%;
                height: 100%;
                transform-style: preserve-3d;
                transition: transform 0.5s ease;

                img {
                    width: 100%;
                    height: 100%;
                }
            }

            span {
                font-size: 20px;
            }

            h2 {
                font-size: 25px;
            }

        }
    }
}

.card:hover .card-top {
    transform: rotateY(180deg);
}

.overlay {
    position: absolute;
    top: 0;
    left: 0;
    background-color: rgba(0, 0, 0,0.9);
    color: white;
    padding: 10px;
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    opacity: 0;
    transform-style: preserve-3d;
    transition: opacity 1s ease;
}

.overlay-content {
    text-align: center;
    max-height: 80%;
    overflow-y: auto;
}

.card:hover .overlay {
    opacity: 1;
}
</style>

