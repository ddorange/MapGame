<style lang="stylus">
</style>
<template>
    <div class="app-modal" v-transition="anim-modal">
        <h1 class="app-modal-title">menu</h1>
        <hr>
        <button v-on:click="hidePopup">close</button>
    </div>
</template>
<script>
module.exports = {

    name: 'app-menu',

    props: ['params'],

    methods: {
        hidePopup: function () {
            this.$dispatch('POPUP_HIDE');
        }
    },
};
</script>