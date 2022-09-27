<template>
  <div class="mq-cardList">
    <!-- 展示用户列表 -->
    <div v-show="users.length" class="card" v-for="item in users" :key="item.id">
      <a :href="item.html_url" target="_blank">
        <img :src="item.avatar_url" style="width: 100px">
      </a>
      <p class="card-text">{{ item.login }}</p>
    </div>

    <!-- 展示欢迎词 -->
    <h1 v-show="isFirst">欢迎使用！</h1>
    <!-- 展示加载中 -->
    <h1 v-show="isLoading">加载中...</h1>
    <!-- 展示错误消息 -->
    <h1 v-show="errMsg">请求出错了</h1>
  </div>
</template>

<script>
export default {
  name: "ListCom",
  data() {
    return {
      isFirst: true,
      isLoading: false,
      errMsg: '',
      users: []
    }
  },
  mounted() {
    this.$bus.$on('updateListData', (isFirst, isLoading, errMsg, users) => {
      console.log('我是Lsit组件，收到数据')
      this.users = users
      this.isFirst = isFirst
      this.isLoading = isLoading
      this.errMsg = errMsg
    })
  }
}
</script>

<style scoped lang="less">
.mq-cardList {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;

  .card {
    width: 33.333%;
    height: 120px;
    text-align: center;

    img {
      margin: auto;
      display: block;
      width: 100px;
      height: 100px;
      background: darkgoldenrod;
    }
  }
}
</style>
