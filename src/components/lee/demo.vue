<template>
<el-container style="height: 500px; border: 1px solid #eee">
    <el-aside width="200px" style="background-color: rgb(238, 241, 246)">
    <el-menu :default-openeds="['1']">
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
    <el-header style="text-align: right; font-size: 12px">
      <el-dropdown>
        <i class="el-icon-setting" style="margin-right: 15px"></i>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item>查看</el-dropdown-item>
          <el-dropdown-item>新增</el-dropdown-item>
          <el-dropdown-item>删除</el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
      <span>王小虎</span>
    </el-header>
    
    <el-main>
      <el-table :data="tableData">
        <el-table-column prop="date" label="日期" width="140">
        </el-table-column>
        <el-table-column prop="name" label="姓名" width="120">
        </el-table-column>
        <el-table-column prop="address" label="地址">
        </el-table-column>
      </el-table>
    </el-main>
  </el-container>
</el-container>
</template>

<style>
  .el-header {
    background-color: #B3C0D1;
    color: #333;
    line-height: 60px;
  }
  
  .el-aside {
    color: #333;
  }
</style>

<script>
  export default {
    data() {
      const item = {
        date: '2016-05-02',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1518 弄'
      };
      return {
        tableData: Array(20).fill(item)
      }
    }
  };
</script>