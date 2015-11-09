<style lang="stylus">
.list
    height 460px
</style>

<template>
<section class="app-content list">

    <h1 class="fzl tac pm">{{text}}</h1>

    <ul class="pm">
        <li>
            <a class="fc-link" v-link="{ path: 'mypage' }">goto mypage</a>
        </li>
    </ul>

</section>
</template>

<script>
module.exports = {

    name: 'list',

    data: function () {
        return {
            text: 'list'
        }
    },

    methods: {

    }
};
</script>