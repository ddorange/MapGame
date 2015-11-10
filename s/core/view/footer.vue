<style lang="stylus">
.app-footer
    position fixed
    bottom 0
    left 0
    width 100%

.app-footer--pc
    position static

.app-footer__body
    width 320px
    margin 0 auto
    color #fff
    text-align center

.app-footer__corner
    width 48px
    height 48px
    background-color rgba(0,0,0,0.5)
    line-height 48px

.app-footer__corner--right
    border-radius 10px 0 0 0
    box-shadow 0 -1px 1px rgba(0,0,0,0.4)

.app-footer__corner--left
    border-radius 0 10px 0 0
    box-shadow 0 -1px 1px rgba(0,0,0,0.4);

.app-footer__list
    height 32px
    box-sizing border-box
    padding 0 12px
    background-color rgba(0,0,0,0.5)
    line-height 32px
    box-shadow 0px -1px 1px rgba(0,0,0,0.4)

.app-footer__list__item
    margin 0 8px
    font-size 10px

</style>

<template>
<footer id="js-app-footer" class="app-footer app-footer--pc">
    <div class="app-footer__body box bae">
        <div class="app-footer__corner app-footer__corner--left"></div>
        <ul class="app-footer__list bfj box bpj">
            <li class="app-footer__list__item">
                <a class="fc-link" v-link="{ path: '/mypage/index' }">mypage</a>
            </li>
            <li class="app-footer__list__item">
                <a class="fc-link" v-link="{ path: '/list/index' }">list</a>
            </li>
            <li class="app-footer__list__item">
                <a class="fc-link" v-link="{ path: '/error' }">error</a>
            </li>
            <li class="app-footer__list__item">
                <a class="fc-link" v-link="{ path: '/hoge' }">hoge</a>
            </li>
        </ul>
        <div class="app-footer__corner app-footer__corner--right" v-on:click="showMenu">
            menu
        </div>
    </div>
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
            this.$dispatch('MENU_SHOW');
        }
    }
};
</script>