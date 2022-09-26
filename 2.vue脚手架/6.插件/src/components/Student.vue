<template>
  <div class="demo">
    <h1>鸣启专业：{{ msg }}</h1>
    <h2>公司名称：{{ name | mySlice }}</h2>
    <h2>学生年龄：{{ age }}</h2>
    <h2>学生性别：{{ sex }}</h2>

    <input type="text" v-fbind:value="name">
  </div>
</template>

<script>

export default {
  name: "studentCom",
  data() {
    return {
      msg: "鸣启职位：web前端",
      age: 32,
      name: '鸣启数字有限公司',
      sex: "男",
    };
  }
};
</script>

<style>
.demo {
  background: sandybrown;
  color: #fff;
}
</style>
