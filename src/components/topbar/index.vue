<template>
    <div>
        <slot name="left">
        <h3>{{title}}</h3>
        <slot name="right">
    </div>
</template>

<script>
export default {
    name: 'TopBar',
    props: {
        title: {
            type: String,
            default: '通讯录'
        }
    },

    data() {
        return {
        }
    },


}
</script>

<style lang="less" scoped>

</style>
