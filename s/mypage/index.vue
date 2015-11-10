<style lang="stylus">
</style>

<template>
<section class="app-content mypage">
    
    <h1 class="fzl tac pm">{{text}}</h1>

    <ul class="pm">
        <li>
            <a class="fc-link" v-link="{ path: 'list' }">goto list</a>
        </li>
    </ul>

</section>
</template>

<script>
module.exports = {

    name: 'mypage',

    data: function () {
        return {
            text: 'mypage'
        }
    },

    methods: {

    }
};
</script>