<style lang="stylus">
.header
    position absolute
    top 0
    left 0
    width 320px
    height 45px
    padding 8px
    background-color #33636d
    border 1px #9eeeeb solid
    border-top none
    border-radius 0 0 8px 8px
    box-shadow 0 1px 1px rgba(0,0,0,.4)
    box-sizing border-box

.header_status
    height 12px
    color #fff
    font-size 10px
    line-height 12px

.header_status_name
    width 48px
    margin-right 8px

.header_status_val
    width 58px
    margin-right 8px

.header_status_gauge
    width 180px
    height 12px
    background-color #193f4a
    box-sizing border-box
    border-radius 2px
    overflow hidden

.header_status_gauge_bar
    height 12px
    background-color #9eeeeb
</style>

<template>
<header id="js-header" class="header">
    <div class="header_status box mbs">
        <p class="header_status_name">STAMINA</p>
        <p class="header_status_val tar">{{status.stamina}}/{{status.maxStamina}}</p>
        <div class="header_status_gauge">
            <div class="header_status_gauge_bar" style="width: {{Math.floor((status.stamina / status.maxStamina) * 100)}}%;"></div>
        </div>
    </div>
    <div class="header_status box">
        <p class="header_status_name">EXP</p>
        <p class="header_status_val tar">{{status.exp}}/{{status.maxExp}}</p>
        <div class="header_status_gauge">
            <div class="header_status_gauge_bar" style="width: {{Math.floor((status.exp / status.maxExp) * 100)}}%;"></div>
        </div>
    </div>
</header>
</template>

<script>
(function (global) {

    'use strict';

    var header = {
        props: ['status']
    };

    module.exports = header;

})((this || 0).self || global);
</script>