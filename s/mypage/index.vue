<style lang="stylus">
</style>

<template>
<section class="app-content mypage">
    
    <h1 class="title title--lg mtm">{{title}}</h1>
    
    <p class="fc-info tac mm">{{test}}</p>
    
    <div class="btnBox mm">
        <div class="btn" v-on:click="showNoti">お知らせ</div>
    </div>

</section>
</template>

<script>
(function () {

    'use strict';

    var Vue       = require('vue'),
        core      = require('core'),
        modalNoti = require('./component/modal-noti.vue');

    // ページ固有のvMを登録
    Vue.component('mypage-modal-noti', Vue.extend(modalNoti));
    
    module.exports = {

        name: 'mypage',

        mixins: [ core.mixins.route ],

        data: function () {
            return {
                title: 'マイページ',
                initDataUrl: '/ajax/mypage/index'
            }
        },

        methods: {
            showNoti: function () {
                var self = this;

                $.ajax({
                    url: '/ajax/mypage/noti'
                }).then(function (data) {
                    self.$dispatch('POPUP_SHOW', 'mypage-modal-noti', data);
                });
            }
        }
    };
})();
</script>