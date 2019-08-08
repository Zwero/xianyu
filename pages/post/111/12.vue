<template>
    <div class="detail">
    <el-row type="flex" justify="space-between" class="nav">
      <!-- 面包屑 -->
      <div>
        <el-breadcrumb separator="/" type="flex">
          <el-breadcrumb-item :to="{ path: '/post' }">旅游攻略</el-breadcrumb-item>
          <el-breadcrumb-item>攻略详情页</el-breadcrumb-item>
        </el-breadcrumb>

        <!-- 标题 -->
        <h1>这是标题</h1>
        <div class="comment">
          <div class="textTi">
            <span>攻略:</span>
            <span>阅读:</span>
          </div>
          <el-row type="flex" class="row-bg" justify="space-around">
            <el-col :span="6">
              <div class="grid-content bg-purple">评论</div>
            </el-col>
            <el-col :span="6">
              <div class="grid-content bg-purple-light">收藏</div>
            </el-col>
            <el-col :span="6">
              <div class="grid-content bg-purple">分享</div>
            </el-col>
          </el-row>
        </div>
      </div>

      <!-- 侧边栏相关攻略 -->
      <div class="strategy" type="flex">
        <p>相关攻略</p>
      </div>
    </el-row>

    <!-- 内容 -->
    <div class="details"></div>
    <!-- 评论 -->
    <p v-html="html"></p>
    <!-- 输出：html标签在渲染的时候被解析 -->
  </div>
</template>

<script>
export default {
  data() {
    return {
      html: "" // 结构
    };
  },

  methods: {},
  mounted() {
    // console.log(123);
    // const { id } = this.$ruoter.query
    // console.log(id)
    // this.$axios({
    //   url: `posts`,
    //   params: {
    //     id: 4
    //   }
    // }).then(res => {
    //   console.log(res);
    //   // this.html = res.data
    // });
  }
};
</script>

<style lang="less" scoped>
.detail {
  width: 1000px;
  margin: 0 auto;
  margin-top: 20px;
  .nav {
    h1 {
      padding: 20px;
      font-size: 2em;
      border-bottom: 1px solid #ccc;
      width: 720px;
    }
    .comment {
      .textTi {
        text-align: right;
        margin: 15px;
        span {
          margin: 15px;
          color: #a4a0a3;
        }
      }
    }
    .strategy {
      p {
        border-bottom: 1px solid #ccc;
        padding-bottom: 10px;
        font-size: 18px;
        width: 280px;
      }
    }
  }
}
</style>

