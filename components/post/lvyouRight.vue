<template>
  <div class="lvyou-right">
    <div data-v-053600ae class="search-wrapper">
      <!-- 搜索部分 -->
      <div class="search">
        <input type="text" placeholder="请输入想去的地方，比如：'广州'" />
        <i class="el-icon-search"></i>
      </div>
      <!-- 推荐部分 -->
      <div class="search-recommend">
        推荐：
        <span>
          <a href="#">北京</a>
        </span>
        <span>
          <a href="#">广州</a>
        </span>
        <span>
          <a href="#">上海</a>
        </span>
        <span>
          <a href="#">成都</a>
        </span>
        <span>
          <a href="#">西安</a>
        </span>
      </div>
    </div>
    <!-- 推荐攻略部分 -->
    <div class="post_title">
      <h4>推荐攻略</h4>
      <div class="youji">
        <a href="/post/create">写游记</a>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      citiesarr: {}
    };
  },
  mounted() {
    this.$axios({
      url: "posts/cities"
    }).then(res => {
      console.log(res);
      this.citiesarr = res.data.data;
    });
  },
  methods: {}
};
</script>
<style lang="less" scoped>
* {
  margin: 0;
  padding: 0;
}
a,
to {
  text-decoration: none;
  color: inherit;
}

input {
  width: 660px;
  height: 40px;
  border: 3px solid orange;
  text-align: 20px;
  text-indent: 0px;
  text-shadow: none;
  display: inline-block;
  text-align: start;
  font-size: 14px;
  padding-left: 20px;
  letter-spacing: normal;
  word-spacing: normal;
  text-transform: none;
  text-indent: 0px;
  text-shadow: none;
  display: inline-block;
  text-align: start;
  outline: none;
}
.search {
  position: relative;
  letter-spacing: normal;
  word-spacing: normal;
  text-transform: none;
}
.el-icon-search {
  position: absolute;
  right: 50px;
  top: 13px;
  color: orange;
}
.search-wrapper .search-recommend {
  padding: 10px 0;
  font-size: 12px;
  color: #666;
  a:hover {
    color: orange;
  }
}
.post_title {
  position: relative;
  width: 700px;
  height: 50px;
  border-bottom: 2px solid #bbb;
  margin-top: 10px;
  align-content: center;
  margin-bottom: 15px;
  font-size: 20px;
  overflow: hidden;

  h4 {
    font-size: 20px;
    color: orange;
    font-weight: normal;
    width: 85px;
    border-bottom: 2px solid orange;
    padding-bottom: 20px;
  }
  .youji {
    // border: 1px solid blue;
    height: 40px;
    width: 120px;
    position: absolute;
    right: 50px;
    top: 0px;
    text-align: center;
    line-height: 40px;
    font-size: 16px;
    color: white;
    background: #409eff;
    border-radius: 5px;
  }
}
</style>
