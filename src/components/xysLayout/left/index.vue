<template>
  <div class="xysLayout-left" :class="[isCollapse ? 'isSmall' : '']">
    <div class="xysLayout-left-logo" v-if="isCollapse">Xys</div>
    <div class="xysLayout-left-logo" v-else>xysLayout</div>
    <div class="xysMenu">
      <treeMenu :tree="menuData" :isCollapse="isCollapse" />
    </div>
  </div>
</template>

<script>
import treeMenu from "./treeMenu.js";
import routesFromLocal from "../../../router/routesFromLocal";

export default {
  components: { treeMenu },
  data() {
    return {
      isCollapse: false,
      menuData: routesFromLocal,
    };
  },
  methods: {
    setCollapse(v) {
      this.isCollapse = v;
    },
  },
};
</script>


<style lang="less" scoped>
.xysLayout-left {
  width: 200px;
  height: 100vh;
  overflow: auto;

  transition: width .5s; /*transition: all 2s*/
  &.isSmall {
    width: 66px;
  }
  .xysLayout-left-logo {
    height: 60px;
    background: #293c55;
    color: #fff;

    font-size: 20px;

    display: flex;
    justify-content: center;
    align-items: center;
  }
  .xysMenu {
    background: #293c55;
    height: calc(100vh - 60px);
    overflow: auto;
    /deep/ .el-menu {
      border: none;
    }
    /deep/ .el-menu-item.is-active {
      background: #e43c59 !important;
      color: #fff !important;
    }
  }
}
</style>