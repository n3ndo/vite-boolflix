<script>
import axios from 'axios';
import { store } from '../store.js';
export default {
    data() {
        return {
            store
        }
    }
}
</script>
<template lang="">
    <header>
        <div class="container-fluid">
            <div class="row justify-content-between">
                <div class="col-4 p-2">
                    <h1>BOOLFIX</h1>
                </div>
                <div class="col-3 p-2 d-flex align-items-center">
                    <input type="text" class="form-control" placeholder="Cerca..." v-model="store.search" id="search">
                    <button class="btn btn-primary" @click="$emit('search')">Cerca</button>
                </div>
            </div>
        </div>
    </header>
</template>
<style lang="scss" scoped>
@use '../styles/generals.scss';

header {
    display: flex;
    flex-wrap: wrap;
    height: 75px;
    background-color: black;


    h1 {
        color: red;
        font-size: 50px;
    }


}
</style>