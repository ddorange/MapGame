<style lang="stylus">
</style>

<template>
<section class="app-content list">

    <h1 class="panel mm pm tac">{{title}}</h1>
    
    <ul class="segment segment--col3 mtm">
        <li class="segment__item" v-on:click="switchTab('characters', $event)" v-bind:class="{ 'is-selected': charactersTab}">character</li>
        <li class="segment__item" v-on:click="switchTab('wepons',     $event)" v-bind:class="{ 'is-selected': weponsTab}">wepon</li>
        <li class="segment__item" v-on:click="switchTab('items',      $event)" v-bind:class="{ 'is-selected': itemsTab}">item</li>
    </ul>

    <ul id="js-tab-content" class="mm">
        <template v-for="item in currentContent">
            <li>{{$index}}. {{item.name}}</li>
        </template>
    </ul>

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
            title: 'list',
            characters: [],
            wepons: [],
            items: [],
            currentTab: 'characters',
            tabLabel: [ 'characters', 'wepons', 'items' ],
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
        switchTab: function (target, e) {
            this.currentTab = target;
        }
    }
};
</script>