$(function() {

    'use strict';

    var Vue     = require('vue'),
        header  = require('core/header');

    var app = {
        
        vm: null,

        setup: function (data) {
            this.vm = new Vue({
                el: '#js-app',
                data: data,
                components: {
                    'app-header': header
                },
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
        app.setup(data);
    }, function (error) {
        console.log('error', error);
    });

});