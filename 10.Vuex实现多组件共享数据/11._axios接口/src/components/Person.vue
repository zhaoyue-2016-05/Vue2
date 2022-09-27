<template>
  <div>

    <h3>Count组件的求和为：{{ sum }}</h3>
    <h1>人员列表</h1>
    <h3>列表中第一人的名字是：{{firstPersonName}}</h3>
    <input type="text" placeholder="请输入名字" v-model="name">
    <button @click="add">添加</button>
    <button @click="addWang">添加一个姓王的人</button>
    <button @click="addRandom">点击随机古诗</button>
    <ul>
      <li v-for="p in personList" :key="p.id">{{ p.name }}</li>
    </ul>
  </div>
</template>

<script>
import {nanoid} from "nanoid";
export default {
  name: "PersonCom",
  data() {
    return {
      name: ''
    }
  },
  computed: {
    personList() {
      return this.$store.state.personObj.personList
    },
    sum() {
      return this.$store.state.countObj.sum
    },
    firstPersonName(){
      return this.$store.getters["personObj/firstPersonName"]
    }
  },
  methods: {
    add() {
      const personObj = {id: nanoid(), name: this.name}
      this.$store.commit('personObj/ADD_Person', personObj)
      this.name = '';
    },
    addWang(){
      const personObj = {id: nanoid(), name: this.name}
      this.$store.dispatch('personObj/addPersonWang', personObj)
      this.name = '';
    },
    addRandom(){
      this.$store.dispatch('personObj/addPersonServer')
    }
  }
}
</script>

<style scoped>

</style>