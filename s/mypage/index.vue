<style lang="stylus">
</style>

<template>
<section class="app-content mypage">
    
    <h1 class="panel mm pm tac">{{title}}</h1>
    
    <p class="fc-info tac">{{test}}</p>
    <div class="btnBox mm">
        <div class="btn" v-on:click="showNoti">お知らせ</div>
    </div>

</section>
</template>

<script>
(function () {

    'use strict';

    var Vue       = require('vue'),
        modalNoti = require('./modal-noti.vue');

    // ページ固有のvMを登録
    Vue.component('mypage-modal-noti', Vue.extend(modalNoti));
    
    module.exports = {

        name: 'mypage',

        route: {
            data: function (transition) {
                var self = this;

                $.ajax({
                    url: '/ajax/mypage/index',
                    type: 'GET'
                }).then(function (data) {
                    console.log('ajax success: ', data);
                    self.$dispatch('UPDATE', data);
                    transition.next(data);
                }, function (error) {
                    console.log('ajax error: ', error);
                    transition.redirect('/error');
                });
            }
        },

        data: function () {
            return {
                title: 'mypage'
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