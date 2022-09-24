<template>
    <div class="demo">
        <h2>学校名称：{{schoolName}}</h2>
        <h2>学校地址：{{address}}</h2>
        <button @click="showName">发送学校名</button>
    </div>
</template>
<script>
export default {
    name:'schoolCom',
    data() {
        return {
            schoolName:'鸣启数字',
            address:'烟台开发区'
        }
    },
    methods: {
        showName(){
            alert(this.schoolName)
        }
    },
    
}
</script>
<style lang="">
    
</style>