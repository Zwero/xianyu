<template>
  <div class="hotel">
    <!-- 头部面包屑 -->
    <div class="breadcrumb">
      <Breadcrumb></Breadcrumb>
    </div>
    <!-- 搜索栏 -->
    <div class="search">
      <Search></Search>
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
      <Filterss></Filterss>
    </div>
    <!-- 酒店列表 分页栏 -->
    <div class="hotel_list">
      <HotelList></HotelList>
    </div>
  </div>
</template>

<script>
import Breadcrumb from "@/components/hotel/breadcrumb";
import Search from "@/components/hotel/search";
import Introduce from "@/components/hotel/introduce";
import HotelMap from '@/components/hotel/hotelMap'
import Filterss from '@/components/hotel/filterss'
import HotelList from '@/components/hotel/hotel_list'
export default {
  components: {
    Breadcrumb,
    Search,
    Introduce,
    HotelMap,
    Filterss,
    HotelList
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

