<template>
  <div class="demo">
    <h1>鸣启专业：{{ msg }}</h1>
    <h2>公司名称：{{ name }}</h2>
    <h2>学生名称：{{ formName }}</h2>
    <h2>学生年龄：{{ age }}</h2>
    <h2>学生性别：{{ sex }}</h2>

    <button @click="showName">发送学校名</button>
  </div>
</template>

<script>
import {hunhe, info} from '../mixin.js'

export default {
  name: "studentCom",
  data() {
    return {
      msg: "鸣启职位：web前端",
      age: 32,
      name: '鸣启',
      sex: "男",
    };
  },
  methods: {},
  mixins: [hunhe,info]
};
</script>

<style>
.demo {
  background: sandybrown;
  color: #fff;
}
</style>
