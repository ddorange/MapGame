<style lang="stylus">
.app-loading
    background-color: #333;
    color: #FFF;
    text-align: center;
    padding-top: 50%;
    box-sizing: border-box;
</style>

<template>
    <section class="app-loading full-screen" v-show="show">
        <p class="mbm">loading...</p>
        <p v-if="params && params.tips">tips: {{params.tips}}</p>
    </section>
</template>

<script>
module.exports = {
    
    name: 'app-loading',

    props: ['params'],

    data: function () {
        return {
            show: true
        };
    },

    events: {
        LOADING_SHOW: function () {
            this.show = true;
        },
        LOADING_HIDE: function () {
            this.show = false;
        }
    }
};
</script>