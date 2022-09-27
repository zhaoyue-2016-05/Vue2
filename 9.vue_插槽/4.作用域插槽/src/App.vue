<template>
  <div id="app" class="container">
    <!--  scope="gamesData"  -->
    <Category title="游戏">
      <template scope="gamesData">
        <ul>
          <li v-for="(item , index) in gamesData.games" :key="index">{{ item }}</li>
        </ul>
      </template>
    </Category>
    <!-- scope="{games}"  -->
    <Category title="游戏">
      <template scope="{games}">
        <ul>
          <li v-for="(item , index) in games" :key="index">{{ item }}</li>
        </ul>
      </template>
    </Category>
    <!--  slot-scope="{games}"  -->
    <Category title="游戏">
      <template slot-scope="{games}">
        <ul>
          <li v-for="(item , index) in games" :key="index">{{ item }}</li>
        </ul>
      </template>
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
      games: ['警械', '火线', '死亡', '光追'],
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
