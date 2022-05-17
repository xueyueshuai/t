<template>
  <div class="exampleView">
    <el-divider>
      <span>效果</span>
      &nbsp;
      <el-button size="small" type="text" @click="showXiaoguo = !showXiaoguo">
        {{ showXiaoguo ? "隐藏" : "显示" }}
      </el-button>
    </el-divider>
    <br>

    <transition name="fade">
      <div v-show="showXiaoguo">
        <slot name="component"></slot>
      </div>
    </transition>

    <br>
    <el-divider>
      <span>code</span>
      &nbsp;
      <el-button size="small" type="text" @click="showCode = !showCode">
        {{ showCode ? "隐藏" : "显示" }}
      </el-button>

      <el-button size="small" type="text" @click="copy"> copy </el-button>
    </el-divider>

    <transition name="fade">
      <div v-show="showCode">
        <pre v-highlight>{{ code }}</pre>
      </div>
    </transition>
  </div>
</template>

<script>
import copyToClipboard from "copy-to-clipboard";

export default {
  props: {
    code: {
      type: String,
      default: "",
    },
  },
  data() {
    return {
      showXiaoguo: true,
      showCode: false,
    };
  },
  methods: {
    copy() {
      try {
        copyToClipboard(this.code);
        this.$message.success("复制成功");
      } catch (error) {
        this.$message.warning("复制失败");
      }
    },
  },
};
</script>

<style lang="less" scoped>
.exampleView {
  width: 800px;
  border: 1px solid #cecece;
  margin: 20px auto;
  padding: 20px;

  border-radius: 4px;
  border: 1px solid #ebeef5;
  background-color: #fff;
  color: #303133;
  transition: 0.3s;
  box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 10%);
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
</style>