<template>
  <el-tabs type="card">
    <el-tab-pane label="效果" name="first">
      <demoCode />
    </el-tab-pane>
    <el-tab-pane label="代码" name="second">
      <pre
       style="height:500px;overflow:auto"
        v-highlight
      >{{ code }}</pre>
    </el-tab-pane>
  </el-tabs>
</template>

<script>
import demoCode from "./code.vue";
export default {
  components: {
    demoCode,
  },
  data() {
    return {
        code:require("!../../vueSourceLoader.js!./code.vue").default
    };
  },
};
</script>

<style lang="less" scoped>
</style>