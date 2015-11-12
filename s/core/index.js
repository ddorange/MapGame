(function () {

    'use strict';

    var core = {

        router: null,


        component: {
            header:   require('./component/header.vue'),
            footer:   require('./component/footer.vue'),
            menu:     require('./component/menu.vue'),
            overlay:  require('./component/overlay.vue'),
            loading:  require('./component/loading.vue')
        },

        util: {
            router: require('./util/router')
        },

        mixins: {
            route: require('./mixins/route'),
        },

        /**
         * 初期化
         * @params {Object} option
         * @params {String} $el
         */
        setup: function (app, $el) {
            
            // ルーターを起動する
            this.router = this.util.router.setup(app, $el);

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
    };


    // Exports ----------------------------------------------
    if (typeof module !== 'undefined' && module.exports) {
        module.exports = core;
    }
    window.app = window.app || {};
    window.app.core = core;

})();