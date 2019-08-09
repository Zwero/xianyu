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
      <el-col :span="5" class="filterCommon">
        <el-row>住宿等级</el-row>
        <el-row>
          <el-dropdown @command="handleCommand1">
            <span class="el-dropdown-link">
              {{title.label1}}
              <i class="el-icon-arrow-down el-icon--right"></i>
            </span>
            <el-dropdown-menu slot="dropdown">
              <el-dropdown-item command="黄金糕">黄金糕</el-dropdown-item>
              <el-dropdown-item command="狮子头">狮子头</el-dropdown-item>
              <el-dropdown-item command="螺蛳粉">螺蛳粉</el-dropdown-item>
              <el-dropdown-item command="双皮奶" >双皮奶</el-dropdown-item>
              <el-dropdown-item command="蚵仔煎" divided>蚵仔煎</el-dropdown-item>
            </el-dropdown-menu>
          </el-dropdown>
        </el-row>
      </el-col>
      <el-col :span="5" class="filterCommon">
        <el-row>住宿类型</el-row>
        <el-row>
          <el-dropdown @command="handleCommand2">
            <span class="el-dropdown-link">
              {{title.label2}}
              <i class="el-icon-arrow-down el-icon--right"></i>
            </span>
            <el-dropdown-menu slot="dropdown">
              <el-dropdown-item command="黄金糕">黄金糕</el-dropdown-item>
              <el-dropdown-item command="狮子头">狮子头</el-dropdown-item>
              <el-dropdown-item command="螺蛳粉">螺蛳粉</el-dropdown-item>
              <el-dropdown-item command="双皮奶" >双皮奶</el-dropdown-item>
              <el-dropdown-item command="蚵仔煎" divided>蚵仔煎</el-dropdown-item>
            </el-dropdown-menu>
          </el-dropdown>
        </el-row>
      </el-col>
      <el-col :span="5" class="filterCommon">
        <el-row>酒店设施</el-row>
        <el-row>
          <el-dropdown @command="handleCommand3">
            <span class="el-dropdown-link">
              {{title.label3}}
              <i class="el-icon-arrow-down el-icon--right"></i>
            </span>
            <el-dropdown-menu slot="dropdown">
              <el-dropdown-item command="黄金糕">黄金糕</el-dropdown-item>
              <el-dropdown-item command="狮子头">狮子头</el-dropdown-item>
              <el-dropdown-item command="螺蛳粉">螺蛳粉</el-dropdown-item>
              <el-dropdown-item command="双皮奶" >双皮奶</el-dropdown-item>
              <el-dropdown-item command="蚵仔煎" divided>蚵仔煎</el-dropdown-item>
            </el-dropdown-menu>
          </el-dropdown>
        </el-row>
      </el-col>
      <el-col :span="5" class="filterCommon">
        <el-row>酒店品牌</el-row>
        <el-row>
          <el-dropdown @command="handleCommand4">
            <span class="el-dropdown-link">
              {{title.label4}}
              <i class="el-icon-arrow-down el-icon--right"></i>
            </span>
            <el-dropdown-menu slot="dropdown">
              <el-dropdown-item command="黄金糕">黄金糕</el-dropdown-item>
              <el-dropdown-item command="狮子头">狮子头</el-dropdown-item>
              <el-dropdown-item command="螺蛳粉">螺蛳粉</el-dropdown-item>
              <el-dropdown-item command="双皮奶" >双皮奶</el-dropdown-item>
              <el-dropdown-item command="蚵仔煎" divided>蚵仔煎</el-dropdown-item>
            </el-dropdown-menu>
          </el-dropdown>
        </el-row>
      </el-col>
    </el-row>
  </div>
</template>
<script>
export default {
  data() {
    return {
      price: 4000,
      max: 4000,
      title:{
        label1: "不限",
        label2: "不限",
        label3: "不限",
        label4: "不限"
      },
      value1: []
    };
  },
  methods: {
    //   点击菜单项后会触发事件
    handleCommand1(v) {
     this.title.label1=v
    },
    handleCommand2(v){
        this.title.label2=v
    },
    handleCommand3(v){
        this.title.label3=v
    },
    handleCommand4(v){
        this.title.label4=v
    }
  }
};
</script>
<style lang="less" scoped>
.filter {
  font-size: 14px;
  color: #666;
  .filterCommon {
    padding: 5px 10px;
  }
}
</style>
