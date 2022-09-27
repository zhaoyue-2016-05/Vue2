<template>
  <div id="app" class="container">
    <Category title="美食" :listData="foods">
      <img src="./images/meishi.png">
    </Category>
    <Category title="游戏" :listData="games">
      <ul>
        <li v-for="(item , index) in games" :key="index">{{item}}</li>
      </ul>
    </Category>
    <Category title="电影" :listData="films">
      <li v-for="(item , index) in games" :key="index">{{item}}</li>
    </Category>
  </div>
</template>
<script>
import Category from "@/components/Category";
export default {
  name: 'App',
  components:{
    Category
  },
  data(){
    return {
      foods:['火锅', '烧烤', '小龙虾', '牛排'],
      games:['警械', '火线', '死亡','光追'],
      films:['教父', '拆弹','国家','鸣启']
    }
  },
  methods: {

  }
}
</script>
<style scoped>
.container {
  display: flex;
  justify-content: space-around;
}
</style>
