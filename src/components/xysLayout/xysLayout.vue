<template>
  <div class="xysLayout">
    <xysLayoutLeft ref="xysLayoutLeft" />
    <div class="xysLayout-right">
      <div class="xysLayout-header">
        <div class="header-left">
          <i
            class="el-icon-s-unfold"
            @click="isCollapse = false"
            v-if="isCollapse"
          ></i>
          <i class="el-icon-s-fold" @click="isCollapse = true" v-else></i>

          <el-menu style="border: none" class="el-menu-demo" mode="horizontal">
            <el-menu-item index="1">处理中心</el-menu-item>
            <el-menu-item index="2">消息中心</el-menu-item>
            <el-menu-item index="3">消息中心</el-menu-item>
            <el-menu-item index="4">消息中心</el-menu-item>
            <el-menu-item index="5">消息中心</el-menu-item>
            <el-menu-item index="6">消息中心</el-menu-item>
          </el-menu>
        </div>
        <div class="header-right">
          <el-dropdown>
            <span class="el-dropdown-link">
              简体中文<i class="el-icon-arrow-down el-icon--right"></i>
            </span>
            <el-dropdown-menu slot="dropdown">
              <el-dropdown-item>简体中文</el-dropdown-item>
              <el-dropdown-item>English</el-dropdown-item>
            </el-dropdown-menu>
          </el-dropdown>
          <el-dropdown style="margin: 0 20px">
            <span class="el-dropdown-link">
              张三<i class="el-icon-arrow-down el-icon--right"></i>
            </span>
            <el-dropdown-menu slot="dropdown">
              <el-dropdown-item>个人中心</el-dropdown-item>
              <el-dropdown-item>推出登录</el-dropdown-item>
            </el-dropdown-menu>
          </el-dropdown>
        </div>
      </div>
      <div class="xysLayout-tabsView">
        <xysTabs />
      </div>
      <div class="xysLayout-body">
        <router-view></router-view>
      </div>
      <div class="xysLayout-footer"></div>
    </div>
  </div>
</template>

<script>
import xysLayoutLeft from "./left/index.vue";
import xysTabs from "./tabs.vue";
export default {
  components: {
    xysLayoutLeft,
    xysTabs,
  },
  data() {
    return {
      isCollapse: false,
    };
  },
  watch: {
    isCollapse() {
      this.$refs.xysLayoutLeft.setCollapse(this.isCollapse);
    },
  },
};
</script>

<style lang="less" scoped>
.xysLayout {
  width: 100vw;
  height: 100vh;
  min-width: 1200px;
  display: flex;

  .xysLayout-right {
    flex: 1;
    height: 100vh;
    overflow: hidden;
    background: #f5f5f5;

    .xysLayout-header {
      height: 60px;
      background: #fff;

      display: flex;
      align-items: center;
      justify-content: space-between;
      .header-left {
        padding-left: 12px;
        display: flex;
        justify-content: flex-start;
        align-items: center;
        cursor: pointer;
      }
      .header-right {
        cursor: pointer;
      }

      border-bottom: 1px solid #e4e7ed;
    }

    .xysLayout-tabsView {
      padding: 10px;
      height: 55px;
      overflow: hidden;
      background: #fff;
    }
    .xysLayout-body {
      background: #f5f5f5;
      width: 100%;
      height: calc(100vh - 115px);
      padding: 12px;
    }
  }
}
</style>