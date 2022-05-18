<template>
  <div>
    <el-button @click="onCopy"> 将 "abc" 复制到剪贴板 </el-button>
  </div>
</template>

<script>
import copyToClipboard from "copy-to-clipboard";
export default {
  data() {
    return {
      isFull: false,
    };
  },
  methods: {
    onCopy() {
      let str = "abc";
      try {
        copyToClipboard(str);
        this.$message.success("复制成功");
      } catch (error) {
        this.$message.warning("复制失败");
      }
    },
  },
};
</script>

<style lang="less" scoped>
</style>