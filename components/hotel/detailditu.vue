<template>
  <!-- 地图部分 -->
  <el-row class="map" type="flex">
    <div class="map-l">
<fafafa/>
    </div>

    <div class="map-r">
      <el-tabs v-model="activeName" @tab-click="handleClick">
        <el-tab-pane label="风景" name="first">
          <ol>
            <li>
              <span>高佬庄</span>
              <span>13.5公里</span>
            </li>
            <li>
              <span>高佬庄</span>
              <span>13.5公里</span>
            </li>
            <li>
              <span>高佬庄</span>
              <span>13.5公里</span>
            </li>
            <li>
              <span>高佬庄</span>
              <span>13.5公里</span>
            </li>
            <li>
              <span>高佬庄</span>
              <span>13.5公里</span>
            </li>
            <li>
              <span>高佬庄</span>
              <span>13.5公里</span>
            </li>
            <li>
              <span>高佬庄</span>
              <span>13.5公里</span>
            </li>
            <li>
              <span>高佬庄</span>
              <span>13.5公里</span>
            </li>
            <li>
              <span>高佬庄</span>
              <span>13.5公里</span>
            </li>
            <li>
              <span>高佬庄</span>
              <span>13.5公里</span>
            </li>
            <li>
              <span>高佬庄</span>
              <span>13.5公里</span>
            </li>
            <li>
              <span>高佬庄</span>
              <span>13.5公里</span>
            </li>
          </ol>
        </el-tab-pane>
        <el-tab-pane label="交通" name="second">
          <ol>
            <li>
              <span>甘霖路口(公交站)</span>
              <span>5.5公里</span>
            </li>
            <li>
              <span>甘霖路口(公交站)</span>
              <span>5.5公里</span>
            </li>
            <li>
              <span>甘霖路口(公交站)</span>
              <span>5.5公里</span>
            </li>
            <li>
              <span>甘霖路口(公交站)</span>
              <span>5.5公里</span>
            </li>
            <li>
              <span>甘霖路口(公交站)</span>
              <span>5.5公里</span>
            </li>
            <li>
              <span>甘霖路口(公交站)</span>
              <span>5.5公里</span>
            </li>
            <li>
              <span>甘霖路口(公交站)</span>
              <span>5.5公里</span>
            </li>
            <li>
              <span>甘霖路口(公交站)</span>
              <span>5.5公里</span>
            </li>
            <li>
              <span>甘霖路口(公交站)</span>
              <span>5.5公里</span>
            </li>
            <li>
              <span>甘霖路口(公交站)</span>
              <span>5.5公里</span>
            </li>
            <li>
              <span>甘霖路口(公交站)</span>
              <span>5.5公里</span>
            </li>
            <li>
              <span>甘霖路口(公交站)</span>
              <span>5.5公里</span>
            </li>
          </ol>
        </el-tab-pane>
      </el-tabs>
    </div>
  </el-row>
</template>
<script>
import fafafa from '@/components/hotel/ditu/ditu.vue'
export default {
  components:{
    fafafa
  },
  data() {
    return {
      activeName: "first"
    };
  },
  methods: {
    handleClick(tab, event) {
      console.log(tab, event);
    }
  }
};
</script>
<style lang="less" scoped>
.map {
  height: 360px;
  .map-l {
    margin-right: 20px;
    width: 650px;
    height: 100%;
    // border: 1px solid #666;
  }
  .map-r {
    width: 330px;
    height: 100%;
    border: 1px solid #999;

    ol {
      overflow: auto;
      height: 300px;
      li {
        display: flex;
        margin: 15px 0;
        &:nth-child(1) {
          margin-top: 0;
        }
        span {
          font-size: 14px;
          color: #666;
          &:nth-child(1) {
            padding-left: 10px;
            width: 230px;
          }
        }
      }
    }
  }
}
</style>
