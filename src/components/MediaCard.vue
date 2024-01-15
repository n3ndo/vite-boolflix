<script>
export default {
    props: {
        media: Object
    },
}
</script>
<template lang="">
    <div class="text-white ">
        <div class="conteiner-fluid">
            <div >
                <h2>{{media.original_title}}</h2>
                <h2>{{media.title}}</h2>
                <h2>{{media.vote}}</h2>
                <span>{{media.original_language}}</span>
            </div>
        </div>
    </div>
</template>
<style lang="scss" scoped>
@use '../styles/generals.scss';

.content {


    h2 {
        color: red;
        display: inline-block;
    }

}
</style>

