<template>
  <div class="demo">
    <h1>鸣启专业：{{ msg }}</h1>
    <h2>学生名称：{{ name }}</h2>
    <h2>学生年龄：{{ myAge + 2 }}</h2>
    <h2>学生性别：{{ sex }}</h2>
    <button @click="updateAge">更新年龄</button>
  </div>
</template>

<script>
export default {
  name: "studentCom",
  props:['name' , 'age' , 'sex'], // 简单声明接收

  // 接收同时对数据进行类型限制
  /*     props:{
        name:String,
        age:Number,
        sex:String
    }, */

  // 接收的同时对数据进行类型限制+默认值的指定+必要性的限制
  /*   props: {
    name: {
      type: String, // name的类型是字符串
      required: true, // name是必要的
    },
    age: {
      type: Number,
      default: 18,
    },
    sex: {
      type: String,
      required: true,
    },
  }, */

  data() {
    return {
      msg: "鸣启职位：web前端",
      myAge:this.age,
    };
  },
  methods: {
    updateAge(){
        this.myAge++ 
    }
  },
};
</script>

<style>
.demo {
  background: sandybrown;
  color: #fff;
}
</style>