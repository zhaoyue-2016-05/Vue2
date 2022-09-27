<template>
  <div id="app" class="container">
    <Count></Count>
    <hr>
    <Person></Person>
  </div>
</template>
<script>
import Count from "@/components/Count";
import Person from "@/components/Person";

export default {
  name: 'App',
  components: {
    Count,
    Person
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

}
</style>
