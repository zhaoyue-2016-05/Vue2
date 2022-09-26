<template>
  <div class="school">
    <h2 class="color">学校名称：{{ name }}</h2>
    <h2>学校地址：{{ address }}</h2>

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

  },
  mounted() {
    console.log('School' , this)
    this.$bus.$on('hello' , (data)=>{
      console.log('我是School组件，收到了数据',data)
    })
  },
  beforeDestroy() {
    this.$bus.off('hello')
  }
}
</script>
<style scoped>
.school {
  background: rebeccapurple;
  color: #fff;
}
.color {
  color: darkblue;
}
</style>
