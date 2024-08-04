<script setup>

</script>

<template>
  <div class="menu-container">
    <h1>What algorithm would you like to learn today?</h1>
    <button class="btn-menu" @click="goToLPT">
      Longest Processing Time First (LPT)<br>
      Tasks with the longest processing time first.
    </button>
    <button class="btn-menu" @click="goToHLFET">
      Highest Level First with Estimated Times (HLFET)<br>
      The task with the highest level first.
    </button>
    <div class="btn-container">
      <button class="btn-start" @click="goToHome"><h2>Back to Home</h2></button>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    goToHome() {
      this.$router.push({ name: 'Home' });
    },
    goToLPT() {
      this.$router.push({ name: 'Lpt' });
    },
    goToHLFET() {
      this.$router.push({ name: 'Hlfet' });
    },
  }
};
</script>
<style scoped>
</style>