<template>
  <div>
    <ul>
      <li v-for="p in messageData" :key="p.id">
        <!-- 跳转路由并携带params参数，to的字符串写法 -->
        <!-- <router-link :to="`/home/message/detail/${p.id}/${p.title}`">{{ p.title }}</router-link>-->
        <!-- 跳转路由并携带params参数，to的字符串写法 -->
<!--        <router-link :to="{-->
<!--          // path:'/home/message/detail',-->
<!--          name:'detailpath',-->
<!--          params:{-->
<!--            id:p.id,-->
<!--            title:p.title-->
<!--          }-->
<!--        }">-->
<!--          {{ p.title }}-->
<!--        </router-link>-->

        <router-link :to="{
          path:'/home/message/detail',
          query:{
            id:p.id,
            title:p.title
          }
        }">
          {{ p.title }}
        </router-link>
      </li>
      <router-view>

      </router-view>
    </ul>
  </div>
</template>

<script>
export default {
  name: "messageCom",
  data() {
    return {
      messageData: [
        {id: '001', title: '消息001'},
        {id: '002', title: '消息002'},
        {id: '003', title: '消息003'},
      ]
    }
  }
}
</script>

<style scoped>

</style>