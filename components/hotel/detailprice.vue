<template>
  <div>
    <!-- 酒店价格 -->
<<<<<<< HEAD

    <el-table :data="products" style="width: 100%">
      <el-table-column prop="name" label="价格来源" width="420"></el-table-column>
      <el-table-column prop="bestType" label="低价房型" width="420"></el-table-column>
      <el-table-column prop="price" label="最低价/每晚"></el-table-column>
=======
    
    <el-table :data="tableData2" style="width: 100%">
      <el-table-column prop="products.name" label="价格来源" width="420"></el-table-column>
      <el-table-column prop="name" label="低价房型" width="420"></el-table-column>
      <el-table-column prop="address" label="最低价/每晚"></el-table-column>
>>>>>>> 969e0797e1904d731e147ec5d1af20aa384d9bfa
    </el-table>
  </div>
</template>
<script>
export default {
  // 接收父组件传来的数据
  props: {
    products: {
      type: Array,
<<<<<<< HEAD
      default: []
    }
=======
      default:[ ]
    }
  },

  mounted(){
    setTimeout(()=>{
 console.log(this.products)
    },1000)
    
  },

  // 酒店价格
  methods: {



    tableRowClassName({ row, rowIndex }) {
      if (rowIndex === 1) {
        return "warning-row";
      } else if (rowIndex === 3) {
        return "success-row";
      }
      return "";
    }
  },
  data() {
    return {
      tableData2: [
        {
          date: "携程",
          name: "高级大床房",
          address: "￥150起"
        },
        {
          date: "艺龙",
          name: "高级大床房",
          address: "￥600起"
        }
      ]
    };
>>>>>>> 969e0797e1904d731e147ec5d1af20aa384d9bfa
  }
};
</script>
<style lang="less" scoped>
<<<<<<< HEAD

.microcheiria{
  cursor:pointer
}


=======
>>>>>>> 969e0797e1904d731e147ec5d1af20aa384d9bfa
</style>
