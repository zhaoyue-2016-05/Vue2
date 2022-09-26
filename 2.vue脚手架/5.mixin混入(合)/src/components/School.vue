<template>
  <div class="school">
    <h2>学生名称：{{ formName }}</h2>
    <h2>学校名称：{{ name }}</h2>
    <h2>学校地址：{{ address }}</h2>
    <button @click="showName">发送学校名</button>
  </div>
</template>
<script>
import {hunhe, info} from '../mixin.js'

export default {
  name: 'schoolCom',
  data() {
    return {
      name: '鸣启数字',
      address: '烟台开发区'
    }
  },
  mixins: [hunhe,info]
}
</script>
<style>
.school {
  background: rebeccapurple;
  color: #fff;
}
</style>
