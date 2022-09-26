<template>
  <div class="demo">
    <h1 class="color">鸣启专业：{{ msg }}</h1>
    <h2>公司名称：{{ name }}</h2>
    <h2>学生年龄：{{ age }}</h2>
    <h2>学生性别：{{ sex }}</h2>
    <button @click="sendStudentName">把学生名给App</button>
    <button @click="unbind">解绑</button>
    <button @click="death">销毁当前student组件的实例</button>
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
  },
  methods:{
    sendStudentName(){
      this.$emit('emitStudent',this.name,23,34,45)
      this.$emit('demo')
    },
    unbind(){
      console.log('解绑一个自定义事件')
      this.$off('emitStudent') //解绑一个自定义事件
      // this.$off(['emitStudent','demo']) //解绑多个自定义事件
      // this.$off() //解绑所有的自定义事件
    },
    death(){
      this.$destroy(); //销毁当前student组件的实例，销毁后所有studen实例的自定义事件全都不效
    }
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
