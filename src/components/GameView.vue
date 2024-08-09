<template>
  <div class="game-intro">
    <h1>You've mastered the theory, let's test your learning in the game!</h1>
    <h2>Three adventurers are lost in the jungle.
      Please help them arrange tasks so that they can have dinner as soon as possible.<br>
      Drag the yellow squares representing the tasks to the long bars representing the adventurers for task scheduling.<br>
      The length of the bar that a task becomes after it is dragged onto an adventurer's task list is positively correlated to the time required for that task.<br><br>
      Arrows between tasks represent dependencies. The arrows point from pretask to posttask.<br>
      For example, you need to start a fire before you grill the fish.<br><br>
      If you think your task scheduling follows the logic of the algorithm, click the check button to verify it!<br><br>
      Remember a special rule:<br>
      When an adventurer can handle more than one task, the smallest numbered task will be done first;<br>
      When more than one adventurer can do a same task, the smallest numbered adventurer handles that task.<br><br>
      You don't need to log in. You can turn off the login reminder by clicking the fork on the right.
    </h2>
  </div>
  <div class="game">
    <iframe :src="gameUrl" style="width: 85vw; height: 90vh;"></iframe>
  </div>

  <div class="game-answer">
    <button class="toggle-button" @click="toggleContent">
      {{ isContentVisible ? 'Hide the answer':'Show me the answer' }}
    </button>
    <div v-if="isContentVisible">
      <br>
      <p>LPT Algorithm<br>
        Graph with baked fishes:<br>
        Task 1 → Adventurer 1,
        Task 3 → Adventurer 2,
        Task 6 → Adventurer 3,
        Task 5 → Adventurer 3,
        Task 4 → Adventurer 2,
        Task 2 → Adventurer 1,
        Task 7 → Adventurer 2.
        <br>
        Graph with picked berries:<br>
        Task 5 → Adventurer 1,
        Task 4 → Adventurer 2,
        Task 1 → Adventurer 3,
        Task 3 → Adventurer 3,
        Task 7 → Adventurer 2,
        Task 2 → Adventurer 3,
        Task 6 → Adventurer 1.
        <br>
        Graph with roasted potatoes:<br>
        Task 3 → Adventurer 1,
        Task 1 → Adventurer 2,
        Task 6 → Adventurer 3,
        Task 3 → Adventurer 3,
        Task 7 → Adventurer 2,
        Task 2 → Adventurer 3,
        Task 6 → Adventurer 1.
        <br>
        <br>
        HLFET Algorithm<br>
        Graph with baked fishes:<br>
        Task 3 → Adventurer 1,
        Task 1 → Adventurer 2,
        Task 6 → Adventurer 3,
        Task 5 → Adventurer 3,
        Task 4 → Adventurer 1,
        Task 2 → Adventurer 1,
        Task 7 → Adventurer 2.
        <br>
        Graph with picked berries:<br>
        Task 4 → Adventurer 1,
        Task 5 → Adventurer 2,
        Task 3 → Adventurer 3,
        Task 1 → Adventurer 3,
        Task 7 → Adventurer 1,
        Task 2 → Adventurer 3,
        Task 6 → Adventurer 1.
        <br>
        Graph with roasted potatoes:<br>
        Task 3 → Adventurer 1,
        Task 1 → Adventurer 2,
        Task 6 → Adventurer 3,
        Task 2 → Adventurer 2,
        Task 4 → Adventurer 1,
        Task 5 → Adventurer 1,
        Task 7 → Adventurer 2.
        <br>
      </p>
    </div>
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
    toggleContent() {
      this.isContentVisible = !this.isContentVisible;
    }
  },
  data() {
    return {
      gameUrl: '/gdevelop-game/index.html',
      isContentVisible: false
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
