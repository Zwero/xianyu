<template>
  <el-row class="hotelDetail" justify="space-between">
    <!-- 头部面包屑 -->
    <el-header class="crumbs">
      <el-breadcrumb separator-class="el-icon-arrow-right">
<<<<<<< HEAD
        <el-breadcrumb-item to="/hotel/">酒店</el-breadcrumb-item>
        <el-breadcrumb-item to="/hotel/">南京酒店</el-breadcrumb-item>
        <el-breadcrumb-item>{{totals.name}}</el-breadcrumb-item>
=======
        <el-breadcrumb-item to="#">酒店</el-breadcrumb-item>
        <el-breadcrumb-item>南京酒店</el-breadcrumb-item>
        <el-breadcrumb-item>好来阁商务宾馆</el-breadcrumb-item>
>>>>>>> 969e0797e1904d731e147ec5d1af20aa384d9bfa
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
<<<<<<< HEAD
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
=======
            <!-- <img :src="`${$axios.defaults.baseURL}${this.src1}`" alt=""> -->
          </i>
        </el-row>
        <el-row class="r" type="flex" justify="space-between">
          <i v-for="(item,index) in totals.pics" :key="index">
            <!-- <img src="http://157.122.54.189:9093/images/hotel-pics/1.jpeg" alt=""> -->
             <!-- <img :src="`${$axios.defaults.baseURL}${item.url}`" alt=""> -->
             <img src="http://127.0.0.1:1337/uploads/th01.jfif" alt="">
          </i>
          <!-- <i></i>
          <i></i>
          <i></i>
          <i></i>
          <i></i> -->
>>>>>>> 969e0797e1904d731e147ec5d1af20aa384d9bfa
        </el-row>
      </el-row>
    </div>
    <!-- 酒店价格 -->
<<<<<<< HEAD

    <detailPrice :products="totals.products" />
=======
    
    <detailPrice :products="totals.products"/>
>>>>>>> 969e0797e1904d731e147ec5d1af20aa384d9bfa

    <!-- 地图部分 -->

    <detailDiTu />
<<<<<<< HEAD

    <!-- 基本信息 -->
    <Detailmessage :total="totals" />
=======
    <!-- 基本信息 -->
    <div class="messages">
      <el-row type="flex" justify="space-between" class="el-row-24">
        <el-col :span="4" class="el-col-4">基本信息</el-col>
        <el-col :span="20" class="el-col-20">
          <el-row type="flex" justify="space-between">
            <el-col :span="6" class="el-col-5">入住时间: 14:00之后</el-col>
            <el-col :span="6" class="el-col-5">离店时间: 12:00之前</el-col>
            <el-col :span="6" class="el-col-5">2010年开业 / 2015年装修</el-col>
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
    </div>
>>>>>>> 969e0797e1904d731e147ec5d1af20aa384d9bfa
    <!-- 底部评论 -->
    <footer>
      <h4>0条真实用户评论</h4>
      <el-row type="flex" class="comment">
        <el-col>
          <p>总评数：9</p>
          <p>好评数：1</p>
          <p>差评数：2</p>
        </el-col>
<<<<<<< HEAD
        <el-col class="grade">
          <el-rate
            class="el-rates"
            v-model="value5"
            disabled
            show-score
            text-color="#ff9900"
            score-template="{value}"
          ></el-rate>
=======
        <el-col class="grade environment">
          <span>
            <i class="el-icon-star-off"></i>
            <i class="el-icon-star-off"></i>
            <i class="el-icon-star-off"></i>
            <i class="el-icon-star-off"></i>
            <i class="el-icon-star-off"></i>
          </span>
          <span>3.5分</span>
>>>>>>> 969e0797e1904d731e147ec5d1af20aa384d9bfa
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
<<<<<<< HEAD
import Detailmessage from "@/components/hotel/detailmessage.vue";
export default {
=======
export default {
  data(){
    return{
    
      totals:{
        name:'',
        pics:[],
        products:[]
      }
    }
  },
>>>>>>> 969e0797e1904d731e147ec5d1af20aa384d9bfa
  // 注册组件
  components: {
    detailDiTu,
    detailPrice,
<<<<<<< HEAD
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
=======
    
  },

  mounted(){
    
    this.$axios({
      url:'hotels',
      query:{}
    }).then(res=>{
      // console.log(res)
     this.totals=res.data.data[0]
      
     console.log('123',this.totals)
    })
>>>>>>> 969e0797e1904d731e147ec5d1af20aa384d9bfa
  }
};
</script>
<style lang="less" scoped>
<<<<<<< HEAD
* {
  margin: 0;
  padding: 0;
  list-style: none;
}
=======
>>>>>>> 969e0797e1904d731e147ec5d1af20aa384d9bfa
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
<<<<<<< HEAD
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
=======
        border: 1px solid red;
        margin-right: 20px;
        i {
          display: block;
          width: 100%;
          height: 100%;
          background: blue;
>>>>>>> 969e0797e1904d731e147ec5d1af20aa384d9bfa
        }
      }
      .r {
        flex-wrap: wrap;
        align-content: space-between;
        width: 340px;
        height: 100%;
<<<<<<< HEAD
        // border: 1px solid blue;
        i {
          width: 160px;
          height: 110px;
          // background: orange;

          img {
            width: 100%;
            height: 100%;
            cursor: pointer;
=======
        border: 1px solid blue;
        i {
          width: 160px;
          height: 110px;
          background: orange;
          img {
            width: 100%;
            height: 100%;
>>>>>>> 969e0797e1904d731e147ec5d1af20aa384d9bfa
          }
        }
      }
    }
  }
  .jiuDian {
    margin-bottom: 40px;
  }
<<<<<<< HEAD

=======
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
>>>>>>> 969e0797e1904d731e147ec5d1af20aa384d9bfa
  footer {
    .comment {
      margin: 20px 0;
      color: #666;
      .el-col-24 {
        width: 166px;
      }

      .grade {
<<<<<<< HEAD
        position: relative;
        .el-rates {
          position: absolute;
          top: 25px;
          left: 1px;
        }
=======
        height: 70px;
        line-height: 70px;
>>>>>>> 969e0797e1904d731e147ec5d1af20aa384d9bfa
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
