<template>
  <div>
    <!--    <h1>当前求和为： {{ $store.state.sum }}</h1>-->
    <!--    <h1>当前求和放大10倍为： {{ $store.getters.bigSum }}</h1>-->
    <!--    <h1>我在{{ $store.state.name }}公司</h1>-->
    <!--    <h1>研究{{ $store.state.subject }}技术</h1>-->

    <!--    <h1>当前求和为： {{ oSum }}</h1>-->
    <!--    <h1>当前求和放大10倍为： {{ mGigSum }}</h1>-->
    <!--    <h1>我在{{ oName }}公司</h1>-->
    <!--    <h1>研究{{ oSubject }}技术</h1>-->

    <h1>当前求和为： {{ sum }}</h1>
    <h1>当前求和放大10倍为： {{ bigSum }}</h1>
    <h1>我在{{ name }}公司</h1>
    <h1>研究{{ subject }}技术</h1>

    <hr>
    <select v-model.number="n">
      <option value="1">1</option>
      <option value="2">2</option>
      <option value="3">3</option>
    </select>
    <hr>
    <button @click="increment">+</button>
    <button @click="decrement">-</button>
    <button @click="incrementOdd">当前求和为奇数再加</button>
    <button @click="incrementWait">等一等再加</button>
  </div>
</template>

<script>
import {mapState ,mapGetters} from 'vuex'

export default {
  name: "CountCom",
  data() {
    return {
      n: 1 // 用户选中的数字
    }
  },
  computed: {
    // 借助mapState生成计算属性，从state中读取数据。（对象写法）
    // ...mapState({oSum: 'sum', oName: 'name', oSubject: 'subject'}),

    // 借助mapState生成计算属性，从state中读取数据。（数组写法）
    ...mapState(['sum', 'name', 'subject']),

    // 借助mapGetters生成计算属性，从state中读取数据。（对象写法）
    // ...mapGetters({mGigSum:"bigSum"}),

    // 借助mapGetters生成计算属性，从state中读取数据。（数组写法）
    ...mapGetters(['bigSum'])
  },
  methods: {
    increment() {
      this.$store.commit('JIA', this.n)
    },
    decrement() {
      this.$store.commit('MINUS', this.n)
    },
    incrementOdd() {
      this.$store.dispatch('odd', this.n)
    },
    incrementWait() {
      this.$store.dispatch('wait', this.n)
    },
  }
}
</script>

<style scoped>

</style>
