<template>
  <div class="zhuye-lvyou clearfix">
    <div class="zhuye-left clearfix">
      <LvyouLeft />
    </div>
    <div class="zhuye-right clearfix">
      <LvyouRight />

      <!-- 热门旅游 -->
      <LvyouXinwen />
    </div>
  </div>
</template>
<script>
import LvyouLeft from "../../components/post/lvyouLeft.vue";
import LvyouRight from "../../components/post/lvyouRight.vue";
import LvyouXinwen from "../../components/post/lvyouXinwen.vue";
export default {
  data() {
    return {
      //  citiesarr:{},
    };
  },
  components: {
    LvyouLeft,
    LvyouRight,
    LvyouXinwen
  },

  mounted() {},
  methods: {}
};
</script>


<style lang="less" scoped>
.clearfix::after {
  content: "";
  clear: both;
  display: block;
  visibility: hidden;
  line-height: 0;
}
.zhuye-lvyou {
  width: 1000px;
  // height: 100%;
  margin: 20px auto;
  .zhuye-left {
    width: 260px;
    float: left;
  }
  .zhuye-right {
    width: 700px;
    float: right;
  }
}
</style>