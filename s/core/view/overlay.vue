<style lang="stylus">
.app-overlay
    background-color: rgba(0,0,0,0.4);
</style>

<template>
    <section class="app-overlay full-screen" v-show="show" v-transition="anim-fade"></section>
</template>

<script>
module.exports = {

    name: 'app-overlay',

    props: ['params'],

    data: function () {
        return {
            show: false
        };
    },

    events: {
        OVERLAY_SHOW: function () {
            this.show = true;
        },
        OVERLAY_HIDE: function () {
            this.show = false;
        }
    }
};
</script>