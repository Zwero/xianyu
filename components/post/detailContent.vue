<template>
  <div class="content">
    <!-- <p v-html="content"></p> -->
    <h1>{{content.title}}</h1>
    <p class="time">
      <!-- <span>攻略: {{content.city.created_at}}</span> -->
      <span>阅读: {{content.watch}}</span>
    </p>
    <!-- 文章内容 -->
    <div v-html="content.content" class="titleContent"></div>

    <!-- 烦的一逼的小图标 -->
    <div class="ioc">
      <el-row type="flex" class="row-bg" justify="center">
        <el-col :span="3" class="cursorico">
          <div class="grid-content bg-purple-light">
            <i class="el-icon-edit"></i>
            <p>评论(100)</p>
          </div>
        </el-col>
        <el-col :span="3" class="cursorico">
          <div class="grid-content bg-purple-light">
            <i class="el-icon-star-off"></i>
            <p>收藏</p>
          </div>
        </el-col>
        <el-col :span="3" class="cursorico">
          <div class="grid-content bg-purple-light">
            <i class="el-icon-share"></i>
            <p>分享</p>
          </div>
        </el-col>
        <el-col :span="3" class="cursorico">
          <div class="grid-content bg-purple-light">
            <i class="el-icon-thumb"></i>
            <p>点赞(42)</p>
          </div>
        </el-col>
      </el-row>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      content: {}
    };
  },
  methods: {
    init() {
      console.log(123);
      let id = this.$route.id;
      console.log("这是你要的ID", id);
      this.$axios({
        url: "posts",
        params: {
          id: 4
        }
      }).then(res => {
        console.log("文章内容", res);
        this.content = res.data.data[0];
        console.log(this.content);
        // console.log(this.content.city.created_at);
      });
    }
  },
  mounted() {
    console.log('开始');
    this.init()
  }
};
</script>


<style lang="less" scoped>
.content {
  h1 {
    padding: 20px 0;
    border-bottom: 1px #dddddd solid;
  }
  .time {
    text-align: right;
    padding: 20px 0;
    color: #999999;
  }
  .titleContent {
    line-height: 1.5;
    /deep/ img {
      max-width: 700px !important;
    }
  }
  .ioc {
    // height: 134px;
    text-align: center;
    padding: 50px 0;
    .cursorico {
      cursor: pointer;
      i {
        font-size: 29px;
        margin-bottom: 7px;
        color: #ffb742;
      }
    }
  }
}
</style>

