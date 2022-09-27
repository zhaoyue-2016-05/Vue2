<template>
  <div id="app" class="container">
    <div class="mq-header">

    </div>
    <div class="mq-letf list-group">
      <!-- Vue中借助router-link标签实现路由的切换 -->
<!--      <router-link class="list-group-item" active-class="active" to="./about">关于鸣启</router-link>-->
      <router-link class="list-group-item" active-class="active" :to="{name:'aboutPath'}">关于鸣启</router-link>
      <br>
      <router-link class="list-group-item" active-class="active" to="./home">主页</router-link>
      <br>
    </div>
    <div class="mq-content">
      <!-- 指定组件的显现位置 -->
      <router-view>

      </router-view>
    </div>
  </div>
</template>
<script>
export default {
  name: 'App',
  components: {},
  data() {
    return {}
  },
  methods: {},
  mounted() {
  }
}
</script>
<style scoped>
.mq-header {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 60px;
  background-color: darkred;
  color: #fff;
}

.mq-letf {
  position: fixed;
  top: 60px;
  left: 0;
  height: calc(100vh - 60px);
  width: 250px;
  background-color: #31b0d5;
  color: #fff;
}

.mq-content {
  position: fixed;
  top: 60px;
  left: 250px;
  width: calc(100vw - 250px);
  height: calc(100vh - 60px);
  background-color: #dddddd;
  color: #666;
}
</style>
