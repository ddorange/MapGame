<style lang="stylus">
</style>
<template>
    <div class="modal" v-transition="anim-modal">
        <h1 class="modal__header">お知らせ</h1>
        <ul class="list">
            <li class="list__item" v-for="item in params.noti">
                <p class="fc-info fss mbs">{{item.date}}</p>
                <p class="fc-primary">{{item.text}}</p>
            </li>
        </ul>
        <p class="fc-danger mm tac" v-on:click="hidePopup">close</p>
    </div>
</template>
<script>
module.exports = {

    name: 'mypage-modal-noti',

    props: ['params'],

    methods: {
        hidePopup: function () {
            this.$dispatch('POPUP_HIDE');
        }
    },
};
</script>