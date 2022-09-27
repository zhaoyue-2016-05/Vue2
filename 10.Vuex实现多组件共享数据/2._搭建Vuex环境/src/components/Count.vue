<template>
  <div>
    <h1>当前求和为： {{sum}}</h1>
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
export default {
  name: "CountCom",
  data(){
    return {
      sum:0, // 当前的和
      n:1 // 用户选中的数字
    }
  },
  methods:{
    increment(){
      this.sum += this.n
    },
    decrement(){
      this.sum -= this.n
    },
    incrementOdd(){
      if(this.sum % 2) {
        this.sum += this.n
      }
    },
    incrementWait(){
      setTimeout(()=>{
        //函数体
        this.sum += this.n
      },1000)
    },
  }
}
</script>

<style scoped>

</style>
