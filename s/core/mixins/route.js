(function () {

    'use strict';

    var route = {

        route: {
            data: function (transition) {
                var self = this;

                console.log(this.initDataUrl);

                if (!this.initDataUrl) {
                    transition.next();
                } else {
                    $.ajax({
                        url: this.initDataUrl,
                        type: 'GET'
                    }).then(function (data) {
                        console.log('ajax success: ', data);
                        self.$dispatch('UPDATE', data);
                        transition.next(data);
                    }, function (error) {
                        console.log('ajax error: ', error);
                        transition.redirect('/error');
                    });
                }
            },
            activate: function (transition) {
                console.log('hook-example activated!');
                transition.next();
            },
            deactivate: function (transition) {
                console.log('hook-example deactivated!');
                transition.next();
            }
        }

    };

    // Exports ----------------------------------------------
    if (typeof module !== 'undefined' && module.exports) {
        module.exports = route;
    }
    window.app = window.app || {};
    window.app.route = route;


})();