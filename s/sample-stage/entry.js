(function (global) {

    'use strict';

    var Vue = require('vue');
    var core = require('core');

    $(function() {
        $.ajax('/api/index.json').then(function (data) {
            console.log('success', data);
        }, function (error) {
            console.log('error', error);
        });
    });

})((this || 0).self || global);