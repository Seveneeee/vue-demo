<template>
    <div class="layout">
        <Layout style="height:100%">
            <Sider ref="side1" hide-trigger collapsible :collapsed-width="78" v-model="isCollapsed">
                <Menu active-name="1-1" theme="dark" width="auto" :class="menuitemClasses" @on-select="changeTitle">
                     <router-link v-for="item in introduce" :to="item.path">   
                     <MenuItem   :name='item.key'>
                        <Icon :type="item.type"></Icon>
                        <span>{{item.name}}</span>
                    </MenuItem>
                    </router-link>
                </Menu>
            </Sider>
            <Layout>
                <Header :style="{padding: 0,display:'flex'}" class="layout-header-bar">
                    <Icon @click.native="collapsedSider" :class="rotateIcon" :style="{margin: '20px',cursor:'pointer'}" type="md-menu" size="24"></Icon>
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
import  introduce from '../../data.js'
    export default {
        data () {
            return {
                isCollapsed: true,
                introduce,
                title:introduce[0]["name"]
            }
        },
        mounted() {
        },
        computed: {
            rotateIcon () {
                return [
                    'menu-icon',
                    this.isCollapsed ? 'rotate-icon' : ''
                ];
            },
            menuitemClasses () {
                return [
                    'menu-item',
                    this.isCollapsed ? 'collapsed-menu' : ''
                ]
            }
        },
        methods: {
            collapsedSider () {
                this.$refs.side1.toggleCollapse();
            },
            //切换标题
            changeTitle(to) {
                    for(let item of this.introduce){
                    if(item.path == to.name) {
                        this.title = item.name;
                        console.log(this.title)
                        break;
                        }
                }
            }
        },
        beforeRouteUpdate (to){
            this.changeTitle(to)
            console.log(to)
        }
    }
</script>
<style scoped>
    .title{
        display:inline-block;
        width:100%;
        text-align:center;
    }
    .layout{
        height:100%;
        border: 1px solid #d7dde4;
        background: #f5f7f9;
        position: relative;
        border-radius: 4px;
        overflow: hidden;
    }
    .layout-header-bar{
        background: #fff;
        box-shadow: 0 1px 1px rgba(0,0,0,.1);
    }
    .layout-logo-left{
        width: 90%;
        height: 30px;
        background: #5b6270;
        border-radius: 3px;
        margin: 15px auto;
    }
    .menu-icon{
        transition: all .3s;
    }
    .rotate-icon{
        transform: rotate(-90deg);
    }
    .menu-item span{
        display: inline-block;
        overflow: hidden;
        width: 69px;
        text-overflow: ellipsis;
        white-space: nowrap;
        vertical-align: bottom;
        transition: width .2s ease .2s;
    }
    .menu-item i{
        transform: translateX(0px);
        transition: font-size .2s ease, transform .2s ease;
        vertical-align: middle;
        font-size: 16px;
    }
    .collapsed-menu span{
        width: 0px;
        transition: width .2s ease;
    }
    .collapsed-menu i{
        transform: translateX(5px);
        transition: font-size .2s ease .2s, transform .2s ease .2s;
        vertical-align: middle;
        font-size: 22px;
    }
    .ivu-menu-item{
        height:49px;
    }
</style>