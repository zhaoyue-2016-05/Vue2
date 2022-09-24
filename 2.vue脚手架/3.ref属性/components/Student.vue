<template>
    <div class="demo">
        <h2>学生名称：{{name}}</h2>
        <h2>学生年龄：{{age}}</h2>
        <button @click="showName">发送学校名</button>
    </div>
</template>

<script>
export default {
    name: 'studentCom',
    data() {
        return {
            name: '赵越',
            age: 32
        }
    },
    methods: {
        showName() {
            alert(this.schoolName)
        }
    },
}
</script>

<style>
    .demo {
        background: sandybrown;
        color: #fff;
    }
</style>