// 菜单组件
import router from '@/router/index.js'
const treeMenu = {
  props: {
    tree: {
      type: Array,
      default() {
        return [];
      },
    },
    isCollapse: {
      type: Boolean,
      default: false
    },
    defaultActive: {
      type: String,
      default: "home",
    },
  },
  methods: {
    elements(tree, r) {
      return tree
        .map((route) => {
          if (route.children && route.children.length) {
            return r(
              "el-submenu",
              {
                props: {
                  index: route.path,
                },
              },
              [
                r(
                  "template",
                  {
                    slot: "title",
                  },
                  [
                    <i class="el-icon-location"></i>,
                    <span slot="title">{route.name}</span>
                  ]
                ),
                this.elements(route.children, r),
              ]
            );
          } else if (route.name) {
            return r(
              "el-menu-item",
              {
                props: {
                  index: route.path,
                },
              },
              [
                route.icon ? <i class="el-icon-menu"></i> : null,
                <span slot="title">{route.name}</span>
              ]
            );
          } else {
            return null;
          }
        })
        .filter((item) => item);
    },
    onSelect(index) {
      this.go(index)
    },

    go(path) {
      router.push(path);
    },
  },
  render(r) {
    return r(
      "el-menu",
      {
        props: {
          backgroundColor: "#293c55",
          textColor: "#fff",
          activeTextColor: "#fff",
          defaultActive: this.defaultActive,
          collapse: this.isCollapse
        },
        on: {
          select: this.onSelect,
        },
      },
      this.elements(this.tree, r)
    );
  },
};

export default treeMenu