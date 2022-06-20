<template>
  <div>test2222</div>
</template>

<script>
import request from "@/utils/request.js";
export default {
  mounted() {
    request
      .post("", {})
      .then((res) => {
        console.log("res", res);
      })
      .catch((err) => {
        console.log("err", err);
      })
      .finally(() => {});
  },
};
</script>

<style lang="less" scoped>
</style>