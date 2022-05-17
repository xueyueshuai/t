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
                  "span",
                  {
                    slot: "title",
                  },
                  [route.name]
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
              [route.name]
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