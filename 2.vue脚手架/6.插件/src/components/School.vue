<template>
  <div class="school">
    <h2>学校名称：{{ name | mySlice }}</h2>
    <h2>学校地址：{{ address }}</h2>
    <button @click="test">点我测试一个hello方法</button>
  </div>
</template>
<script>
export default {
  name: 'schoolCom',
  data() {
    return {
      name: '鸣启数字科技有限公司',
      address: '烟台开发区'
    }
  },
  methods:{
    test(){
      this.demo()
    }
  }
}
</script>
<style>
.school {
  background: rebeccapurple;
  color: #fff;
}
</style>
