<template>
  <div class="titleListRight">
    <h3>相关攻略</h3>

    <el-row
      type="flex"
      class="row-bg titleBox"
      v-for="(item,index) in titleList"
      :key="index"
      @click.native="skipDetail(item.id)"
    >
      <img :src="item.images[0]" />
      <div>
        <p class="titleName">{{item.title}}</p>
        <p class="text">
          <span>{{item.created_at | timeFormat}}</span>
          <span>阅读: {{item.watch}}</span>
        </p>
      </div>
    </el-row>
  </div>
</template>

<script>
import moment from "moment";
export default {
  data() {
    return {
      titleList: [],
      time: 0
    };
  },

  // 过滤毫秒转换格式
  filters: {
    // 日期格式
    timeFormat(value) {
      return moment(value).format("YYYY-MM-DD HH:mm:ss");
    }
  },
  methods: {
	// 文章跳转
    skipDetail(id) {
      this.$router.push({
        url: "/post/detail",
        query: {
          id
        }
      });
    },

  // 数据初始
    init() {
      // 获取数据
    const id = this.$route.query.id;
    // console.log('8848');
	  // console.log('相关攻略id',id);
      this.$axios({
        url: "/posts/recommend",
        params: {
          id
        }
      }).then(res => {
        // console.log(res);
        this.titleList = res.data.data;
        // console.log(this.titleList);
        // console.log('重新加载');
      });
    }
  },
  mounted() {
    this.init();
  }
};
</script>

<style lang="less" scoped>
.titleListRight {
  width: 280px;
  height: 101px;
  h3 {
    font-size: 18px;
    font-weight: 400;
    padding-bottom: 10px;
    border-bottom: 1px #dddddd solid;
  }
  .titleBox {
    padding: 20px 0;
    border-bottom: 1px #dddddd solid;
    cursor: pointer;
    img {
      width: 100px;
      height: 80px;
      margin-right: 8px;
    }
    .titleName {
      height: 63px;
      width: 170px;
      font-size: 14px;
      margin-top: 3px;
    }
    .text {
      color: #999999;
      font-size: 12px;
    }
  }
}
</style>

