<template>
<div>
  <h1 :style="{opacity}">新闻热门消息</h1>
  <ul>
    <li>News001 <input type="text"></li>
    <li>News002 <input type="text"></li>
    <li>News003 <input type="text"></li>
  </ul>
</div>
</template>

<script>
export default {
  name: "NewsCom",
  data(){
    return {
      opacity:1
    }
  },
/*  mounted() {
    console.log('mounted',this)
    this.timer = setInterval(() => {
      console.log('@')
      this.opacity -= 0.01
      if( this.opacity <= 0){
        this.opacity = 1
      }
    },16)
  },
  beforeDestroy() {
    console.log('News组件即将被销毁了')
    clearInterval(this.timer)
  }*/


  // 路由两个新生命周期
  // 当前组件被激活了
  activated() {
    console.log('被激活了')
    this.timer = setInterval(() => {
      console.log('@')
      this.opacity -= 0.01
      if( this.opacity <= 0){
        this.opacity = 1
      }
    },16)
  },
  // 当前组件失活了
  deactivated() {
    console.log('失活了')
    clearInterval(this.timer)
  }

}
</script>

<style scoped>

</style>