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
                    <h1>BOOLFLIX</h1>
                </div>
                <div class="col-2 p-2 me-2 d-flex align-items-center">
                    <input type="text" class="form-control" placeholder="Cerca..." v-model="store.search" id="search" @keyup="$emit('search')">
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
    background-color: rgb(20, 20, 20);


    h1 {
        color: red;
        font-size: 50px;
    }


}
</style>