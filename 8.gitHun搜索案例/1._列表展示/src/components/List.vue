<template>
  <div class="mq-cardList">
    <div class="card" v-for="item in users" :key="item.id">
      <a :href="item.html_url" target="_blank">
        <img :src="item.avatar_url" style="width: 100px">
      </a>
      <p class="card-text">{{ item.login }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "ListCom",
  data() {
    return {
      users: []
    }
  },
  mounted() {
    this.$bus.$on('getUsers', (users) => {
      console.log('我是Lsit组件，收到数据', users)
      this.users = users
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
