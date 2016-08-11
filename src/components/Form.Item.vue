<style scoped>

.item-rows>* {
    flex: 1 1 auto;
    width: .8vw;
    margin: 0 auto;
}

.item-columns {
    margin-left: 2rem;
    font-size: 1.5rem;
    transition: all 1.5s;
}

.item-columns:hover,
.item-columns:focus {
    cursor: pointer;
    color: #B9CD37;
}

.item-title {
    color: #CD376E;
    font-size: 2.5rem;
    min-width: 20vw;
    max-width: 25vw;
    margin: 0 auto;
    padding: 0 1.2rem;
}

.item-prop-id,
.item-prop-gender,
.item-prop-age {
    text-align: center;
}

.item-prop-age:after {
    content: " 岁"
}

.item-prop-name {
    text-align: left;
    padding-left: 2rem;
}

</style>

<template>

<tr class="item-rows">
    <th :class="'item-title'" v-for="(key, value) in item" v-text="key | uppercase" v-if="type=='title'"></th>
    <td :class="['item-columns', 'item-prop-'+key]" v-for="(key, value) in item" v-if="type=='value'" v-text="value"></td>
</tr>

</template>

<script>

export default {
    /** @type {String} 模块名 */
    name: 'FormItem',

    /** 模块数据空间 */
    data() {
        return {}
    },

    /** @type {Object} 接收父组件传递的 item 参数 */
    props: {
        item: Object,
        type: String
    }
}

</script>
