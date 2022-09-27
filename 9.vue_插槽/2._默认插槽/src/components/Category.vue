<template>
  <div class="category">
    <h3>{{ title }}分类</h3>
    <!-- 定义一个插槽(挖个坑，等着组件的使用者进行填充) -->
    <slot>我是一些默认值，当使用者没有传递具体结构时，默认出现此内容</slot>
  </div>
</template>

<script>
export default {
  name: "CategoryCom",
  props: ['listData', 'title']
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
