<template>
  <div class="hotel_list">
    <el-row type="flex">
      <el-col :span="8" style="width:320px;height:210px">
        <nuxt-link :to="{path:'hotel/detail',query:{id:data.id}}">
          <img
            :src="data.photos"
            width="100%"
            height="100%"
          />
        </nuxt-link>
      </el-col>
      <el-col :span="10">
        <h4>
          <nuxt-link to="/hotel">{{data.name}}</nuxt-link>
        </h4>
        <div class="hotel-en-name">
          <span>{{data.alias}}</span>
          <span class="hotel-gaung">
            <i class="iconfont iconhuangguan"></i>
            <i class="iconfont iconhuangguan"></i>
            <i class="iconfont iconhuangguan"></i>
          </span>
          <span>{{data.hoteltype.name}}</span>
        </div>
        <el-row type="flex">
          <el-col :span="10">
            <el-rate
              v-model="data.stars"
              disabled
              show-score
              text-color="#ff9900"
            ></el-rate>
          </el-col>
          <el-col :span="7">
            <span>{{data.all_remarks}}</span>
            条评价
          </el-col>
          <el-col :span="7">
            <span>{{data.bad_remarks}}</span>
            篇游记
          </el-col>
        </el-row>
        <div class="localtion" @click="haha">
          <i class="iconfont iconlocation"></i>
          {{data.address}}
        </div>
      </el-col>
      <el-col :span="6"></el-col>
    </el-row>
  </div>
</template>
<script>
export default {
  props: {
    data: {
      type: Object,
      default: {}
    }
  },
  data() {
    return {
     
    };
  },
  methods: {
    haha(){
      this.$emit('hotels',{id:1,city:'74'},res=>{
        console.log(res)
      })
    }
  },

  mounted() {
    
  }
};
</script>
<style lang="less" scoped>
.hotel_list{
  .hotel-en-name{
    .hotel-gaung{
      color:#ff9900;
    }
  }
}
</style>
