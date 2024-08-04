<script setup>
import GameView from "@/components/GameView.vue";
</script>

<template>
  <div class="algorithm-intro">
    <h1>LPT Algorithm(Longest Processing Time First)</h1>
    <h2>Longest Processing Time First Algorithm is a greedy algorithm for scheduling. <br></h2>
    <h1><br></h1>
    <h1>Steps</h1>
    <h2>1. Tasks are sorted in descending order according to the time taken by them.<br>
      2. Tasks that take longer time are scheduled first.</h2>
    <h1><br></h1>
    <h1>Example</h1>
    <div class="img-container">
      <img src="@/assets/example.png" alt="example" >
    </div>
    <h2>In this example, Task1 will be scheduled first because it has no pretask. <br>
      Then, Task2 will be scheduled, because its pretask have already been completed. <br>
      After Task2 is completed, both Task3 and Task4 can be scheduled. <br>
      At this point we schedule Task4 first, because it takes longer to execute.</h2>
    <h1><br></h1>
    <h2>Final sorting results:</h2>
    <h2>Task1 → Task2 → Task4 →Task3</h2>
    <div class="btn-container">
      <button class="btn-start" @click="goToMenu"><h2>Return to menu</h2></button>
      <button class="btn-start"@click="goToGame"><h2>Try the game</h2></button>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    goToMenu() {
      this.$router.push({ name: 'Menu' });
    },
    goToGame() {
      this.$router.push({ name: 'Game' });
    }
  }
}
</script>

<style scoped>
</style>
