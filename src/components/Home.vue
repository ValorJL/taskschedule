<script setup>

</script>

<template>
  <div class="home">
    <div class="container">
      <h1>Why learn task scheduling algorithms?</h1>
      <h2>Learning about task scheduling algorithms can help us understand how to effectively allocate and manage resources to improve system efficiency and performance.</h2>
      <h1><br></h1>
      <h1>What you can gain from this website?</h1>
      <h2>This website provides a gamified learning environment in teaching task scheduling algorithms.<br><br>After learning the theory, please try to test your learning in the game! :) </h2>
    </div>
    <div class="btn-container">
      <button class="btn-start" @click="goToMenu"><h2>Let's start here!</h2></button>
    </div>
  </div>

</template>

<script>
export default {
  methods: {
    goToMenu() {
      this.$router.push({ name: 'Menu' });
    },
  },
  name: 'Home'
}
</script>


<style scoped>
</style>