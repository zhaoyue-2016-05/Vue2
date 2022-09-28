<template>
  <div>
    <ul>
      <li v-for="p in messageData" :key="p.id">
        <router-link :to="{
          path:'/home/message/detail',
          query:{
            id:p.id,
            title:p.title
          }
        }">
          {{ p.title }}
        </router-link>
        <button @click="pushShow(p)">push查看</button>
        <button @click="replaceShow(p)">replace查看</button>
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
  },
  methods: {
    pushShow(p) {
      this.$router.push({
        name: 'detailpath',
        query: {
          id: p.id,
          title: p.title
        }
      })
    },
    replaceShow(p) {
      this.$router.replace({
        name: 'detailpath',
        query: {
          id: p.id,
          title: p.title
        }
      })
    }
  }
}
</script>

<style scoped>

</style>