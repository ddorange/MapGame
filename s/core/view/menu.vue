<style lang="stylus">
</style>
<template>
    <div class="modal" v-transition="anim-modal">
        
        <h1 class="modal__header">menu</h1>
        
        <ul class="list">
            <li class="list__item">
                <a class="fc-primary" v-link="{ path: '/mypage' }">mypage</a>
            </li>
            <li class="list__item">
                <a class="fc-primary" v-link="{ path: '/list' }">list</a>
            </li>
            <li class="list__item">
                <a class="fc-primary" v-link="{ path: '/error' }">error</a>
            </li>
            <li class="list__item">
                <a class="fc-primary" v-link="{ path: '/hoge' }">hoge</a>
            </li>
        </ul>

        <p class="fc-danger tac mm" v-on:click="hidePopup">close</p>
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