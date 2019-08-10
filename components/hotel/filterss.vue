<template>
  <div class="filter">
    <el-row type="flex">
      <el-col :span="6" class="filterCommon">
        <el-row>
          <el-col :span="12">价格</el-col>
          <el-col :span="12">0-{{price}}</el-col>
        </el-row>
        <el-row>
          <el-slider v-model="price" :max="max"></el-slider>
        </el-row>
      </el-col>
      <!-- 住宿等级 -->
      <el-col :span="5" class="filterCommon">
        <el-row>住宿等级</el-row>
        <el-row>
          <el-dropdown @command="handleCommand1">
            <span class="el-dropdown-link">
              {{title.label1}}
              <i class="el-icon-arrow-down el-icon--right"></i>
            </span>
            <el-dropdown-menu slot="dropdown">
              <el-dropdown-item
                :command="item.name"
                v-for="item in filterData.levels"
                :key="item.id"
              >{{item.name}}</el-dropdown-item>
            </el-dropdown-menu>
          </el-dropdown>
        </el-row>
      </el-col>
      <!-- 住宿类型 -->
      <el-col :span="5" class="filterCommon">
        <el-row>住宿类型</el-row>
        <el-row>
          <el-dropdown @command="handleCommand2">
            <span class="el-dropdown-link">
              {{title.label2}}
              <i class="el-icon-arrow-down el-icon--right"></i>
            </span>
            <el-dropdown-menu slot="dropdown">
              <el-dropdown-item
                :command="item.name"
                v-for="item in filterData.types"
                :key="item.id"
              >{{item.name}}</el-dropdown-item>
            </el-dropdown-menu>
          </el-dropdown>
        </el-row>
      </el-col>
      <!-- 酒店设施 -->
      <el-col :span="5" class="filterCommon">
        <el-row>酒店设施</el-row>
        <el-row>
          <el-dropdown @command="handleCommand3">
            <span class="el-dropdown-link">
              {{title.label3}}
              <i class="el-icon-arrow-down el-icon--right"></i>
            </span>
            <el-dropdown-menu slot="dropdown">
              <el-dropdown-item
                :command="item.name"
                v-for="item in filterData.assets"
                :key="item.id"
              >{{item.name}}</el-dropdown-item>
            </el-dropdown-menu>
          </el-dropdown>
        </el-row>
      </el-col>
      <!-- 酒店品牌 -->
      <el-col :span="5" class="filterCommon">
        <el-row>酒店品牌</el-row>
        <el-row>
          <el-dropdown @command="handleCommand4" placement="top">
            <span class="el-dropdown-link">
              {{title.label4}}
              <i class="el-icon-arrow-down el-icon--right"></i>
            </span>
            <el-dropdown-menu slot="dropdown" class="filterDropDown">
              <el-scrollbar style="height:250px">
                <el-dropdown-item
                  :command="item.name"
                  v-for="item in filterData.brands"
                  :key="item.id"
                >{{item.name}}</el-dropdown-item>
              </el-scrollbar>
            </el-dropdown-menu>
          </el-dropdown>
        </el-row>
      </el-col>
    </el-row>
  </div>
</template>
<script>
export default {
  props: {
    cacheHotelList: {
      type: Array,
      default: []
    }
  },
  data() {
    return {
      price: 4000,
      max: 4000,
      title: {
        label1: "不限",
        label2: "不限",
        label3: "不限",
        label4: "不限"
      },
      value1: [],
      // 酒店分类类型大数据
      filterData: {
        levels: [], //住宿等级
        types: [], //住宿类型
        assets: [], //酒店设施
        brands: [] //酒店品牌
      }
    };
  },
  methods: {
    //   点击菜单项后会触发事件住宿等级
    handleCommand1(v) {
      this.title.label1 = v;
      // console.log(this.cacheHotelList, v);
      
      let arr = this.cacheHotelList.filter(item => {
        if (item.hotellevel) {
          // console.log(item.hotellevel.name,v);
         return item.hotellevel.name === v;
        }
      });
      // console.log("123", arr);
      this.$emit("setDataList", arr);
    },
    // 住宿类型
    handleCommand2(v) {
      this.title.label2 = v;
      let arr = this.cacheHotelList.filter(item => {
        if (item.hoteltype) {
         return item.hoteltype.name === v;
        }
      });
      this.$emit("setDataList", arr)
    },
    // 酒店设施
    handleCommand3(v) {
      this.title.label3 = v;
       let arr = this.cacheHotelList.filter(item => {
        if (item.hotelassets) {
         return item.hotelassets.name === v;
        }
      });
      this.$emit("setDataList", arr)
    },
    // 酒店品牌
    handleCommand4(v) {
      this.title.label4 = v;
      let arr = this.cacheHotelList.filter(item => {
        if (item.hotelbrand) {
         return item.hotelbrand.name === v;
        }
      });
      this.$emit("setDataList", arr)
    }
  },
  mounted() {
    this.$emit("options", res => {
      // console.log(res)
      this.filterData.levels = res.levels;
      // console.log( this.filterData.levels)
      this.filterData.types = res.types;
      this.filterData.assets = res.assets;
      this.filterData.brands = res.brands;
    });
  }
};
</script>
<style lang="less" scoped>
.filter {
  font-size: 14px;
  color: #666;
  .filterCommon {
    padding: 5px 10px;
    .filterDropDown {
      .el-scrollbar__wrap {
        overflow-x: hidden;
      }
    }
  }
}
</style>
