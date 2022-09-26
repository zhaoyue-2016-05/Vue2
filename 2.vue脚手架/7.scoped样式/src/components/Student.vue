<template>
  <div class="demo">
    <h1 class="color">鸣启专业：{{ msg }}</h1>
    <h2>公司名称：{{ name }}</h2>
    <h2>学生年龄：{{ age }}</h2>
    <h2>学生性别：{{ sex }}</h2>

  </div>
</template>

<script>

export default {
  name: "studentCom",
  data() {
    return {
      msg: "鸣启职位：web前端",
      age: 32,
      name: '鸣启',
      sex: "男",
    };
  }
};
</script>

<style lang="less">
.demo {
  background: sandybrown;
  color: #fff;
  .color {
    color: darkred;
  }
}

</style>
