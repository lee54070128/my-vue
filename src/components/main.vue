<template>
<el-container>
  <el-header><b>接口Case管理器</b></el-header>
  <el-container>
    <el-aside width="200px">
        <el-menu :default-openeds="['2']">
            <el-menu-item index="1">
                <i class="el-icon-menu"></i>
                <span slot="title">
                  <router-link to = "/" >
                    主页
                  </router-link>
                </span>
            </el-menu-item>
            <el-submenu index="2">
                <template slot="title"><i class="el-icon-message"></i>
                项目
                <i class="el-icon-plus s_add_project"></i>
                <!-- <el-button icon="el-icon-plus" size="mini" plain circle></el-button> -->
                </template>
                <el-submenu v-for="(project,index) in this.routers.projects" :key="index" :index="project.index">
                    <template slot="title">
                        <router-link :to = "{name:'project_page',params:{project:project.projId}}" >
                            <i class="el-icon-menu"></i>
                            {{project.name}}
                        </router-link>
                    </template>
                    <el-menu-item-group>
                        <el-menu-item v-for="(suit,index) in project.sons" :key="index" :index="suit.index">
                            <router-link :to = "{name:'p_suit_page',params:{project:project.projId,page:suit.pageId}}" >
                                {{suit.name}}
                            </router-link>
                        </el-menu-item>
                    </el-menu-item-group>
                </el-submenu>
            </el-submenu>
            <el-submenu index="3">
                <template slot="title"><i class="el-icon-menu"></i>辅助方法</template>
                <el-submenu v-for="(method,index) in this.routers.methods" :key="index" :index="method.index">
                    <template slot="title">
                        <i class="el-icon-menu"></i>
                        <router-link :to = "{name:'method_page',params:{method:method.suitId}}" >
                            {{method.name}}
                        </router-link>
                    </template>
                    <el-menu-item-group>
                        <el-menu-item v-for="(suit,index) in method.sons" :key="index" :index="suit.index">
                            <router-link :to = "{name:'m_method_page',params:{method:method.suitId,page:suit.pageId}}" >
                                {{suit.name}}
                            </router-link>
                        </el-menu-item>
                    </el-menu-item-group>
                </el-submenu>
            </el-submenu>
            <el-menu-item index="4">
                <i class="el-icon-setting"></i>
                <span slot="title">
                    <router-link to = "/setting" >
                        设置
                    </router-link>
                </span>
            </el-menu-item>
        </el-menu>
    </el-aside>
    <el-container>
        <el-main>
          <router-view></router-view>
        </el-main>
      <el-footer></el-footer>
    </el-container>
  </el-container>
</el-container>
</template>

<script>
import API from '../api/api_common' 

export default {
  name: 'Home',
//   routers:routers,
    data:function(){
        console.log("初始化main...")
        return {
            routers:{}
        }
    },
        
    beforeCreate:function(){
        console.log("请求侧边栏信息...")
        let that = this;
        API.getNavConf({}).then(function(result){
            if (result && parseInt(result.code) == 1000) {
                that.routers=result.data
                // that.routers=JSON.parse(result.data)
            }else{
                that.$message.error({showClose: true,message: '侧边栏配置获取异常！', duration: 2000});
            }
        },function(err){
            that.$message.error({showClose: true,message: '接口请求失败！', duration: 2000});
        }).catch(function(error){
            console.log(error);
          that.$message.error({showClose: true, message: '接口请求异常', duration: 2000});
        });
    },
    methods:{

    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style type="text/css">
 .el-header {
    background-color: rgb(34, 138, 14);
    color: rgb(243, 242, 242);
    text-align: left;
    line-height: 60px;
  }
  
  .el-aside {
    background-color: rgb(250, 250, 250);
    color: #333;
    text-align: left;
    line-height: 200px;
    float: left;
  }
  
  .el-main{
    background-color: rgb(242, 244, 247);
    color: #333;
    text-align: center;
    line-height: 160px;
  }
  .el-footer{
    background-color: rgb(239, 241, 243);
    color: #333;
    text-align: center;
    line-height: 60px;
  }
  
  body > .el-container {
    margin-bottom: 40px;
  }
  
  /* .el-container:nth-child(5) .el-aside,
  .el-container:nth-child(6) .el-aside {
    line-height: 260px;
  }
  
  .el-container:nth-child(7) .el-aside {
    line-height: 320px;
  } */
    #myvue{
        color: green;
        font-size: 28px;
    }
    a {
        text-decoration-line: none
    }
    .s_add_project{
        float: right;
        vertical-align: middle;
        padding: 20px;

    }
</style>

