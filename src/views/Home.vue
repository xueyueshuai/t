<template>
  <div>
    
    这是测试test
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
