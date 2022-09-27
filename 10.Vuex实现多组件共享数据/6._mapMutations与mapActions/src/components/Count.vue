<template>
  <div>
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
    <!--    <button @click="increment">+</button>-->
    <!--    <button @click="decrement">-</button>-->
        <button @click="increment(n)">+</button>
        <button @click="decrement(n)">-</button>
    <!--    <button @click="JIA(n)">+</button>-->
    <!--    <button @click="MINUS(n)">-</button>-->
    <button @click="incrementOdd(n)">当前求和为奇数再加</button>
    <button @click="incrementWait(n)">等一等再加</button>
  </div>
</template>

<script>
import {mapState, mapGetters, mapMutations, mapActions} from 'vuex'

export default {
  name: "CountCom",
  data() {
    return {
      n: 1 // 用户选中的数字
    }
  },
  computed: {

    // 借助mapState生成计算属性，从state中读取数据。（数组写法）
    ...mapState(['sum', 'name', 'subject']),
    // 借助mapGetters生成计算属性，从state中读取数据。（数组写法）
    ...mapGetters(['bigSum']),
  },
  methods: {
    // 程序员亲自写方法
    // increment() {
    //   this.$store.commit('JIA', this.n)
    // },
    // decrement() {
    //   this.$store.commit('MINUS', this.n)
    // },

    //借助mapMutations生成对应的方法，方法中会调用commit去联系mutations （对象写法）
    ...mapMutations({increment: 'JIA', decrement: 'MINUS'}),
    //借助mapMutations生成对应的方法，方法中会调用commit去联系mutations （数组写法）
    // ...mapMutations(['JIA', 'MINUS']),


    // incrementOdd() {
    //   this.$store.dispatch('odd', this.n)
    // },
    // incrementWait() {
    //   this.$store.dispatch('wait', this.n)
    // },

    ...mapActions({incrementOdd: 'odd', incrementWait: 'wait'}),
    // ...mapActions(['odd','wait']),
  }
}
</script>

<style scoped>

</style>
