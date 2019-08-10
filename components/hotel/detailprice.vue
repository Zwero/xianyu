<template>
  <div>
    <!-- 酒店价格 -->

    <el-table :data="products" style="width: 100%">
      <el-table-column prop="name" label="价格来源" width="420"></el-table-column>
      <el-table-column prop="bestType" label="低价房型" width="420"></el-table-column>
      <el-table-column prop="price" label="最低价/每晚"></el-table-column>
    </el-table>
  </div>
</template>
<script>
export default {
  // 接收父组件传来的数据
  props: {
    products: {
      type: Array,
      default: []
    }
  }
};
</script>
<style lang="less" scoped>

.microcheiria{
  cursor:pointer
}


</style>
