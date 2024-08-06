<template>
  <div class="game-intro">
    <h1>You've mastered the theory, let's test your learning in the game!</h1>
    <h2>Three adventurers are lost in the jungle.
      Please help them arrange tasks so that they can have dinner as soon as possible.<br>
      Drag the yellow squares representing the tasks to the long bars representing the adventurers for task scheduling!</h2>
    <h3>
      Remember a special rule:<br>
      When an adventurer can handle more than one task, the smallest numbered task will be done first;<br>
      When more than one adventurer can do a same task, the smallest numbered adventurer handles that task.
    </h3>
  </div>
  <div class="game">
    <iframe :src="gameUrl" style="width: 85vw; height: 90vh;"></iframe>
  </div>

  <div class="game-answer">
    <button class="toggle-button" @click="toggleContent">
      {{ isContentVisible ? 'Hide the answer':'Show me the answer' }}
    </button>
    <div v-if="isContentVisible">
      <p>The correct answer is represented in the following format: <br>
        'Graph: tasks for adventurer 1 || tasks for adventurer 2 || tasks for adventurer 3'.
      </p>
      <br>
      <p>LPT Algorithm<br>
        Graph with baked fish:
        1, 2 || 3, 4 || 6, 5, 7<br>
        Graph with berries:
        5,6 || 4, 7 || 1, 3, 2<br>
        Graph with baked potatoes:
        1, 4, 5 || 3, 2, 7 || 6<br>
        <br>
        HLFET Algorithm<br>
        Graph with baked fish:
        3, 4, 2 || 1,7 || 6, 5<br>
        Graph with berries:
        4, 7, 6 || 5 || 3, 1, 2<br>
        Graph with baked potatoes:
        3, 4, 5 || 1, 2, 7 || 6<br>
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
