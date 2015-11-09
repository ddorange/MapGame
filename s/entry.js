(function () {

    'use strict';

    var router = require('./router');

    // Vue Option
    var option = {

        el: '#js-app',
        
        data: function () {
            return {
                params: {},
                overlay: false,
                popup: {
                    view: '',
                    params: {}
                },
                loading: {
                    tips: 'とても役に立つTips'
                }
            };
        },
        
        components: {
            'app-header':   require('core/view/header.vue'),
            'app-footer':   require('core/view/footer.vue'),
            // 'app-menu':     require('core/view/menu.vue'),
            'app-overlay':  require('core/view/overlay.vue'),
            'app-loading':  require('core/view/loading.vue')
        },
        
        methods: {
            showMenu: function () {
                this.$emit('POPUP.SHOW', 'app-menu');
            },
            init: function () {
                console.log('__proto__ init');
            }
        },
        
        events: {
            POPUP_SHOW: function (name) {
                if (!_.isString(name)) {
                    return false;
                }

                this.overlay = true;
                this.popup.view = name;
            },
            POPUP_HIDE: function () {
                this.overlay = false;
                this.popup.view = '';
                this.popup.params = null;
            },
            MENU_SHOW: function () {
                this.overlay = true;
                this.popup.view = 'app-menu';
            }
        },

        ready: function () {
            var self = this;

            setTimeout(function () {
                self.$broadcast('LOADING_HIDE');
            }, 3000);
        }
    };


    // start
    $(function() {
        router.setup(option, '#js-app');
    });

})();