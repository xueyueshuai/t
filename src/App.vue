<template>
  <div id="app">
    <!-- <xysLayout /> -->
    <router-view></router-view>
  </div>
</template>


<script>
import xysLayout from "@/components/xysLayout/xysLayout.vue";
export default {
  components: {
    xysLayout,
  },
};
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  background: #f5f5f5;
}
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
</style>


