<template>
  <div>
    <h2>Home组件</h2>
    <div>
      <ul class="nav nav-tabs">
        <li>
          <router-link class="list-group-item" active-class="active" to="/home/news">关于鸣启</router-link>
        </li>
        <li>
          <router-link class="list-group-item" active-class="active" to="/home/message">主页</router-link>
        </li>
      </ul>
      <!-- 缓存多个路由组件 -->
      <!-- <keep-alive :include="['NewsCom','messageCom']">-->
      <!-- 缓存一个路由组件 -->
      <keep-alive include="NewsCom">
        <router-view>

        </router-view>
      </keep-alive>
    </div>
  </div>
</template>

<script>
export default {
  name: "HomeCom",
  mounted() {
    console.log('HomeCom组件挂载完毕了')
  },
  beforeDestroy() {
    console.log('Home组件即将被销毁了')
  }
}
</script>

<style scoped>

</style>