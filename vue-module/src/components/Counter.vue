<template>
  <div>
    {{ counter }}
    <button @click="add">+</button>
    <button @click="sub">-</button>
  </div>
</template>

<script>
export default {
  name: 'Counter',
  data() {
    return {
      'counter': 1,
    };
  },
  methods: {
    add() {
      this.counter++;
    },
    sub() {
      this.counter--;
    },
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
