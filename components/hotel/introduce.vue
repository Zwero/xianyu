<template>
  <div class="introduce">
    <el-row type="flex" class="option">
      <el-col :span="3">区域:</el-col>
      <el-col>
        <div class="scenics-box">
          <a href="#" class="budget">全部</a>
        </div>
        <a href="#">
          <i class="el-icon-download"></i>
          等43个区域
        </a>
      </el-col>
    </el-row>
    <el-row type="flex" class="option">
      <el-col :span="3">攻略:</el-col>
      <el-col>北京，你想要的都能在这找到。博古通今，兼容并蓄，天下一城，如是帝都。 景点以故宫为中心向四处辐射；地铁便宜通畅，而且覆盖绝大多数景点。 由于早上有天安门升旗仪式，所以大多数人选择在天安门附近住宿</el-col>
    </el-row>
    <el-row type="flex" class="option">
      <el-col :span="3">
        均价
        <el-tooltip
          class="item"
          effect="dark"
          content="等级均价由平日价格计算得出，节假日价格会有上浮"
          placement="top-start"
        >
          <sup class="question-mark">?</sup>
        </el-tooltip>:
      </el-col>
      <el-col :span="21">
        <el-row type="flex">
          <el-col :span="6">
            <el-tooltip class="item" effect="dark" content="等级评定是针对房价，设施和服务等各方面水平的综合评估。" placement="bottom">
              <el-rate
                v-model="value"
                :max="max"
                disabled
                show-score
                text-color="#000"
                score-template="¥332"
              ></el-rate>
            </el-tooltip>
          </el-col>
          <el-col :span="6">
            <el-tooltip class="item" effect="dark" content="等级评定是针对房价，设施和服务等各方面水平的综合评估。" placement="bottom">
              <el-rate
                v-model="value"
                :max="max"
                disabled
                show-score
                text-color="#000"
                score-template="¥332"
              ></el-rate>
            </el-tooltip>
          </el-col>
          <el-col :span="6">
            <el-tooltip class="item" effect="dark" content="等级评定是针对房价，设施和服务等各方面水平的综合评估。" placement="bottom">
              <el-rate
                v-model="value"
                :max="max"
                disabled
                show-score
                text-color="#000"
                score-template="¥332"
              ></el-rate>
            </el-tooltip>
          </el-col>
        </el-row>
      </el-col>
    </el-row>
  </div>
</template>
<script>
export default {
  data() {
    return {
      isShow: false,
      value: 3,
      max: 3
    };
  },
  
};
</script>
<style lang="less" scoped>
.introduce {
  font-size: 14px;
  .option {
    margin-bottom: 20px;
    color: #666;
    font-size: 14px;
    .question-mark {
      display: inline-block;
      background-color: #ccc;
      color: #fff;
      width: 1.2em;
      height: 1.2em;
      text-align: center;
      border-radius: 50%;
    }
    .scenics-box {
      max-height: 3em;
      overflow: hidden;
      .budget {
        display: inline-block;
        padding: 0px 2px;
        margin-right: 1em;
        cursor: pointer;
        &:hover {
          color: #1761e9;
          text-decoration: underline;
        }
        &.active {
          background: #eee;
          color: #999;
        }
      }
    }
  }
}
</style>
