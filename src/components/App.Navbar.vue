<template>
    <nav>
        <ul>
            <li class="item-control" v-for="item of routers" @mouseover="checkHover($index)">
                <a class="item-link" v-link="item.path">
                    <span class="name text-name" v-text="item.show"></span>
                </a>
            </li>
        </ul>
        {{ isMouseOn }}
    </nav>
</template>

<style scoped>
    nav{
        width: 100%;
        padding: auto 10%;
    }

    ul{
        display: flex;
        flex-flow: row nowrap;
        justify-content: space-around;
        align-items: center;
    }

    .item-control{
        display: block;
        text-align: center;
        width: 50%;
    }

    .item-control>.item-link{
        display: block;
        width: 100%;
        height: 100%;
        /*overflow: hidden;*/
        transition: all 1s;
    }

    .item-control>.item-link.v-link-active{
        color: #8AE6FC;
        text-shadow: 0 0 .5rem #8AE6FC;
    }

</style>

<script lang="babel">

    export default {
        // Options / Data

        data () {
            return {
                isMouseOn: false,
                /**
                 *  导航栏路由表模拟数据
                 *  @type    {Array}
                 */
                routers: [
                    {
                        show: 'INDEX',
                        path: '/index',
                        subPaths: [],
                    },
                    {
                        show: 'FORM',
                        path: '/form',
                        subPaths: [],
                    },
                    {
                        show: 'HELLO',
                        path: '/hello',
                        subPaths: [],
                    }
                ]
            }
        },
        props: ['add-class'],
        // computed: {},
        methods: {
            checkHover (idx){
                return this.routers[idx].isHover = true;
            }
        },
        // watch: {},
        // Options / DOM
        // el () {},
        // replace: true,
        // template: '',
        // Options / Lifecycle Hooks
        // init () {},
        // created () {},
        // beforeCompile () {},
        // compiled () {},
        // ready () {},
        // attached () {},
        // detached () {},
        // beforeDestroy () {},
        // destroyed () {},
        // Options / Assets
        // directives: {},
        // elementDirectives: {},
        // filters: {},
        // components: {},
        // transitions: {},
        // partials: {},
        // Options / Misc
        // parent: null,
        // events: {},
        // mixins: [],
        // name: ''
    }
</script>
