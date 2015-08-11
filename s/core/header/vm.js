(function (global) {

    'use strict';

    var Vue = require('vue');

    var header = Vue.extend({
        props: ['status'],
        template: '#js-tmpl-header'
    });

    module.exports = header;

})((this || 0).self || global);