<template>
  <div class="game-intro">
    <h1>You've mastered the theory, let's test your learning in the game!</h1>
    <h2>Three adventurers are lost in the jungle.
      Please help them arrange tasks so that they can have dinner as soon as possible.</h2>
    <h3>
      Remember a special rule:<br>
      when one processor can schedule more than one task,
      the task with the smallest number is selected for scheduling;<br>
      when more than one processor can schedule the same task,
      the task is scheduled by the processor with the smallest number.
    </h3>
  </div>
  <div class="game">
    <iframe :src="gameUrl" style="width: 85vw; height: 90vh;"></iframe>
  </div>
  <div class="btn-container">
    <button class="btn-back" @click="goToHome"><h2>Back to Home</h2></button>
  </div>
</template>

<script>
export default {
  methods: {
    goToHome() {
      this.$router.push({ name: 'Home' });
    },
  },
  data() {
    return {
      gameUrl: '/gdevelop-game/index.html'
    };
  }
};
</script>

<style>
#app {
  flex-direction: column;
  margin-left: 0;
  margin-right: 0;
  align-content: center;
}
</style>
