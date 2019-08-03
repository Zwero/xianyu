<template>
  <div class="header">
    <el-row class="main" type="flex">
      <!-- logo -->
      <div class="logo">
        <nuxt-link to="/">
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
        <el-dropdown>
          <span class="el-dropdown-link">
            <i class="el-icon-bell el-icon--right"></i>
            消息
            <i class="el-icon-arrow-down el-icon--right"></i>
          </span>
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item>消息</el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>

        <!-- 如果用户存在则展示用户信息，用户数据来自store -->

        <el-dropdown v-if="$store.state.user.userInfo&&$store.state.user.userInfo.token">
          <el-row type="flex" align="middle" class="el-dropdown-link">
            <nuxt-link to="#">
              <img :src="$axios.defaults.baseURL + $store.state.user.userInfo.user.defaultAvatar" />
              {{$store.state.user.userInfo.user.nickname}}
            </nuxt-link>
            <i class="el-icon-caret-bottom el-icon--right"></i>
          </el-row>

          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item>
              <nuxt-link to="#">个人中心</nuxt-link>
            </el-dropdown-item>
            <el-dropdown-item>
              <div @click="handleLogout">退出</div>
            </el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>

        <!-- 没有用户信息注册链接 -->
        <nuxt-link to="/user/login" class="account-link" v-else>登录 / 注册</nuxt-link>
      </el-row>
    </el-row>
  </div>
</template>

<script>
export default {
  methods: {
    // 用户退出
    handleLogout() {
      const { commit } = this.$store;
      commit("user/cleanUserInfo");

      this.$message({
        message: "退出成功",
        type: "success"
      });
    }
  }
};
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
      .el-dropdown {
        cursor: pointer;
        img {
          width: 36px;
          height: 36px;
          vertical-align: middle;
          padding-right: 8px;
        }
        .el-icon-bell {
          font-size: 18px;
        }
      }
      a {
        margin-left: 10px;
        &:hover,
        &:focus {
          color: #409eff;
        }
      }
    }
  }
}
</style>
