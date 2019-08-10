<template>
  <div class="detailmessage">
    <!-- 基本信息 -->
    <el-row class="messages">
      <el-row type="flex" justify="space-between" class="el-row-24">
        <el-col :span="4" class="el-col-4">基本信息</el-col>
        <el-col :span="20" class="el-col-20">
          <el-row type="flex" justify="space-between">
            <el-col :span="6" class="el-col-5">入住时间: 14:00之后</el-col>
            <el-col :span="6" class="el-col-5">离店时间: 12:00之前</el-col>
            <el-col :span="6" class="el-col-5">{{total.creation_time}} / {{total.renovat_time}}</el-col>
            <el-col :span="6" class="el-col-5">酒店规模: 148间客房</el-col>
          </el-row>
        </el-col>
      </el-row>
      <!-- 主要设施 -->
      <el-row type="flex" justify="space-between" class="el-row-24">
        <el-col :span="4" class="el-col-4">主要设施</el-col>
        <el-col :span="20" class="el-col-c">
          <el-row type="flex">
            <span class="el-col-span">外币兑换服务</span>
            <span class="el-col-span">电梯</span>
          </el-row>
        </el-col>
      </el-row>
      <!-- 停车服务 -->
      <el-row type="flex" justify="space-between" class="el-row-24">
        <el-col :span="4" class="el-col-4">停车服务</el-col>
        <el-col :span="20" class="el-col-20">
          <el-row type="flex" justify="space-between">
            <el-col class="el-col-5">-</el-col>
          </el-row>
        </el-col>
      </el-row>
      <!-- 品牌信息 -->
      <el-row type="flex" justify="space-between" class="el-row-24">
        <el-col :span="4" class="el-col-4">品牌信息</el-col>
        <el-col :span="20" class="el-col-20">
          <el-row type="flex" justify="space-between">
            <el-col class="el-col-5">-</el-col>
          </el-row>
        </el-col>
      </el-row>
    </el-row>
  </div>
</template>
<script>
export default {
     // 接收父组件传来的数据
      props: {
        total: {
          type: Object,
          default: {}
        }
      },
  data() {
    return {
     
    };
  },
  mounted() {
    this.$axios({
      url: "/hotels/options",
      params: {}
    }).then(res => {
      console.log(res);
      //   this.total=res.data.assets
    });
  }
};
</script>
<style lang="less" scoped>
.messages {
  margin: 50px 0;
  font-size: 14px;
  .el-row-24 {
    border-bottom: 1px solid #eee;
    .el-col-4 {
      padding: 20px 10px;
    }
    .el-col-20 {
      padding: 20px 10px;
      color: #666;
      .el-col-5 {
        padding: 0 5px;
      }
    }
    .el-col-c {
      padding: 16px 10px;
      .el-col-span {
        padding: 4px 10px;
        margin-right: 10px;
        background: #eee;
        border-radius: 4px;
      }
    }
  }
}
</style>
