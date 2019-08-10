<template>
  <el-row class="hotelDetail" justify="space-between">
    <!-- 头部面包屑 -->
    <el-header class="crumbs">
      <el-breadcrumb separator-class="el-icon-arrow-right">
        <el-breadcrumb-item to="#">酒店</el-breadcrumb-item>
        <el-breadcrumb-item>南京酒店</el-breadcrumb-item>
        <el-breadcrumb-item>好来阁商务宾馆</el-breadcrumb-item>
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
        </el-row>
      </el-row>
    </div>
    <!-- 酒店价格 -->
    
    <detailPrice :products="totals.products"/>

    <!-- 地图部分 -->

    <detailDiTu />
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
    <!-- 底部评论 -->
    <footer>
      <h4>0条真实用户评论</h4>
      <el-row type="flex" class="comment">
        <el-col>
          <p>总评数：9</p>
          <p>好评数：1</p>
          <p>差评数：2</p>
        </el-col>
        <el-col class="grade environment">
          <span>
            <i class="el-icon-star-off"></i>
            <i class="el-icon-star-off"></i>
            <i class="el-icon-star-off"></i>
            <i class="el-icon-star-off"></i>
            <i class="el-icon-star-off"></i>
          </span>
          <span>3.5分</span>
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
  // 注册组件
  components: {
    detailDiTu,
    detailPrice,
    
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
  }
};
</script>
<style lang="less" scoped>
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
        border: 1px solid red;
        margin-right: 20px;
        i {
          display: block;
          width: 100%;
          height: 100%;
          background: blue;
        }
      }
      .r {
        flex-wrap: wrap;
        align-content: space-between;
        width: 340px;
        height: 100%;
        border: 1px solid blue;
        i {
          width: 160px;
          height: 110px;
          background: orange;
          img {
            width: 100%;
            height: 100%;
          }
        }
      }
    }
  }
  .jiuDian {
    margin-bottom: 40px;
  }
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
  footer {
    .comment {
      margin: 20px 0;
      color: #666;
      .el-col-24 {
        width: 166px;
      }

      .grade {
        height: 70px;
        line-height: 70px;
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
