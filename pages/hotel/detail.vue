<template>
  <el-row class="hotelDetail" justify="space-between">
    <!-- 头部面包屑 -->
    <el-header class="crumbs">
      <el-breadcrumb separator-class="el-icon-arrow-right">
        <el-breadcrumb-item to="/hotel/">酒店</el-breadcrumb-item>
        <el-breadcrumb-item to="/hotel/">南京酒店</el-breadcrumb-item>
        <el-breadcrumb-item>{{totals.name}}</el-breadcrumb-item>
      </el-breadcrumb>
    </el-header>

    <!-- 酒店详情 -->
    <div class="hotels">
      <h4>
        {{totals.name}}
        <em class="biao">
          <i class="iconfont iconhuangguan"></i>
          <i class="iconfont iconhuangguan"></i>
          <i class="iconfont iconhuangguan"></i>
          <i class="iconfont iconhuangguan"></i>
          <i class="iconfont iconhuangguan"></i>
        </em>
      </h4>
      <span>{{totals.alias}}</span>
      <p>
        <i class="el-icon-location"></i>
        {{totals.address}}
      </p>
      <el-row class="tu" type="flex">
        <el-row class="l">
          <i>
            <img
              v-for="(item2,index2) in picture"
              :key="index2"
              :src="`${item2.urls}`"
              v-if="current === index2"
              alt
            />
          </i>
        </el-row>
        <el-row class="r" type="flex" justify="space-between">
          <i v-for="(item,index) in picture" :key="index">
            <img
              :src="`${item.urls}`"
              altc
              @click="handleClick( index )"
              :class="{ active: current === index  }"
            />
          </i>
        </el-row>
      </el-row>
    </div>
    <!-- 酒店价格 -->

    <detailPrice :products="totals.products" />

    <!-- 地图部分 -->

    <detailDiTu />

    <!-- 基本信息 -->
    <Detailmessage :total="totals" />
    <!-- 底部评论 -->
    <footer>
      <h4>0条真实用户评论</h4>
      <el-row type="flex" class="comment">
        <el-col>
          <p>总评数：9</p>
          <p>好评数：1</p>
          <p>差评数：2</p>
        </el-col>
        <el-col class="grade">
          <el-rate
            class="el-rates"
            v-model="value5"
            disabled
            show-score
            text-color="#ff9900"
            score-template="{value}"
          ></el-rate>
        </el-col>
        <el-col class="environment">
          <el-progress
            type="circle"
            :percentage="8"
            text-inside
            :width="70"
            :height="70"
            :stroke-width="3"
            color="orange"
          ></el-progress>
          <span class="evt">环境</span>
          <span class="totals">8</span>
        </el-col>
        <el-col class="environment">
          <el-progress
            type="circle"
            :percentage="8"
            text-inside
            :width="70"
            :height="70"
            :stroke-width="3"
            color="orange"
          ></el-progress>
          <span class="evt">产品</span>
        </el-col>
        <el-col class="environment">
          <el-progress
            type="circle"
            :percentage="8"
            text-inside
            :width="70"
            :height="70"
            :stroke-width="3"
            color="orange"
          ></el-progress>
          <span class="evt">服务</span>
        </el-col>
      </el-row>
    </footer>
  </el-row>
</template>
<script>
import detailDiTu from "@/components/hotel/detailditu.vue";
import detailPrice from "@/components/hotel/detailprice.vue";
import Detailmessage from "@/components/hotel/detailmessage.vue";
export default {
  // 注册组件
  components: {
    detailDiTu,
    detailPrice,
    Detailmessage
  },
  data() {
    return {
      current: 0,
      // 图片
      picture: [
        { urls: "http://127.0.0.1:1337/uploads/1.jpeg" },
        { urls: "http://127.0.0.1:1337/uploads/2.jpeg" },
        { urls: "http://127.0.0.1:1337/uploads/3.jpeg" },
        { urls: "http://127.0.0.1:1337/uploads/4.jpeg" },
        { urls: "http://127.0.0.1:1337/uploads/5.jpeg" },
        { urls: "http://127.0.0.1:1337/uploads/6.jpeg" }
      ],
      totals: {
        name: "",
        pics: [],
        products: []
      },
      // 评分
      value5: 0,
      // 酒店id
      id: ""
    };
  },

  methods: {
    // 点击切换图片
    handleClick(index) {
      this.current = index;
    },

    // 初始化
    getData() {
      this.$axios({
        url: "/hotels",
        params: { id: this.id }
      }).then(res => {
        // console.log(res);
        this.totals = res.data.data[0];
        this.value5 = this.totals.stars;
        // console.log(this.value5);
      });
    }
  },
  mounted() {
    this.id = this.$route.query.id;
    this.getData();
    // console.log(this.id);
  }
};
</script>
<style lang="less" scoped>
* {
  margin: 0;
  padding: 0;
  list-style: none;
}
.hotelDetail {
  width: 1000px;
  margin: 0 auto;

  .crumbs {
    padding: 20px 0;
  }
  .hotels {
    margin-bottom: 40px;
    h4 {
      font-size: 18px;
      font-weight: normal;
      color: #333;
      .biao {
        font-size: 13px;
        color: orange;
      }
    }
    span {
      font-size: 12px;
      color: #999;
    }
    p {
      font-size: 14px;
      color: #666;
    }
    .tu {
      margin-top: 40px;
      height: 360px;
      .l {
        width: 640px;
        height: 100%;
        // border: 1px solid red;
        margin-right: 20px;
        // overflow: hidden;

        i {
          display: block;

          width: 100%;
          height: 100%;
          // background: blue;
          img {
            width: 100%;
            height: 100%;
          }
        }
      }
      .r {
        flex-wrap: wrap;
        align-content: space-between;
        width: 340px;
        height: 100%;
        // border: 1px solid blue;
        i {
          width: 160px;
          height: 110px;
          // background: orange;

          img {
            width: 100%;
            height: 100%;
            cursor: pointer;
          }
        }
      }
    }
  }
  .jiuDian {
    margin-bottom: 40px;
  }
  footer {
    .comment {
      margin: 20px 0;
      color: #666;
      .el-col-24 {
        width: 166px;
      }

      .grade {
        position: relative;
        .el-rates {
          position: absolute;
          top: 25px;
          left: 1px;
        }
      }
      .environment {
        color: orange;
        display: flex;
        position: relative;
        .evt {
          position: absolute;
          top: 16px;
          left: 18px;
        }
        .totals {
          position: absolute;
          top: 37px;
          left: 30px;
        }
      }
    }
  }
}
</style>
