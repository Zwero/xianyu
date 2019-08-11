<template>
  <div class="lvyouLeft">
    <div class="muns">
      <div class="wrapper">
        <div class="menu-item" v-for="(item,index) in titles" :key="index">
          <span>{{item.type}}</span>
          <i class="el-icon-arrow-right"></i>
        </div>
      </div>
    </div>

    <h4>推荐城市</h4>

    <hr width="260" size="2" color="#aaa" />
    <div class="chengshi">
      <nuxt-link to="#">
        <img src="http://157.122.54.189:9093/images/pic_sea.jpeg" width="260px" height="173px" />
      </nuxt-link>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      // current: 0
      // tabPosition: "left"
      titles: []
    };
  },
  mounted() {
    this.$axios({
      url: "posts/cities"
    }).then(res => {
      // console.log(res)
      this.titles = res.data.data;
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
a {
  text-decoration: none;
  color: inherit;
}
.muns {
  height: 200px;
}
.wrapper {
  width: 260px;
  height: 165px;
  margin-bottom: 10px;
  border-top: 1px solid #ccc;
  border-left: 1px solid #ccc;
}
// border-right: 1px solid #666;
.menu-item {
  position: relative;
  display: flex;
  width: 219px;
  height: 40px;
  border-right: 1px solid #ccc;
  border-bottom: 1px solid #ccc;
  padding: 0 20px;
  font-size: 14px;
  line-height: 40px;
}
i {
  position: absolute;
  right: 20px;
  top: 12px;
}
.menu-item:hover {
  color: orange;
}
.active {
  color: orange;
  border-color: orange;
}

// 图片
.chengshi {
  width: 260px;
  height: 173px;
  margin-top: 20px;
}
img {
  width: 100%;
}
</style>


