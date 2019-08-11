<template>
  <div class="lvyou">
    <!-- 新闻部分 -->
    <div
      class="post-item"
      v-for="(item,index) in citiesarr"
      :key="index"
      @click="xinwenclick(id)"
      v-show="item.images.length<=2"
    >
      <img :src="item.images[0]" alt />

      <div class="post-content">
        <h4 title=" 远东行：用好奇心打量这座城 —— 最值得收藏的海参崴出行攻略" class="post-title">
          <a href>{{item.title}}}</a>
        </h4>
        <p class="post-desc">
          <a href class="post_a">{{item.summary}}</a>
        </p>
        <div class="post-info">
          <div class="post-info-left">
            <span>
              <i class="el-icon-location-outline"></i>
              {{item.cityName}}
            </span>
            <div class="post-user el-row is-align-middle el-row--flex">
              by
              <a href="/user/personal" class>
                <img
                  src="http://157.122.54.189:9095/assets/images/avatar.jpg"
                  width="26px"
                  height="26px"
                />
              </a>
              <a href="/user/personal" class="post-user-mane">{{item.account.nickname}}</a>
            </div>
            <div class="post-info-left-zan">
              <i class="el-icon-view"></i>
              {{item.likeIds}}
            </div>
          </div>
          <span class="post-info-right">{{item.like}}赞</span>
        </div>
      </div>
    </div>
    <!-- dfhjkfghjk -->
    <el-row
      class="lvyou-imga"
      v-for="(item,index) in citiesarr"
      :key="index"
      @click="xinwenclick(id)"
      v-show="item.images.length>=3"
    >
      <el-row>
        <a href="#" class="lvyou-rowb">{{item.title}}</a>
      </el-row>
      <el-row class="lvyou-rowc">
        <a href="#" class="lvyou-rowc">{{item.summary}}</a>
      </el-row>
      <el-row>
        <img :src="item.images[0]" alt />
      </el-row>
      <el-row class="lvyou-rowd">
        <el-col :span="6">
          <span>
            <i class="el-icon-location-outline"></i>
            {{item.cityName}}
          </span>
        </el-col>
        <el-col :span="14" class="logo">
          <a href="/user/personal">
            <img
              src="http://157.122.54.189:9095/assets/images/avatar.jpg"
              width="26px"
              height="26px"
            />
          </a>
          <a href="/user/personal" class="post-user-mane">{{item.account.nickname}}</a>
        </el-col>
        <el-col :span="4">33</el-col>
      </el-row>
    </el-row>

    <!-- 分页部分 -->
    <el-pagination
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
      :current-page="pageIndex"
      :page-sizes="[4, 8, 12, 16]"
      :page-size="pageSize"
      layout="total, sizes, prev, pager, next, jumper"
      :total="total"
    ></el-pagination>
  </div>
</template>
<script>
export default {
  data() {
    return {
      citiesarr: [],
      // imgarr:[],
      // 保存当前显示的列表数据
      //   dataList: [],
      // 当前页数
      pageIndex: 8,
      // 显示的条数
      pageSize: 3,
      // 总条数
      total: 16
      //保存数据
    };
  },
  methods: {
    xinwenclick(id) {
      // const id=this.citiesarr.id
      this.$router.push({
        path: `/post/detail`,
        query: id
      });
    },
    //改变分页条数时触发
    handleSizeChange(value) {},
    //切换页数时触发
    handleCurrentChange(value) {}
  },
  mounted() {
    this.$axios({
      url: "posts"
    }).then(res => {
      console.log("123", res);
      //   console.log("fghjkl",res)
      // console.log('ai', res.data.data[0].children);

      this.citiesarr = res.data.data;
      // this.imgarr=this.citiesarr.images
      // console.log('数据111',this.citiesarr )
    });
  }
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
.post-item {
  position: relative;
  width: 100%;
  height: 190px;
  padding: 20px 0;
  border-bottom: 1px solid #ccc;
  img {
    width: 100%;
    display: block;
    width: 220px;
    height: 150x;
  }

  .post-content {
    position: absolute;
    right: 0;
    top: 23px;
    width: 470px;
    height: 145px;
    // border: 1px solid red;
  }
  h4 {
    font-weight: normal;
    font-size: 16px;
    a:hover {
      color: orange;
    }
  }
  .post-desc {
    line-height: 1.5;
    margin-bottom: 10px;
    height: 63px;
    font-size: 14px;
    overflow: hidden;
    margin-top: 10px;
    .post_a {
      font-size: 14px;
      color: #666;
    }
  }
  .post-info {
    position: relative;
    height: 26px;
    width: 100%;
    margin-top: 15px;
    line-height: 26px;
    .post-info-left {
      position: relative;
      width: 280px;
      height: 26px;
      .post-user {
        position: absolute;
        left: 70px;
        top: 0;
        font-size: 12px;
        width: 100px;
        img {
          width: 100%;
          width: 26px;
        }
      }
      .post-user-mane {
        color: orange;
      }
      .post-info-left-zan {
        position: absolute;
        top: 0;
        right: 0;
        width: 70px;
        padding-left: 10px;
      }
    }

    .post-info-right {
      position: absolute;
      right: 0;
      top: 0;
      display: block;
      width: 40px;
      color: orange;
      font-size: 16px;
      height: 26px;
    }
  }
}
.lvyou-imga {
  border-bottom: 1px solid #ccc;
  padding: 15px 0;
  height: 300px;
  img {
    width: 220px;
    height: 145px;
    // width: 100%;
  }
  .lvyou-rowb {
    overflow: hidden;
    height: 30px;
    :hover {
      color: orange;
    }
  }
}
.lvyou-rowc {
  height: 60px;
  overflow: hidden;
  font-size: 14px;
  color: #666;
  margin: 10px 0;
}
.lvyou-rowd {
  height: 26px;
  line-height: 26px;
  .logo {
    // margin-top: 5px;
    a {
      font-size: 14px;
      line-height: 26px;
    }
  }
  img {
    height: 26px;
    width: 26px;
  }
}
</style>