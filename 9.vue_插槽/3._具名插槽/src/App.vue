<template>
  <div id="app" class="container">


    <Category title="美食" :listData="foods">
      <img slot="center" src="./images/meishi.png">
      <hr>
      <span slot="footer">更多美食</span>
    </Category>


    <Category title="游戏" :listData="games">
      <ul slot="center">
        <li v-for="(item , index) in games" :key="index">{{ item }}</li>
      </ul>
      <hr>
      <!-- template和div有区别 -->
      <!-- template不包 , 支持v-slot:名 -->
      <template v-slot:footer>
        <span>单机</span>
        <span>网络</span>
      </template>
      <!-- div打包 -->
      <div slot="footer">
        <span>单机</span>
        <span>网络</span>
      </div>
    </Category>


    <Category title="电影" :listData="films">
      <ul slot="center">
        <li v-for="(item , index) in games" :key="index">{{ item }}</li>
      </ul>
      <hr>

    </Category>
  </div>
</template>
<script>
import Category from "@/components/Category";

export default {
  name: 'App',
  components: {
    Category
  },
  data() {
    return {
      foods: ['火锅', '烧烤', '小龙虾', '牛排'],
      games: ['警械', '火线', '死亡', '光追'],
      films: ['教父', '拆弹', '国家', '鸣启']
    }
  },
  methods: {}
}
</script>
<style scoped>
.container {
  display: flex;
  justify-content: space-around;
}
</style>
