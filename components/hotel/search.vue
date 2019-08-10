<template>
  <div class="search">
    <el-form :inline="true" :model="searchForm">
      <!-- 酒店地址 -->
      <el-form-item>
        <el-autocomplete
          :fetch-suggestions="queryDepartSearch"
          placeholder="目的地"
          @select="handleDepartSelect"
          class="el-autocomplete"
          v-model="searchForm.name"
        ></el-autocomplete>
      </el-form-item>
      <!-- 入住日期 -->
      <el-form-item>
        <el-date-picker
          v-model="searchForm.enterTimes"
          @change="handleDate"
          type="daterange"
          range-separator="-"
          start-placeholder="入住日期"
          end-placeholder="离店日期"
        ></el-date-picker>
      </el-form-item>
      <!-- 入住人数 -->
      <el-form-item>
        <el-popover placement="bottom-start" width="350" v-model="visible">
          <el-input
            placeholder="人数未定"
            suffix-icon="el-icon-user"
            v-model="searchForm.person"
            slot="reference"
          ></el-input>
          <el-row type="flex">
            <el-col :span="8">每间</el-col>
            <el-col :span="16">
              <el-row type="flex">
                <el-col :span="12">
                  <el-select
                    v-model="searchForm.v1"
                    size="mini"
                    @change="handleRen"
                    placeholder="2成人"
                  >
                    <el-option v-for="(item,index) in options" :key="index" :value="item.value1"></el-option>
                  </el-select>
                </el-col>
                <el-col :span="12">
                  <el-select
                    v-model="searchForm.v2"
                    size="mini"
                    @change="handleChild"
                    placeholder="0儿童"
                  >
                    <el-option v-for="(item,index) in options" :key="index" :value="item.value2"></el-option>
                  </el-select>
                </el-col>
              </el-row>
            </el-col>
          </el-row>
          <hr style="margin:20px 0" />
          <div style="text-align: right; margin: 0">
            <el-button type="primary" size="mini" @click="handlePerson">确定</el-button>
          </div>
        </el-popover>
      </el-form-item>
      <!-- 查询价格按钮 -->
      <el-form-item>
        <el-button type="primary" @click="handleSubmit">查看价格</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>
<script>
import moment from "moment";
export default {
  data() {
    return {
      searchForm: {
        name: "南京", //城市名
        nameId: 74, //城市id
        enterTimes: "", //入店时间跟离店时间 页面渲染的
        enterTime: "", //入店时间
        person: "请选择总人数", //这是渲染到页面上的
        persons: null, //这是我们需要拿到的总人数数据
        v1: "", //成人数
        v2: "" //儿童数
      },
      visible: false, //打开人数的隐藏框
      select: "",
      input3: "",
      options: [
        {
          value1: 1,
          value2: 0
        },
        {
          value1: 2,
          value2: 1
        },
        {
          value1: 3,
          value2: 2
        },
        {
          value1: 4,
          value2: 3
        },
        {
          value1: 5,
          value2: 4
        }
      ]
    };
  },
  methods: {
    // 选择日期的时候就触发 v是一个数组
    handleDate(v) {
      // console.log('选择日期',v)
      this.searchForm.enterTime = moment(v[0]).format("YYYY-MM-DD");
    },
    // 确定人数
    handlePerson() {
      // console.log('确定人数',this.v1,this.v2,this.searchForm.enterTime)
      if (!this.searchForm.v1) {
        this.$alert("请选择成人数量", "提醒亲,这是必须的", { type: "warning" });
        return;
      }
      if (!this.searchForm.v2) {
        this.$alert("选择儿童的数量", "提醒亲,没有就选择0", {
          type: "warning"
        });
        return;
      }
      let value1 = this.searchForm.v1.replace("成人", "");
      let value2 = this.searchForm.v2.replace("儿童", "");
      // console.log(value1,value2)
      this.searchForm.persons = +value1 + +value2;
      this.searchForm.person = "总人数是" + (+value1 + +value2);
      // console.log(this.searchForm.person)
      this.visible = false;
    },
    // 选择儿童触发
    handleChild(value) {
      this.searchForm.v2 = value + "儿童";
    },
    // 选择成人数触发
    handleRen(value) {
      // console.log(value);
      this.searchForm.v1 = value + "成人";
    },
    // 每次输入地址都会触发
    queryDepartSearch(value, cb) {
      if (!value) {
        cb([]);
        return;
      }
      // 获取城市地址
      this.$emit('cities',value,res=>{
        // console.log('获取城市地址',res)
        let { data } = res
        let newData = [];
        data.forEach(v => {
          v.value = v.name.replace("市", "");
          newData.push(v);
        });
        // console.log('城市',newData)
        this.searchForm.name = newData[0].value;
        this.searchForm.nameId = newData[0].sort;
        // console.log('城市',newData,this.searchForm.name,this.searchForm.nameId)
        cb(newData);
      })
    },
    // 选中地址时触发
    handleDepartSelect(v) {
      // console.log('选中地址',v)
      this.searchForm.name = v.name;
      this.searchForm.nameId = v.sort;
    },
    // 查看价格
    handleSubmit() {
      if (!this.searchForm.nameId) {
        this.$alert("请输入城市名", "必填", { type: "warning" });
        return;
      }
      if (!this.searchForm.enterTime) {
        this.$alert("请输住店时间", "必填", { type: "warning" });
        return;
      }
      if (!this.searchForm.persons) {
        this.$alert("请输总人数", "必填", { type: "warning" });
        return;
      }
      this.$emit(
        "getSearchData",
        this.searchForm.nameId,
        this.searchForm.enterTime,
        this.searchForm.persons
      );
      this.searchForm = {
        name: "", //城市名
        nameId: "", //城市id
        enterTimes: "", //入店时间跟离店时间 页面渲染的
        enterTime: "", //入店时间
        person: "请选择总人数", //这是渲染到页面上的
        persons: null, //这是我们需要拿到的总人数数据
        v1: "", //成人数
        v2: "" //儿童数
      };
    },
  },
  mounted() {
    this.$emit('getSearchData',this.searchForm.nameId,this.searchForm.name)
  }
};
</script>
<style lang="less" scoped>
</style>
