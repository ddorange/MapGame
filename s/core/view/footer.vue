<style lang="stylus">
.app-footer
    position fixed
    bottom 0
    left 0
    width 100%

.app-footer__pc
    position static

.app-footer--body
    width 320px
    height 44px
    margin 0 auto
    background-color rgba(0,0,0,0.5)
    border-radius 10px 10px 0 0
    color #fff
    text-align center
</style>

<template>
<footer id="js-app-footer" class="app-footer app-footer__pc">
    <div class="app-footer--body">{{text}}</div>
</footer>
</template>

<script>
module.exports = {

    name: 'app-footer',

    data: function () {
        return {
            text: 'footer'
        }
    },

    methods: {
        showMenu: function () {
            this.$dispatch('MENU.SHOW');
        }
    }
};
</script>