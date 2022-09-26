<template>
  <div class="school">
    <h2 class="color">学校名称：{{ name }}</h2>
    <h2>学校地址：{{ address }}</h2>
    <button @click="handlSchool">把邀请发给App</button>
  </div>
</template>
<script>
export default {
  name: 'schoolCom',
  props: ['getSchoolName'],
  data() {
    return {
      name: '鸣启数字科技有限公司',
      address: '烟台开发区'
    }
  },
  methods: {
    handlSchool() {
      this.getSchoolName(this.name)
    },
  }
}
</script>
<style scoped>
.school {
  background: rebeccapurple;
  color: #fff;
}

.color {
  color: darkblue;
}
</style>
