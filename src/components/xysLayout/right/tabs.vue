<template>
  <div>
    <el-tabs
      closable
      v-model="active"
      @contextmenu.prevent.native="openContextMenu($event)"
      type="card"
      @tab-remove="removeTab"
      @tab-click="tabClick"
    >
      <el-tab-pane
        class="isActive"
        v-for="item in tabList"
        :key="item.name"
        :label="item.name"
        :name="item.path"
      >
      </el-tab-pane>
    </el-tabs>

    <!-- 右键菜单 -->
    <ul
      v-show="contextMenu.isShow"
      :style="{ left: contextMenu.menuLeft + 'px', top: '100px' }"
      class="el-dropdown-menu el-popper"
      x-placement="bottom-end"
    >
      <li class="el-dropdown-menu__item" @click="closeRightTag">关闭右侧</li>
      <li class="el-dropdown-menu__item" @click="closeLeftTag">关闭左侧</li>
      <li class="el-dropdown-menu__item" @click="closeOtherTag">关闭其它</li>
      <li
        v-if="this.active == this.contextMenu.name"
        class="el-dropdown-menu__item"
        @click="refresh"
      >
        刷新页面
      </li>
      <div x-arrow="" class="popper__arrow" style="left: 44px"></div>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      active: "",
      tabList: [],
      // 右键的元素
      contextMenu: {
        name: "",
        menuLeft: 0,
        isShow: false,
        label: "",
      },
    };
  },
  watch: {
    $route() {
      this.whenRouteChange();
    },
  },
  created() {},
  mounted() {
    var that = this;
    document.addEventListener("click", function (e) {
      that.contextMenu.isShow = false;
    });
  },
  methods: {
    whenRouteChange() {
      let currentPgae = this.$route;
      let index = this.tabList.findIndex((tag) => tag.path == currentPgae.path);
      if (index === -1) {
        this.tabList.push({
          name:
            (currentPgae.meta && currentPgae.meta.title) || currentPgae.name,
          path: currentPgae.path,
        });
      }
      // 当前选择页
      this.active = currentPgae.path;
    },

    // 点击
    tabClick(tab) {
      console.log(tab);
      this.$router.push(tab.name);
      this.active = tab.name;
    },
    // 移除
    removeTab(targetPath) {
      let tabs = this.tabList;
      if (tabs.length <= 1) {
        this.$message.warning("这是最后一页, 不能在关闭了");
      } else {
        let activePath = this.active;
        if (activePath === targetPath) {
          tabs.forEach((tab, index) => {
            if (tab.path === targetPath) {
              let nextTab = tabs[index + 1] || tabs[index - 1];
              if (nextTab) {
                activePath = nextTab.path;
              }
            }
          });
        }
        this.active = activePath;
        this.$router.push(activePath);
        this.tabList = tabs.filter((tab) => tab.path !== targetPath);
      }
    },
    // 右键
    openContextMenu(e) {
      console.log(e);
      if (e.srcElement.id) {
        this.contextMenu.name = e.srcElement.id.substr(4);
        this.contextMenu.menuLeft = e.clientX - 45;
        this.contextMenu.isShow = true;
        this.contextMenu.label = e.srcElement.innerText;
      }
    },

    // 刷新
    refresh() {
      this.$router.go(0);
    },
    // 关闭右侧
    closeRightTag() {
      let currentPath = this.contextMenu.name,
        index = this.tabList.findIndex((tag) => tag.path == currentPath);
      this.tabList.splice(index + 1, this.tabList.length - index);
      this.active = currentPath;
      this.$router.push(currentPath);
    },
    // 关闭左侧
    closeLeftTag() {
      let currentPath = this.contextMenu.name,
        index = this.tabList.findIndex((tag) => tag.path == currentPath);
      this.tabList.splice(0, index);
      this.active = currentPath;
      this.$router.push(currentPath);
    },
    // 关闭其它
    closeOtherTag() {
      let currentPath = this.contextMenu.name,
        currentName = this.contextMenu.label;
      this.tabList = [
        {
          name: currentName,
          path: currentPath,
        },
      ];
      this.active = currentPath;
      this.$router.push(currentPath);
    },
  },
};
</script>

<style lang="less" scoped>
</style>

