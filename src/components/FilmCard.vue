<script>
export default {
    props: {
        movie: Object
    }
}
</script>
<template lang="">
    <div class="text-white ">
        <div class="conteiner-fluid">
            <div class="">
                <div class="">
                    <h2>{{movie.original_title}}</h2>
                    <h2>{{movie.title}}</h2>
                    <h2>{{movie.vote}}</h2>
                    <h2>{{movie.original_language}}</h2>
                </div>
            </div>
        </div>
    </div>
</template>
<style lang="scss" scoped>
@use '../styles/generals.scss';
.row{
    display: flex;
    flex-wrap: wrap;
}
</style>