<template>
  <exampleView :code="code">
    <demoCode slot="component" />
  </exampleView>
</template>

<script>
import demoCode from "./code.vue";
let code = require("!../../vueSourceLoader.js!./code.vue").default;
export default {
  components: {
    demoCode,
  },
  data() {
    return {
      code: code,
    };
  },
};
</script>

<style lang="less" scoped>
</style>