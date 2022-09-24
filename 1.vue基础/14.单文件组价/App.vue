<template>
    <div>
        <schoolCom />
        <studentCom />
    </div>
</template>
<script>
// 引入组件
import schoolCom from 'School.vue'
import studentCom from 'Student.vue'
export default {
    name:'App',
    components:{
        schoolCom,
        studentCom
    }
}
</script>
<style lang="">
    
</style>