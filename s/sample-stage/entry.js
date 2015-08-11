$(function() {

    'use strict';

    var Vue = require('vue');
    var core = require('core');

    var app = {
        
        vm: null,

        setup: function (data) {
            this.vm = new Vue({
                el: '#js-app',
                data: data,
                methods: {
                    showMenu: function () {
                        console.log('showMenu');
                    },
                }
            });
        }
    };


    $.ajax('/api/index.json').then(function (data) {
        console.log('success', data);
        core.setup(data);
        app.setup(data);
    }, function (error) {
        console.log('error', error);
    });

});