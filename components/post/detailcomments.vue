<template>
  <div class="detailComments">
    <h4>评论</h4>
    <p>回复人id</p>
    <!-- 输入框 -->
    <div>
      <el-input
        type="textarea"
        placeholder="说点什么好吗"
        v-model="addForm.content"
        class="textInput"
        resize="none"
      ></el-input>
    </div>

    <!-- 上传图片 -->
    <el-row type="flex" class="row-bg imageUp" justify="space-between">
      <el-upload
        action="http://127.0.0.1:1337/upload"
        list-type="picture-card"
        :on-preview="handlePicture"
        :on-remove="handleRemove"
        :on-success="handleSuccess"
        :file-list="fileList"
        name="files"
      >
        <i class="el-icon-plus"></i>
      </el-upload>
      <el-dialog :visible.sync="dialogVisible">
        <img width="100%" :src="dialogImageUrl" alt />
      </el-dialog>
      <!-- // 提交按钮 -->
      <el-button type="primary" round class="buttonImages" @click="getCommentText">提交</el-button>
    </el-row>

    <!-- 留言板 -->
    <div class="message" v-if="this.total !== 0">
      <div class="messageHeader" v-for="(item, index) in messageText" :key="index">
        <img :src="$axios.defaults.baseURL + item.account.defaultAvatar" class="userImages" />
        {{item.account.nickname}}
        {{item.created_at | timeFormat}}
        <span
          @click="reply(item.id)"
        >回复</span>
        <p>{{item.content}}</p>
        <div v-for="(item, index) in item.pics" :key="index">
          <img :src="$axios.defaults.baseURL + item.url" class="messImg" />
        </div>
      </div>
    </div>
    <!-- 评论为空时显示 -->
    <div class="empty" v-else>暂无评论，赶紧抢占沙发！</div>

    <!-- 分页 -->
    <el-pagination
      @size-change="handleSize"
      @current-change="handleCurrent"
      :current-page="pageIndex"
      :page-sizes="[2, 4, 6, 8]"
      :page-size="pageSize"
      layout="total, sizes, prev, pager, next, jumper"
      :total="total"
      v-show="total!==0"
    ></el-pagination>
  </div>
</template>

<script>
import moment from "moment";
export default {
  data() {
    return {
      total: 2, // 总条数
      pageIndex: 1, // 当前页数
      pageSize: 2, // 显示条数

      messageText: [], // 评论数组
      addForm: {
        pics: [], // 图片地址
        post: this.$route.query.id, //文章id
        follow: 0, //回复id
        content: "" //输入框内容
      },

      fileList: [], // 上传的文件列表图片路径
      dialogVisible: false, //预览图片
      dialogImageUrl: [] // 预览的图片路径
    };
  },

  methods: {
    // 获取回复id
    reply(id) {
      console.log("回复id", id);
      this.addForm.follow = id;
      console.log("添加回复id ", this.addForm.follo);
    },
    // 分页
    // 切换条数触发
    handleSize(value) {
      // 修改分页条数
      this.pageSize = value;
      // console.log(value,'条数');

      // 获取分页的数据
      this.getComment();
    },
    //选择页数时触发
    handleCurrent(value) {
      // 修改页数
      this.pageIndex = value;
      // console.log(value,'页数');
      // 获取分页的数据
      this.getComment();
    },

    // 添加token值
    getToken() {
      return {
        Authorization: `Bearer ${this.$store.state.user.userInfo.token}`
      };
    },

    // 图片上传成功后的函数
    handleSuccess(response, file, fileList) {
      console.log(response[0], "图片上传成功后");
      this.addForm.pics.push(response[0]);
      console.log(this.addForm.pics, "图片数组");
    },

    // 预览时触发
    handlePicture(file, fileList) {
      this.dialogImageUrl = file.url;
      dialogVisible: true;
    },

    // 移除图片的时候触发
    handleRemove(file, fileList) {
      var out = file.response[0].url;
      console.log(this.addForm.pics);
      for (var i = 0; i < this.addForm.pics.length; i++) {
        if (this.addForm.pics[i] === out) {
          this.addForm.pics.splice(i, 1);
          break;
        }
      }
    },

    // 评论提交
    getCommentText() {
      console.log("要提交的数据", this.addForm);
      var data = this.addForm;
      console.log("回复提交的数据", data);
      this.$axios({
        url: "comments",
        method: "POST",
        data,
        headers: {
          Authorization: `Bearer ${this.$store.state.user.userInfo.token}`
        }
      }).then(res => {
        // console.log("成功了", res);
        // 清空记录
        this.addForm.pics = [];
        this.addForm.content = "";
        this.addForm.follow = "";
        this.getComment();
        this.pageSize = 1;
      });
    },

    // 获取文章评论
    getComment() {
      this.$axios({
        url: "posts/comments",
        params: {
          post: this.$route.query.id,
          // _sort // 排序
          // 总条数
          _limit: this.pageSize,
          // 每页显示2，显示第二页3-4
          // 每页显示的条数1,2;3-4；每页显示的条数3:0-3
          _start: (this.pageIndex - 1) * this.pageSize
        }
      }).then(res => {
        this.total = res.data.total;
        this.messageText = res.data.data;
        console.log("文章评论", this.messageText);
        // console.log(this.total, "长度");
        // console.log(res.data.total, "长度");
      });
    }
  },

  // 过滤毫秒转换格式
  filters: {
    // 日期格式
    timeFormat(value) {
      return moment(value).format("YYYY-MM-DD HH:mm:ss");
    }
  },

  watch: {
    $route() {
      this.getComment;
    }
  },

  mounted() {
    this.getComment();
  }
};
</script>

<style lang="less" scoped>
.detailComments {
  width: 700px;
  h4 {
    font-size: 18px;
    font-weight: normal;
    margin-bottom: 20px;
  }
  .imageUp {
    margin: 10px 0 30px 0;
    .buttonImages {
      height: 28px;
      line-height: 3px;
    }
  }
  // 留言板
  .message {
    height: 100px;
    border: 1px #cccccc solid;
    .messageHeader {
      span {
        margin-left: 20px;
        &:hover {
          color: aqua;
          cursor: pointer;
        }
      }
      padding: 20px 20px 5px;
      .userImages {
        width: 16px;
        height: 16px;
      }
      p {
        margin-left: 30px;
      }
    }
    .messImg {
      height: 40px;
    }
  }
  .empty {
    margin: 10px 0 10px;
    border: 1px dashed #ccc;
    padding: 20px;
    text-align: center;
    color: #999;
  }
}
</style>
