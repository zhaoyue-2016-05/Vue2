<template>
  <div>
    <h1>当前求和为： {{ sum }}</h1>
    <h1>当前求和放大10倍为： {{ bigSum }}</h1>
    <h1>我在{{ name }}公司</h1>
    <h1>研究{{ subject }}技术</h1>
    <br>
    <select v-model.number="n">
      <option value="1">1</option>
      <option value="2">2</option>
      <option value="3">3</option>
    </select>
    <br>
    <button @click="increment(n)">+</button>
    <button @click="decrement(n)">-</button>
    <button @click="incrementOdd(n)">当前求和为奇数再加</button>
    <button @click="incrementWait(n)">等一等再加</button>

    <h3>Person组件的总人数是：{{ personList.length }}</h3>
  </div>
</template>

<script>
import {mapState, mapMutations, mapActions,mapGetters} from 'vuex'

export default {
  name: "CountCom",
  data() {
    return {
      n: 1 // 用户选中的数字
    }
  },
  computed: {

    // ...mapState(['sum', 'name', 'subject', 'personList']),
    ...mapState('countObj',['sum', 'name', 'subject']),
    ...mapState('personObj',['personList']),

    ...mapGetters('countObj',['bigSum']),
  },
  methods: {

    ...mapMutations('countObj',{increment: 'JIA', decrement: 'MINUS'}),

    ...mapActions('countObj',{incrementOdd: 'odd', incrementWait: 'wait'}),

  }
}
</script>

<style scoped>

</style>
