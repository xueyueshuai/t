<template>
  <div>
    <transition name="el-zoom-in-top">
      <div v-if="show">aaa</div>
    </transition>

    <el-button @click="toggleS">toggle</el-button>
  </div>
</template>

<script>
export default {
  name: "Home",
  components: {},
  data() {
    return {
      show: true,
    };
  },
  mounted() {},
  methods: {
    toggleS() {
      this.show = !this.show;
    },
  },
};
</script>
