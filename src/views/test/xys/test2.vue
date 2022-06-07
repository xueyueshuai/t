<template>
  <div>
    <h2>xys-test2</h2>

      <el-avatar :size="100" :src="'http://111.63.208.196:8004/files/0000000000/2022-06-06/5eabe7ead6ed4e93b1f78853f61d3f3e.jpg'">
          <img :src="defaultEmptyAvatar" />
        </el-avatar>
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