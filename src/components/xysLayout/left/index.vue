<template>
  <div class="xysLayout-left" :class="[isCollapse ? 'isSmall' : '']">
    <div class="xysLayout-left-logo" v-if="isCollapse">Xys</div>
    <div class="xysLayout-left-logo" v-else>xysLayout</div>
    <div class="xysMenu">
      <treeMenu :tree="menuData" />
      <!-- <el-menu
        default-active="/test"
        router
        background-color="#293c55"
        text-color="#ffffff"
        :collapse="isCollapse"
      >
        <el-menu-item index="/">
          <i class="el-icon-menu"></i>
          <span slot="title">aaa</span>
        </el-menu-item>
        <el-menu-item :index="'/about' + i" v-for="i in 100" :key="i">
          <i class="el-icon-menu"></i>
          <span slot="title">{{ i }}</span>
        </el-menu-item>
        <el-menu-item index="/ccc">
          <i class="el-icon-menu"></i>
          <span slot="title">ccc</span>
        </el-menu-item>
      </el-menu> -->
    </div>
  </div>
</template>

<script>
import treeMenu from "./treeMenu.js";
export default {
  components: { treeMenu },
  data() {
    return {
      isCollapse: false,
      menuData: [
        { name: "about1", path: "/about1" },
        { name: "about2", path: "/about2" },
      ],
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