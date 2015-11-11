(function () {

    'use strict';

    var Vue       = require('vue'),
        VueRouter = require('vue-router');

    var core = {

        router: null,

        option:  require('./option'),

        /**
         * 初期化
         * @params {Object} option
         * @params {String} $el
         */
        setup: function (app, $el) {
            // プラグインをインストール
            Vue.use(VueRouter);

            var router = new VueRouter();

            router.map({
                '/error': {
                    component: require('./../error/index.vue')
                },
                '/mypage': {
                    component: require('./../mypage/index.vue')
                },
                '/list': {
                    component: require('./../list/index.vue')
                }
            });

            // 見つからなかったルートのリダイレクト
            router.redirect({
                '*': '/error'
            });

            router.beforeEach(function (transition) {
                // 遷移するときにポップアップを消す
                router.app.$emit('POPUP_HIDE');
                transition.next();
            });

            // Routerを起動する
            router.start(app, $el);

            this.router = router;

            return this;
        },
        /**
         * token付きAJAX処理
         */
        // ajax: require('util/ajax'),
        /**
         * 画像のLazy-load
         */
        // lazyLoad: require('util/lazy-load'),

        // base: require('./base'),
    };


    // Exports ----------------------------------------------
    if (typeof module !== 'undefined' && module.exports) {
        module.exports = core;
    }
    window.app = window.app || {};
    window.app.core = core;

})();