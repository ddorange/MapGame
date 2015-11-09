(function () {

    'use strict';

    var core = {

        router: null,

        /**
         * 初期化
         * @params {Object} option: 
         */
        setup: function (app, $el) {

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