(function () {

    'use strict';

    var core = require('core');

    var option = {
        
        data: function () {
            return {
                status: {
                    stamina: 0,
                    maxStamina: 100,
                    exp: 0,
                    maxExp: 100
                },
                tips: {
                    text: '',
                    imageId: 1
                },
                popup: {
                    view: '',
                    params: {}
                }
            };
        },
        
        components: {
            'app-header':   core.component.header,
            'app-footer':   core.component.footer,
            'app-menu':     core.component.menu,
            'app-overlay':  core.component.overlay,
            'app-loading':  core.component.loading
        },
        
        events: {
            UPDATE: function (data) {
                var self = this;

                _.each(data, function (val, name) {
                    if (self.$data.hasOwnProperty(name)) {
                        self[name] = val;
                    }
                });
            },
            POPUP_SHOW: function (name, data) {
                if (!_.isString(name)) {
                    return false;
                }
                console.log(name);
                this.$broadcast('OVERLAY_SHOW');
                this.popup.view = name;
                this.popup.params = data;
            },
            POPUP_HIDE: function () {
                this.$broadcast('OVERLAY_HIDE');
                this.popup.view = '';
                this.popup.params = null;
            },
            MENU_SHOW: function () {
                this.$broadcast('OVERLAY_SHOW');
                this.popup.view = 'app-menu';
            },
            LOADING_SHOW: function () {
                this.$broadcast('LOADING_SHOW');
            },
            LOADING_HIDE: function () {
                this.$broadcast('LOADING_HIDE');
            }
        },

        ready: function () {
            var self = this;

            setTimeout(function () {
                self.$broadcast('LOADING_HIDE');
            }, 10);
        }
    };

    // start
    $(function() {
        core.setup(option, '#js-app');

        // debug
        window.app = core.router.app;
    });

})();