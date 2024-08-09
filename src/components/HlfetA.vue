<script setup>
import GameView from "@/components/GameView.vue";
</script>

<template>
  <div class="algorithm-intro">
    <h1>HLFET Algorithm(Highest Level First with Estimated Times)</h1>
    <h2>The HLFET algorithm is a task hierarchy based scheduling algorithm. <br>
      Priority is given to scheduling the task with the highest hierarchy, <br>
      i.e., the task closest to the root node. </h2>
    <h1><br></h1>
    <h1>Steps</h1>
    <h2>1. Calculate the SL(Static levels) of tasks.<br>
      2. Sort the tasks in descending order according to their SL.<br>
      3. If two tasks have the same SL, schedule the task with shorter time first.<br>
      4. Schedule the tasks to the earliest available processor in the sorted order.</h2>
    <h1><br></h1>
    <h1>SL calculation approach</h1>
    <h2>1. For each task in the graph that has no dependency on any subsequent task, we call it an endpoint node. The SL of each endpoint node is 0.<br>
      2. Traverse forward from the endpoint node and compute the SL for each task. <br>
      the SL of each task is equal to the largest SL of all its successor tasks plus the time taken by this task itself.</h2>
    <h1><br></h1>
    <h1>Example</h1>
    <div class="img-container">
      <img src="../assets/example.png" alt="example" >
    </div>
    <h2>We first calculate the SL of these 4 tasks.<br>
      task 3 and task4 have no subsequent tasks, so task3.SL = 10, task4.SL = 15.<br>
      task2.SL = max(task3.SL, task4.SL) + task2.time = 20.<br>
      task1.SL = task2.SL + task1.time = 30.<br>
    </h2>
    <h1><br></h1>
    <h2>Final sorting results:</h2>
    <h2>Task1 → Task2 → Task4 →Task3 Or Task1 → Task2 → Task3 →Task4</h2>
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
