<template>
  <div class="wrapper">
    <header>
      <ul class="nav">
          <li>
              <img src="./assets/logo.png" width="80" height="80"
                   alt="开发者中心"
                   class="header-logo">
          </li>
        <li>
            <el-menu  default-active="1"  mode="horizontal">
                <el-menu-item index="1"><a  href="#!/user">处理中心</a></el-menu-item>
                <el-menu-item index="2">工作台</el-menu-item>
                <el-menu-item index="3">订单管理</el-menu-item>
            </el-menu>
        </li>
      </ul>
    </header>
    <el-row class="container">
      <el-col :span="2" class="menu">
        <el-menu default-active="1">
          <el-menu-item index="1" >用户管理</el-menu-item>
          <el-menu-item index="2">用户管理</el-menu-item>
          <el-menu-item index="3">用户列表</el-menu-item>
        </el-menu>
      </el-col>
      <el-col :span="21" class="content">
        <el-breadcrumb>
          <el-breadcrumb-item>首页</el-breadcrumb-item>
          <el-breadcrumb-item>角色管理</el-breadcrumb-item>
          <el-breadcrumb-item>系统测试</el-breadcrumb-item>
        </el-breadcrumb>
          <div>
              <router-view
                      class="view"
                      keep-alive
                      transition
                      transition-mode="out-in">
              </router-view>
          </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  data () {
    return {
    }
  }
}
</script>
