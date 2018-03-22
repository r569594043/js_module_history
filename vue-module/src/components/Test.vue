<template>
  <div>
    <Counter></Counter>
    <Counter></Counter>
    <Counter></Counter>
  </div>
</template>

<script>
import Counter from './Counter';

export default {
  name: 'Test',
  data() {
    return {
    };
  },
  methods: {
  },
  components: {
    Counter
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
