(function () {

    'use strict';

    var Vue       = require('vue'),
        VueRouter = require('vue-router');

    var r = {

        router: null,

        /**
         * 初期化
         * @params {Object} option: 
         */
        setup: function (app, $el) {

            // プラグインをインストール
            Vue.use(VueRouter);

            this.router = new VueRouter();

            this.router.map({
                '/mypage': {
                    component: require('./mypage/index.vue')
                },
                '/list': {
                    component: require('./list/index.vue')
                }
            });

            // 見つからなかったルートのリダイレクト
            this.router.redirect({
                '*': '/mypage'
            });

            // Routerを起動する
            this.router.start(app, $el);

            return this;
        }
    };


    // Exports ----------------------------------------------
    if (typeof module !== 'undefined' && module.exports) {
        module.exports = r;
    }
    window.app = window.app || {};
    window.app.router = r;

})();