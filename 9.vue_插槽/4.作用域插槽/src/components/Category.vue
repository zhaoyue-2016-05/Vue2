<template>
  <div class="category">
    <h3>{{ title }}分类</h3>
    <slot :games="games">我是一些默认值，当使用者没有传递具体结构时，默认出现此内容</slot>
  </div>
</template>

<script>
export default {
  name: "CategoryCom",
  props: ['title'],
  data(){
    return {
      games: ['警械', '火线', '死亡', '光追'],
    }
  }
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
