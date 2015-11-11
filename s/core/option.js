(function () {

    'use strict';

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
            'app-header':   require('./view/header.vue'),
            'app-footer':   require('./view/footer.vue'),
            'app-menu':     require('./view/menu.vue'),
            'app-overlay':  require('./view/overlay.vue'),
            'app-loading':  require('./view/loading.vue')
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

    // Exports ----------------------------------------------
    if (typeof module !== 'undefined' && module.exports) {
        module.exports = option;
    }
    window.app = window.app || {};
    window.app.option = option;


})();