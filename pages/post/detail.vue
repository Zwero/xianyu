<template>
  <div class="box">

      <!-- 面包屑 -->
    <el-breadcrumb separator="/" class="bread">
      <el-breadcrumb-item :to="{ path: '/post' }">旅游攻略</el-breadcrumb-item>
      <el-breadcrumb-item>攻略详情</el-breadcrumb-item>
    </el-breadcrumb>

    <!-- 侧边文章栏 -->
    <DetailTitleRight/>
    <!-- 详情内容 -->
    <div class="contents">
        文章内容
    </div>
  </div>
</template>

<script>
import DetailTitleRight from '@/components/post/detailTitleRight'
export default {
    components: {
        DetailTitleRight
    },
};
</script>
    
<style lang="less" scoped>
    .box {
        width: 1000px;  
        margin: 0 auto;
        margin-top: 20px;
        position: relative;
        height: 500px;
        .bread {
            width: 280px;
        }
        .titleListRight {
            position: absolute;
            top: 0;
            right: 0;
        }
    }
</style>

