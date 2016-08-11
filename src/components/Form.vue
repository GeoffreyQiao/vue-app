<!-- 私有样式 -->
<style scoped>
.list-form {
    display: table;
    margin: 0 auto;
    /*         flex-flow: column nowrap;
    justify-content: space-around;  */
}

</style>

<template>
    <form class="component list-form" transition="component" transition-mode="out-in">
        <tbody>
            <form-item :item="items[0]" type="title"></form-item>
            <form-item v-for="i in items" :item.sync="i" type="value"></form-item>
        </tbody>
    </form>
</template>

<script>

import FormItem from './Form.Item';
export default {
    props: [],
    data() {
            return {
                items: [{
                    id: 0,
                    name: 'Geo',
                    gender: 1,
                    age: 32
                }, {
                    id: 1,
                    name: 'Keos 是',
                    gender: 0,
                    age: 17
                }]
            }
        },
        components: [FormItem],
}

</script>
