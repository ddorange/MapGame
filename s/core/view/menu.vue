<style lang="stylus">
</style>
<template>
    <div class="app-modal" v-transition="anim-modal">
        <h1 class="app-modal-title">menu</h1>
        <hr>
        <ul class="mm">
            <li class="mbm">
                <a class="fc-link" v-link="{ path: '/mypage/index' }">mypage</a>
            </li>
            <li class="mbm">
                <a class="fc-link" v-link="{ path: '/list/index' }">list</a>
            </li>
            <li class="mbm">
                <a class="fc-link" v-link="{ path: '/error' }">error</a>
            </li>
            <li class="mbm">
                <a class="fc-link" v-link="{ path: '/hoge' }">hoge</a>
            </li>
        </ul>
        <p class="fc-danger tac" v-on:click="hidePopup">close</p>
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