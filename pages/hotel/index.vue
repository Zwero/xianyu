<template>
  <div class="box">
    <div class="hotel">
      <!-- 头部面包屑 -->
      <div class="breadcrumb">
        <Breadcrumb></Breadcrumb>
      </div>
      <!-- 搜索栏 -->
      <div class="search">
        <Search @getSearchData="getSearchData" @cities="cities"></Search>
      </div>
      <!-- 介绍栏和地图栏 -->
      <div class="introduce">
        <el-row type="flex">
          <!-- 介绍栏 -->
          <el-col :span="14">
            <Introduce></Introduce>
          </el-col>
          <!-- 地图 -->
          <el-col :span="10">
            <HotelMap></HotelMap>
          </el-col>
        </el-row>
      </div>
      <!-- 过滤栏 -->
      <div class="filters">
        <Filterss @options="options" :cacheHotelList='cacheHotelList' @setDataList='setDataList'></Filterss>
      </div>
      <!-- 酒店列表 分页栏 -->
      <div class="hotel_list">
        <HotelList
          v-for="(item,index) in currentHotelList"
          :key="index"
          :data="item"
          @hotels="hotels"
        ></HotelList>
        <!-- 分页 -->
        <!-- @size-change：修改条数时候触发
                    @current-change：修改页数时候触发
                    current-page：当前页面
                    page-size：当前页面显示的条数
        total：总条数-->
        <el-pagination
          @size-change="handleSizeChange"
          @current-change="handleCurrentChange"
          :current-page="hotelObj.pageIndex"
          :prev-text="'< 上一页'"
          :next-text="'下一页 >'"
          :page-sizes="[1, 2, 3, 4]"
          :page-size="hotelObj.pageSize"
          layout="total, sizes, prev, pager, next, jumper"
          :total="hotelObj.total"
        ></el-pagination>
      </div>
    </div>
  </div>
</template>
<script>
import Breadcrumb from "@/components/hotel/breadcrumb";
import Search from "@/components/hotel/search";
import Introduce from "@/components/hotel/introduce";
import HotelMap from "@/components/hotel/hotelMap";
import Filterss from "@/components/hotel/filterss";
import HotelList from "@/components/hotel/hotel_list";
export default {
  components: {
    Breadcrumb,
    Search,
    Introduce,
    HotelMap,
    Filterss,
    HotelList
  },
  data() {
    return {
      // 城市ID,入店的时间,人数
      query: {
        name: "",
        city: "",
        enterTime: "",
        person: null
      },
      hotelObj: {
        // 当前页数
        pageIndex: 1,
        // 显示的条数
        pageSize: 1,
        // 总条数
        total: 0
      },
      // 后台返回的酒店详情大列表数据
      hotelList: [],
      // 缓存酒店详情列表数据,不能去修改它
      cacheHotelList: [],
      // 当前的显示酒店详情列表数据
      currentHotelList: [],

      hotelData: {
        assets: [],
        brands: [],
        levels: [],
        types: []
      }
    };
  },
  methods: {
    // 城市ID,入店的时间,人数,  从search组件里获取到的参数
    getSearchData(city, name, enterTime, person) {
      this.query.city = city;
      this.query.name = name;
      this.query.enterTime = enterTime;
      this.query.person = person;
      // console.log('接收到啦',this.query.city,this.query.enterTime,this.query.person)
    },
    // 获取酒店详情
    hotels(params, cb) {
      this.$axios({
        url: "hotels",
        params
      }).then(res => {
        // console.log("酒店详情", res.data);
        cb(res.data);
      });
    },
    // 获取城市地址
    cities(name, cb) {
      this.$axios({
        url: "cities",
        params: { name }
      }).then(res => {
        console.log("城市地址数组", res.data);
        cb(res.data);
        res.data;
      });
    },
    // 获取酒店
    options(cb) {
      this.$axios({
        url: "hotels/options"
      }).then(res => {
        // console.log("酒店", res.data.data);
        cb(res.data.data);
      });
    },
    // 获取分页的数据
    setDataList(arr) {
      // 过滤组件调用时候返回的过滤后的数据
      if (arr) {
        // 替换掉列表数据
        this.hotelList = arr;
        this.hotelObj.total = arr.length;
      }
      // 修改当前的显示列表数据
      // console.log(this.currentHotelList,this.hotelList)
      this.currentHotelList = this.hotelList.slice(
        (this.hotelObj.pageIndex - 1) * this.hotelObj.pageSize,
        (this.hotelObj.pageIndex - 1) * this.hotelObj.pageSize +
          this.hotelObj.pageSize
      );
      // console.log("当前的显示列表数据", this.currentHotelList);
    },
    // 修改分页条数触发
    handleSizeChange(v) {
      this.hotelObj.pageSize = v;
      this.setDataList();
    },
    // 切换当前页码触发
    handleCurrentChange(v) {
      // console.log(v)
      this.hotelObj.pageIndex = v;
      this.setDataList();
    }
  },
  mounted() {
    // console.log(this.query.city)
    this.hotels({ city: this.query.city }, res => {
      // console.log("hotels 酒店列表", res);
      this.hotelList = res.data;
      this.cacheHotelList =  [...res.data] ;
      this.hotelObj.total = res.total;
      this.currentHotelList = this.hotelList.slice(0, 1);
      // console.log('当前显示',this.currentHotelList,'总条数',this.hotelObj.total,'缓存',this.cacheHotelList,'大数据',this.hotelList)
    });
  }
};
</script>
<style lang="less" scoped>
.hotel {
  width: 1000px;
  margin: 0 auto;
  .breadcrumb {
    padding: 10px 0;
    //   border:1px solid #000;
  }
  .introduce {
    // border: 1px solid #000;
    height: 260px;
    margin: 0 -5px 20px;
  }
  .filters {
    padding: 5px 0;
    border: 1px solid #000;
  }
  .hotel_list {
    border: 1px solid #000;
    margin: 20px 0px;
  }
}
</style>

