<template>
  <div id="app" class="container">
    <Count></Count>
  </div>
</template>
<script>
import Count from "@/components/Count";

export default {
  name: 'App',
  components: {
    Count
  },
  data() {
    return {

    }
  },
  methods: {},
  mounted() {
    console.log('App', this)
  }
}
</script>
<style scoped>
.container {
  display: flex;
  justify-content: space-around;
}
</style>
