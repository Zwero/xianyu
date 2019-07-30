<template>
  <div class="header">
    <el-row class="main" type="flex">
      <!-- logo -->
      <div class="logo">
        <nuxt-link to="/air">
          <img src="http://157.122.54.189:9093/images/logo.jpg" alt />
        </nuxt-link>
      </div>
      <!-- 导航 -->
      <el-row type="flex" align="middle" class="nav">
        <nuxt-link to="/">首页</nuxt-link>
        <nuxt-link to="/post">旅游攻略</nuxt-link>
        <nuxt-link to="/hotel">酒店</nuxt-link>
        <nuxt-link to="/air">国内机票</nuxt-link>
      </el-row>
      <!-- 登录 -->
      <el-row type="flex" align="middle" class="login">
        <nuxt-link to="/user/login" class="account-link">登录 / 注册</nuxt-link>
      </el-row>
    </el-row>
  </div>
</template>

<script>
export default {};
</script>

<style lang="less" scoped>
.header {
  border-bottom: 1px #ddd solid;
  box-shadow: 0 3px 0 #f5f5f5;
  .main {
    width: 1000px;
    margin: 0 auto;
    height: 60px;
    line-height: 60px;
    // logo
    .logo {
      a {
        display: block;
        height: 60px;
        width: 156px;
        margin-top: 8px;
        margin-right: 20px;
        img {
          width: 100%;
        }
      }
    }
    // 导航
    .nav {
      flex: 1;
      a {
        padding: 0 20px;
        height: 60px;
        box-sizing: border-box;
        &:hover,
        &:focus,
        &:active {
          border-bottom: 5px #409eff solid;
          color: #409eff;
        }
      }
      /deep/ .nuxt-link-exact-active {
        background: #409eff;
        color: #fff !important;
      }
    }
    // 登录
    .login {
      a {
        &:hover,
        &:focus {
          color: #409eff;
        }
      }
    }
  }
}
</style>
