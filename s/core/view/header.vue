<style lang="stylus">
</style>

<template>
<header id="js-app-header" class="app-header">
    {{text}}
</header>
</template>

<script>
module.exports = {

    name: 'app-header',

    data: function () {
        return {
            text: 'header'
        }
    },

    methods: {
        showMenu: function () {
            this.$dispatch('MENU.SHOW');
        }
    }
};
</script>