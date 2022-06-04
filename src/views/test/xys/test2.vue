<template>
  <div>
    <h2>xys-test2</h2>

    <el-button @click="onTest">onTest</el-button>
  </div>
</template>

<script>
import xueyueshuaitestpublish from "xueyueshuaitestpublish";
import "xueyueshuaitestpublish/style.css";
export default {
  data() {
    return {
      i: 0,
    };
  },
  methods: {
    onTest() {
      // xueyueshuaitestpublish.Alert.show()
      xueyueshuaitestpublish.Toast.show("我就" + this.i++, "error", 3000);
    },
  },
};
</script>


<style lang="less" scoped>
</style>