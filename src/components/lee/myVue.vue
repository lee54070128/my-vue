<template>
<el-container>
  <el-header><b>Case编辑器</b></el-header>
  <el-container>
    <el-aside width="200px">
        <el-menu :default-openeds="['1']">
            <el-menu-item index="0">
                <i class="el-icon-menu"></i>
                <span slot="title">主页</span>
            </el-menu-item>
            <el-submenu index="1">
                <template slot="title"><i class="el-icon-message"></i>项目</template>
                <el-submenu index="1-1">
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
            </el-submenu>
            <el-submenu index="2">
                <template slot="title"><i class="el-icon-menu"></i>辅助方法</template>
                <el-submenu index="2-1">
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
                </el-submenu>
            </el-submenu>
            <el-menu-item index="3">
                <i class="el-icon-setting"></i>
                <span slot="title">设置</span>
            </el-menu-item>
        </el-menu>
    </el-aside>
    <el-container>
        <el-main>
          <div id="myvue">欢迎来到{{message}}! </div>
          <router-view></router-view>
        </el-main>
      <el-footer>Footer</el-footer>
    </el-container>
  </el-container>
</el-container>
</template>

<script type="text/javascript">
import 'normalize.css';
    export default {
        name:"myVue",
        data (){
            return {
                message:"myvue页面"
            }
        }
    }
</script>

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
</style>



