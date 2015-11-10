<style lang="stylus">
</style>

<template>
<section class="app-content list">

    <h1 class="fsl tac pm">{{title}}</h1>
    <p class="fc-info tac">{{test}}</p>

</section>
</template>

<script>
module.exports = {

    name: 'list',

    route: {
        data: function (transition) {
            $.ajax({
                url: '/ajax/list/index',
                type: 'GET'
            }).then(function (data) {
                console.log('ajax success: ',data);
                transition.next(data);
            }, function (error) {
                console.log('ajax error: ', error);
                transition.redirect('/error');
            });
        }
    },

    data: function () {
        return {
            title: 'list'
        }
    },

    methods: {

    }
};
</script>