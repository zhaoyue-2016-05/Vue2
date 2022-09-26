<template>
  <div class="app">
    <h1>{{ appTitle }}</h1>
    <!-- 通过父组件给予子组件传递函数类型的props实现：子给父传递数据 -->
    <schoolCom :getSchoolName="getSchoolName"></schoolCom>
    <!-- 通过父组件给予子组件绑定一个自定义事件实现：子给父传递数据 (第一种写法，使用@或v-on) -->
    <studentCom @emitStudent="emitHandSendStudent" @demo="m1"></studentCom>

    <!-- 通过父组件给予子组件绑定一个自定义事件实现：子给父传递数据（第二种写法，使用ref） -->
    <!--    <studentCom ref="studentRef"></studentCom>-->
  </div>
</template>
<script>
// 引入组件
import schoolCom from "./components/School.vue";
import studentCom from "./components/Student.vue";

export default {
  name: "App",
  data() {
    return {
      appTitle: '鸣启数字科技有限公司'
    };
  },
  components: {
    schoolCom,
    studentCom
  },
  methods: {
    getSchoolName(name) {
      console.log('App组件收到了学校名', name)
    },
    emitHandSendStudent(name, ...params) {
      console.log('App组件收到了$emit的学生名', name, params)
    },
    m1(){
      console.log('demo事件被触发了！')
    }
  },
  mounted() {
    // this.$refs['studentRef'].$on('emitStudent', this.emitHandSendStudent)
  }
};
</script>
<style scoped lang="less">
.app {
  padding: 20px;
  background: burlywood;
}
</style>
