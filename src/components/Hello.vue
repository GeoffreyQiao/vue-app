<style scoped>
    h1 {
        color: #42b983;
    }
    input {
        background-color: #343434;
        border: .2px solid #4FCDEB;
        border-radius: .5px;
        color: #42b983;
    }
</style>

<template>
    <div class="component" transition="component" transition-mode='out-in'>
        <h1>Hello man</h1>
        <button type="button" @click="addInCar">加入购物车</button>
        <router-view></router-view>
    </div>
</template>

<script>
    import { AddInCar  } from '../vuex/actions'

    export default {
        vuex: {
            actions: {
                addInCar: AddInCar,
            }
        },
        props: [],
        data() {
            return {
                // note: changing this line won't causes changes
                // with hot-reload because the reloaded component
                // preserves its current state and we are modifying
                // its initial state.
                msg: ''
            }
        },
    }
</script>
