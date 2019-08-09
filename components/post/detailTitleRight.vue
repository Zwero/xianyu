<template>
  <div class="titleListRight">
    <h3>相关攻略</h3>
    <el-row type="flex" class="row-bg titleBox" v-for="(item,index) in titleList" :key="index">
      <img src="http://157.122.54.189:9095/uploads/5aa8ac43c95443cdadca309f70b8e90e.jpg" alt />
      <el-row>
        <p class="titleName">{{item.title}}</p>
        <p class="text">
          <span>时间</span>
          <span>阅读: {{item.watch}}</span>
        </p>
      </el-row>
    </el-row>
  </div>
</template>

<script>
export default {
  data() {
    return {
      titleList: []
    };
  },
  mounted() {
    this.$axios({
      url: "/posts/recommend",
      params: {
        id: 4
      }
    }).then(res => {
      // console.log(res);
      this.titleList = res.data.data;
      console.log("女人", this.titleList);
    });
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

