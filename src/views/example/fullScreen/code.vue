<template>
  <div>
    <el-button @click="toggleS">
      {{ isFull ? "取消全屏" : "全屏" }}
    </el-button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isFull: false,
    };
  },
  methods: {
    toggleS() {
      let docElm = document.documentElement;
      if (this.isFull) {
        if (document.exitFullscreen) {
          document.exitFullscreen();
        } else if (document.mozCancelFullScreen) {
          document.mozCancelFullScreen();
        } else if (document.webkitCancelFullScreen) {
          document.webkitCancelFullScreen();
        } else if (document.msExitFullscreen) {
          document.msExitFullscreen();
        }
      } else {
        if (docElm.requestFullscreen) {
          docElm.requestFullscreen();
        } else if (docElm.mozRequestFullScreen) {
          docElm.mozRequestFullScreen();
        } else if (docElm.webkitRequestFullScreen) {
          docElm.webkitRequestFullScreen();
        } else if (elem.msRequestFullscreen) {
          elem.msRequestFullscreen();
        }
      }

      this.isFull = !this.isFull;
    },
  },
};
</script>

<style lang="less" scoped>
</style>