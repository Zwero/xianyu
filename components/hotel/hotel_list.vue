<template>
  <div class="hotel_list">
    <el-row type="flex">
      <el-col :span="8" style="width:320px;height:210px">
        <img
          src="http://qcloud.dpfile.com/pc/wQ2ejOSmhB4OoEq1LYPHp_2RhNciyW026YiQFr_EEZsQrI_ZB6abZPwgKDOmI03U3dWYFEM5hoslgWXTJDjSPA.jpg"
          width="100%"
          height="100%"
        />
      </el-col>
      <el-col :span="10">
        <h4>好来阁商务宾馆</h4>
        <div class="hotel-en-name">
          <span>hao lai ge shang wu hotel</span>
          <span>
            <i class="iconfont iconhuangguan"></i>
            <i class="iconfont iconhuangguan"></i>
            <i class="iconfont iconhuangguan"></i>
          </span>
          <span>经济型</span>
        </div>
        <el-row type="flex">
          <el-col :span="10">
            <el-rate
              v-model="3.5"
              disabled
              show-score
              text-color="#ff9900"
              score-template="{value}"
            ></el-rate>
          </el-col>
          <el-col :span="7">
              <span>90</span>
              条评价
          </el-col>
          <el-col :span="7">
              <span>15</span>
          篇游记
          </el-col>
        </el-row>
        <div class="localtion">
            <i class="iconfont iconlocation"></i>
            位于: 高淳县淳溪镇镇兴路118号(高淳县委党校对面)
        </div>
      </el-col>
      <el-col :span="6">
          
      </el-col>
    </el-row>
  </div>
</template>
<script>
export default {
    data(){
        return {
           
        }
    }
};
</script>
<style lang="less" scoped>
</style>
