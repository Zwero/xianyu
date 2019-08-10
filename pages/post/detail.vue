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
        <DetailContent/>
    </div>
    <!-- 评论区 -->
    <div class="comments">
        <DetailComments/>
    </div>
  </div>
</template>

<script>
// 侧边栏
import DetailTitleRight from '@/components/post/detailTitleRight'
// 内容详情
import DetailContent from '@/components/post/detailcontent'
// 评论区
import DetailComments from '@/components/post/detailComments'

export default {
    components: {
        DetailTitleRight,
        DetailContent,
        DetailComments
    },
};
</script>
    
<style lang="less" scoped>
    .box {
        width: 1000px;  
        margin: 0 auto;
        margin-top: 20px;
        position: relative;
        min-height: 500px;
        .bread {
            width: 280px;
        }
        .titleListRight {
            position: absolute;
            top: 0;
            right: 0;
        }
        .contents {
            width: 700px;
        }
    }
</style>

