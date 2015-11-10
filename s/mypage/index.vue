<style lang="stylus">
</style>

<template>
<section class="app-content mypage">
    
    <h1 class="fsl tac pm">{{title}}</h1>
    <p class="fc-info tac">{{test}}</p>

</section>
</template>

<script>
module.exports = {

    name: 'mypage',

    route: {
        data: function (transition) {
            $.ajax({
                url: '/ajax/mypage/index',
                type: 'GET'
            }).then(function (data) {
                console.log('ajax success: ',data);
                transition.next(data);
            }, function (error) {
                console.log('ajax error: ', error);
                transition.redirect('/error');
            });
        },
        activate: function (transition) {
            console.log('hook-example activated!');
            transition.next();
        },
        deactivate: function (transition) {
            console.log('hook-example deactivated!');
            transition.next();
        }
    },

    data: function () {
        return {
            title: 'mypage'
        }
    },

    methods: {

    }
};
</script>