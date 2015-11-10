<style lang="stylus">
</style>

<template>
<header id="js-app-header" class="app-header">
    <div class="app-header__status box bpj mbs">
        <p class="mrm">STAMINA</p>
        <div class="box bpe">
            <p class="mrm">{{status.stamina}}/{{status.maxStamina}}</p>
            <div class="app-header__status__gauge">
                <div class="app-header__status__gauge__bar" style="width: {{Math.floor((status.stamina / status.maxStamina) * 100)}}%;"></div>
            </div>
        </div>
    </div>
    <div class="app-header__status box bpj">
        <p class="mrm">EXP</p>
        <div class="box bpe">
            <p class="mrm">{{status.exp}}/{{status.maxExp}}</p>
            <div class="app-header__status__gauge">
                <div class="app-header__status__gauge__bar" style="width: {{Math.floor((status.exp / status.maxExp) * 100)}}%;"></div>
            </div>
        </div>
    </div>
</header>
</template>

<script>
module.exports = {

    name: 'app-header',

    data: function () {
        return {
            text: 'header',
            status: {
                stamina: 20,
                maxStamina: 100,
                exp: 10,
                maxExp: 500
            }
        }
    },

    methods: {
        showMenu: function () {
            this.$dispatch('MENU.SHOW');
        }
    }
};
</script>