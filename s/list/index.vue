<style lang="stylus">
</style>

<template>
<section class="app-content list">

    <h1 class="panel mm pm tac">{{title}}</h1>
    
    <ul class="segment segment--col3 mtm">
        <li class="segment__item" v-on:click="switchTab('characters')" v-bind:class="{ 'is-selected': charactersTab}">character</li>
        <li class="segment__item" v-on:click="switchTab('wepons')"     v-bind:class="{ 'is-selected': weponsTab}">wepon</li>
        <li class="segment__item" v-on:click="switchTab('items')"      v-bind:class="{ 'is-selected': itemsTab}">item</li>
    </ul>

    <ul id="js-tab-content" class="list mtl">
        <template v-for="item in currentContent">
            <li class="list__item">{{$index}}. {{item.name}}</li>
        </template>
    </ul>

</section>
</template>

<script>
(function () {

    'use strict';

    var core      = require('core/index');

    module.exports = {

        name: 'list',

        mixins: [ core.mixins.route ],

        data: function () {
            return {
                title: 'list',
                characters: [],
                wepons: [],
                items: [],
                currentTab: 'characters'
            }
        },
        
        computed: {
            charactersTab: function () {
                return this.currentTab === 'characters';
            },
            weponsTab: function () {
                return this.currentTab === 'wepons';
            },
            itemsTab: function () {
                return this.currentTab === 'items';
            },
            currentContent: function () {
                return this[this.currentTab]
            }
        },

        methods: {
            switchTab: function (target) {
                this.currentTab = target;
            }
        }
    };
})();
</script>