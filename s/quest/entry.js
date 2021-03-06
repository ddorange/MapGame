$(function() {

    'use strict';

    var Vue     = require('vue'),
        core    = require('core');,
        header  = require('map/header.vue');


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
                    openCell: function (index, e) {
                        $(e.target).toggleClass('on');
                    },
                    moveBg: function () {
                        console.log('moveBg');
                    }
                }
            });
        }
    };


    $.ajax('/api/index.json').then(function (data) {
        console.log('success', data);
        core.setup(false);
        app.setup(data);
    }, function (error) {
        console.log('error', error);
    });

});