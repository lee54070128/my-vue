<template>
<el-container>
  <el-header><b>Case编辑器</b></el-header>
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
                <template slot="title"><i class="el-icon-message"></i>项目</template>
                <!-- <el-submenu index="1-1">
                    <template slot="title">爱奇艺号</template>
                    <el-menu-item-group>
                        <el-menu-item index="1-1-1">首页</el-menu-item>
                        <el-menu-item index="1-1-2">自媒体</el-menu-item>
                        <el-menu-item index="1-1-2">视频</el-menu-item>
                    </el-menu-item-group>
                </el-submenu>
                <el-submenu index="1-2">
                    <template slot="title">文学</template>
                    <el-menu-item-group>
                        <el-menu-item index="1-1-1">首页</el-menu-item>
                        <el-menu-item index="1-1-2">阅读</el-menu-item>
                        <el-menu-item index="1-1-2">支付</el-menu-item>
                    </el-menu-item-group>
                </el-submenu>
                <el-submenu index="1-3">
                    <template slot="title">飞鸽</template>
                    <el-menu-item-group>
                        <el-menu-item index="1-1-1">发送消息</el-menu-item>
                        <el-menu-item index="1-1-2">人群管理</el-menu-item>
                        <el-menu-item index="1-1-2">审批消息</el-menu-item>
                        <el-menu-item index="1-1-2">业务线管理</el-menu-item>
                    </el-menu-item-group>
                </el-submenu>
            </el-submenu> -->
                <el-submenu v-for="(project,index) in this.routers.projects" :key="index" :index="project.index">
                    <template slot="title">
                        <i :class="project.icon"></i>
                        <router-link :to = "{name:'project_page',params:{project:project.projId}}" >
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
                        <i :class="method.icon"></i>
                        <router-link :to = "{name:'method_page',params:{method:method.methId}}" >
                            {{method.name}}
                        </router-link>
                    </template>
                    <el-menu-item-group>
                        <el-menu-item v-for="(suit,index) in method.sons" :key="index" :index="suit.index">
                            <router-link :to = "{name:'m_method_page',params:{method:method.methId,page:suit.pageId}}" >
                                {{suit.name}}
                            </router-link>
                        </el-menu-item>
                    </el-menu-item-group>
                </el-submenu>
            </el-submenu>
                <!-- <el-submenu index="2-1">
                    <template slot="title">公共方法</template>
                    <el-menu-item-group>
                        <el-menu-item index="2-1-1">计算MD5</el-menu-item>
                        <el-menu-item index="2-1-2">排序</el-menu-item>
                        <el-menu-item index="2-1-3">URL编码</el-menu-item>
                    </el-menu-item-group>
                </el-submenu>
                <el-submenu index="2-2">
                    <template slot="title">爱奇艺号</template>
                    <el-menu-item-group>
                        <el-menu-item index="2-1-1">查询ES</el-menu-item>
                        <el-menu-item index="2-1-2">审核视频</el-menu-item>
                        <el-menu-item index="2-1-3">登陆爱奇艺号</el-menu-item>
                    </el-menu-item-group>
                </el-submenu>
                <el-submenu index="2-3">
                    <template slot="title">飞鸽</template>
                    <el-menu-item-group>
                        <el-menu-item index="2-1-1">计算sign</el-menu-item>
                        <el-menu-item index="2-1-2">登陆飞鸽</el-menu-item>
                    </el-menu-item-group>
                </el-submenu> -->
            <!-- </el-submenu> -->
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
      <el-footer>Footer</el-footer>
    </el-container>
  </el-container>
</el-container>
</template>

<script>
const routers ={
    'projects':[
        {
            'index':'2-1',
            "name": "爱奇艺号",
            "path": "/",
            "projId":"iqiyi",
            "icon": "el-icon-menu",
            "key": true,
            "sons": [
                {
                    'index':'2-1-1',
                    "name": "首页",
                    "path": "/",
                    "pageId":"home"
                },
                {
                    'index':'2-1-2',
                    "name": "自媒体",
                    "path": "/",
                    "pageId":"zimeiti"
                },
                {
                    'index':'2-1-3',
                    "name": "视频",
                    "path": "/",
                    "pageId":"video"
                }
            ]
        },
        {
            'index':'2-2',
            "name": "文学",
            "path": "/",
            "projId":"wenxue",
            "icon": "el-icon-menu",
            "key": true,
            "sons": [
                {
                    'index':'2-2-1',
                    "name": "首页",
                    "path": "/",
                    "pageId":"home"
                },
                {
                    'index':'2-2-2',
                    "name": "阅读",
                    "path": "/",
                    "pageId":"yuedu"
                },
                {
                    'index':'2-2-3',
                    "name": "支付",
                    "path": "/",
                    "pageId":"pay"
                }
            ]
        },
        {
            'index':'2-3',
            "name": "飞鸽",
            "path": "/",
            "projId":"feige",
            "icon": "el-icon-menu",
            "key": true,
            "sons": [
                {
                    'index':'2-3-1',
                    "name": "发送消息",
                    "path": "/",
                    "pageId":"send_notice"
                },
                {
                    'index':'2-3-2',
                    "name": "人群管理",
                    "path": "/",
                    "pageId":"people"
                },
                {
                    'index':'2-3-3',
                    "name": "审批消息",
                    "path": "/",
                    "pageId":"shenpi"
                },
                {
                    'index':'2-3-4',
                    "name": "业务线管理",
                    "path": "/",
                    "pageId":"biz_line"
                }
            ]
        }
    ],
    'methods':[
        {
            'index':'3-1',
            "name": "公共方法",
            "path": "/",
            "methId":"public",
            "icon": "el-icon-menu",
            "key": true,
            "sons": [
                {
                    'index':'3-1-1',
                    "name": "字符串管理",
                    "pageId":"biz_line"
                },
                {
                    'index':'3-1-2',
                    "name": "数据库操作",
                    "pageId":"biz_line"
                },
                {
                    'index':'3-1-3',
                    "name": "网络请求",
                    "pageId":"biz_line"
                }
            ]
        },
        {
            'index':'3-2',
            "name": "爱奇艺号",
            "path": "/",
            "methId":"iqiyi",
            "icon": "el-icon-menu",
            "key": true,
            "sons": [
                {
                    'index':'3-2-1',
                    "name": "ES管理",
                    "pageId":"es"
                },
                {
                    'index':'3-2-2',
                    "name": "日志操作",
                    "pageId":"log"
                },
                {
                    'index':'3-2-3',
                    "name": "登陆",
                    "pageId":"login"
                }
            ]
        },{
            'index':'3-3',
            "name": "飞鸽",
            "path": "/",
            "methId":"feige",
            "icon": "el-icon-menu",
            "key": true,
            "sons": [
                {
                    'index':'3-3-1',
                    "name": "对外API",
                    "pageId":"api"
                },
                {
                    'index':'3-3-2',
                    "name": "登陆飞鸽",
                    "pageId":"login"
                }
            ]
        }
    ]
}
export default {
  name: 'Home',
//   routers:routers,
  data () {
    return {
        "routers":routers
    }
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
</style>

