<style>

/**
 *  项目颜色样例
 * @color #B9CD37
 * @color #42b983
 * @color #CD376E
 * @color #2FA960
 * @color #343434
 * @color #4FCDEB
 */
    html {
        background-color: #343434;
        color: #2FAA61;
        height: 100vh;
        font-family: "Segoe Print", "Microsoft YaHei UI";
        overflow: hidden;
    }

    html,
    body,
    p,
    div,
    section,
    {
        margin: 0;
        padding: 0;
        border: none;
    }

    body {
        display: flex;
        flex-flow: row nowarp;
        align-items: center;
        justify-content: space-around;
        height: 100vh;
        width: 100vw;
    }

    * {
        box-sizing: border-box;
    }

    a {
        text-decoration: none;
        color: #4FCDEB;
    }

    ul,
    li,
    ol {
        list-style: none;
    }

    .first-page-title{
        font-size: 3rem;
        text-align: center;
        padding-top: 2vh;
        transition: all 1s;
    }

    .cursor-hand:hover{
        cursor:pointer;
    }
    .first-page-title:hover, .first-page-title:active{
        font-size:3.6rem;
        color: rgba(47,170,97,.43);
    }

</style>

    <!-- private styles over here -->

<style scoped>


    ul,
    li,
    .left {
        text-align: left !important;
        line-height: 1.7rem;
    }

    .nav{
        width: 100%;
        height: 9vh;
    }

    #app {
        width: 100vw;
        height: 100vh;
        padding-top: 1vh;
        overflow: hidden;
    }

    #app-view{
        positon: relative;
        width:100vw;
        height:90%;
        overflow: hidden;
    }

    #app-view>.route-view{
        position: absolute;
        width: 90vw;
        left: 5vw;
        transition: all 2s ease;
    }

    #app-view>.route-view.component-enter{
        left: 100vw;
    }

    #app-view>.route-view.component-leave{
        left: -100%;
    }

    .item-status,
    .item-btn {
        float: right;
    }

    .clear:after,
    .clear:before {
        clear: both;
    }

</style>

<template>

    <div id="app">
        <my-navbar class="nav"></my-navbar>
        <h2>{{ getName }}</h2>
        <div  id="app-view">
                <router-view class="route-view"></router-view>
        </div>
    </div>

</template>

<script>
import MyNavbar from './components/App.Navbar'
/** @module */
import store from './vuex/store'

import { getNums } from './vuex/getters'

export default {

    data () {
        return {
            name: 'Geo 先生',
            hasComponent: false,
        }
    },

    store,
    vuex: {
        getters: {
            numsInCar: getNums
        }
    },
    components: {
        MyNavbar,
    },
    computed: {
        getName : () => store.state.nums
    },
    
    replace: false
}

</script>
