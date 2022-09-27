<template>
  <div class="mq-search">
    <h3 class="jumbotron-heading">Search</h3>
    <div class="mq-input">
      <input type="text" placeholder="请输入你想要的名字" v-model="keyWord">
      <button @click="searchUsers">Search</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "SearchCom",
  data() {
    return {
      keyWord: ''
    }
  },
  methods: {
    searchUsers() {



      // //请求前更新List的数据
      this.$bus.$emit('updateListData', { isLoading: true, errMsg: '', users: [],isFirst: false})
      this.$http.get(`https://api.github.com/search/users?q=${this.keyWord}`).then(
          response => {
            console.log('请求成功了', response.data)
            // this.$bus.$emit('updateList',response.data.items)
            this.$bus.$emit('updateListData', {isLoading: false, errMsg: '', users: response.data.items})
          },
          error => {
            //请求失败更新List的数据
            console.log('请求成功了', error.message)
            this.$bus.$emit('updateListData', {isLoading: false, errMsg: error.message,users:[]})
          }
      )
    }
  }
}
</script>

<style scoped lang="less">
.mq-search {
  margin-bottom: 30px;
  padding: 20px;
  background-color: #666;
  border-radius: 10px;

  .mq-input {

  }
}
</style>
