<template>
  <div class="layout">
    <Layout style="height:100%">
      <Sider ref="side1" hide-trigger collapsible :collapsed-width="78" v-model="isCollapsed">
        <Menu active-name="1-1" theme="dark" width="auto" :class="menuitemClasses">
          <template v-for="item in introduce">
            <router-link :to="item.path" :key="item.key" v-if="!item.children">
              <MenuItem :name="item.key">
                <Icon :type="item.type"></Icon>
                <span>{{item.name}}</span>
              </MenuItem>
            </router-link>
            <Submenu :name="item.key" v-else :key="item.key">
              <template slot="title">
                <Icon type="ios-filing"/>
                <span>{{item.name}}</span>
              </template>
              <router-link :to="val.path" v-for="val in item.children" :key="val.key">
                <MenuItem :name="val.key">
                  <Icon :type="val.type"></Icon>
                  <span>{{val.name}}</span>
                </MenuItem>
              </router-link>
            </Submenu>
          </template>
        </Menu>
      </Sider>
      <Layout>
        <Header :style="{padding: 0,display:'flex'}" class="layout-header-bar">
          <Icon
            @click.native="collapsedSider"
            :class="rotateIcon"
            :style="{margin: '20px',cursor:'pointer'}"
            type="md-menu"
            size="24"
          ></Icon>
          <h3 class="title">{{title}}</h3>
        </Header>
        <Content :style="{margin: '20px', background: '#fff', minHeight: '260px'}">
          <router-view></router-view>
        </Content>
      </Layout>
    </Layout>
  </div>
</template>
<script>
import introduce from "../../data.js";
import Event from "../../commonApi/bus.js";
export default {
  data() {
    return {
      isCollapsed: true,
      introduce,
      title: introduce[0]["name"]
    };
  },
  mounted() {
    let _self = this;
    Event.$on("changeTitle", function(val) {
      _self.setTitle(val);
    });
  },
  computed: {
    rotateIcon() {
      return ["menu-icon", this.isCollapsed ? "rotate-icon" : ""];
    },
    menuitemClasses() {
      return ["menu-item", this.isCollapsed ? "collapsed-menu" : ""];
    }
  },
  methods: {
    collapsedSider() {
      this.$refs.side1.toggleCollapse();
    },
    //切换标题
    setTitle(val) {
      this.title = val;
    }
  }
};
</script>
<style scoped>
.title {
  display: inline-block;
  width: 100%;
  text-align: center;
}
.layout {
  height: 100%;
  border: 1px solid #d7dde4;
  background: #f5f7f9;
  position: relative;
  border-radius: 4px;
  overflow: hidden;
}
.layout-header-bar {
  background: #fff;
  box-shadow: 0 1px 1px rgba(0, 0, 0, 0.1);
}
.layout-logo-left {
  width: 90%;
  height: 30px;
  background: #5b6270;
  border-radius: 3px;
  margin: 15px auto;
}
.menu-icon {
  transition: all 0.3s;
}
.rotate-icon {
  transform: rotate(-90deg);
}
.menu-item span {
  display: inline-block;
  overflow: hidden;
  width: 69px;
  text-overflow: ellipsis;
  white-space: nowrap;
  vertical-align: bottom;
  transition: width 0.2s ease 0.2s;
}
.menu-item i {
  transform: translateX(0px);
  transition: font-size 0.2s ease, transform 0.2s ease;
  vertical-align: middle;
  font-size: 16px;
}
.collapsed-menu span {
  width: 0px;
  transition: width 0.2s ease;
}
.collapsed-menu i {
  transform: translateX(5px);
  transition: font-size 0.2s ease 0.2s, transform 0.2s ease 0.2s;
  vertical-align: middle;
  font-size: 22px;
}
.ivu-menu-item {
  height: 49px;
}
</style>