<style lang="stylus">
</style>

<template>
<header id="js-app-header" class="app-header box">

    <div v-if="isMypage" class="app-header__corner app-header__corner--left" v-link="{ path: '/top' }">TOP</div>
    <div v-else          class="app-header__corner app-header__corner--left" v-link="{ path: '/mypage' }">MYPAGE</div>

    <div class="app-header__center">
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
    </div>

    <div class="app-header__corner app-header__corner--right" v-tap="showMenu">
        MENU
    </div>

</header>
</template>

<script>
module.exports = {

    name: 'app-header',

    props: ['status'],

    data: function () {
        console.log(this.$root);
        return {
            // DEFAULT | MYPAGE 
            ui: 'MYPAGE',
        };
    },

    computed: {
        isMypage: function () {
            return this.ui === 'MYPAGE';
        }
    },

    methods: {
        showMenu: function () {
            this.$dispatch('MENU_SHOW');
        }
    }
};
</script>