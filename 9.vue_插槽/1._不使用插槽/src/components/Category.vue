<template>
  <div class="category">
    <h3>{{ title }}分类</h3>
    <ul>
      <li v-for="(item, index) in listData" :key="index">{{item}}</li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "CategoryCom",
  props:['listData','title']
}
</script>

<style scoped lang="less">
.category {
  h3 {
    background-color: goldenrod;
  }
  background-color: skyblue;
  width: 200px;
  height: 300px;
}
</style>
