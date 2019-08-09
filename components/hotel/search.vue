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
          v-model="searchForm.enterTime"
          type="daterange"
          range-separator="-"
          start-placeholder="入住日期"
          end-placeholder="离店日期"
        ></el-date-picker>
      </el-form-item>
      <!-- 入住人数 -->
      <el-form-item>
        <el-popover placement="bottom-start" width="350" v-model="visible">
          <el-row type="flex">
            <el-col :span="8">每间</el-col>
            <el-col :span="16">
              <el-row type="flex">
                <el-col :span="12">
                  <el-select v-model="v1" size="mini" @change="handleRen" placeholder="2成人">
                    <el-option v-for="(item,index) in options" :key="index" :value="item.value1"></el-option>
                  </el-select>
                </el-col>
                <el-col :span="12">
                  <el-select v-model="v2" size="mini" @change="handleChild" placeholder="0儿童">
                    <el-option v-for="(item,index) in options" :key="index" :value="item.value2"></el-option>
                  </el-select>
                </el-col>
              </el-row>
            </el-col>
          </el-row>
          <hr style="margin:20px 0"/>
          <div style="text-align: right; margin: 0">
            <el-button type="primary" size="mini" @click="visible = false">确定</el-button>
          </div>
          <el-input
            placeholder="人数未定"
            suffix-icon="el-icon-user"
            v-model="searchForm.person"
            slot="reference"
          ></el-input>
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
export default {
  data() {
    return {
      searchForm: {
        name: "",
        enterTime: "",
        person: null
      },
      visible: false,
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
      ],
      v1: "",
      v2: ""
    };
  },
  methods: {
    // 选择儿童触发
    handleChild(value) {
      this.v2 = value + "儿童";
    },
    // 选择成人数触发
    handleRen(value) {
      console.log(value);
      this.v1 = value + "成人";
    },
    // 每次输入都会触发
    queryDepartSearch(value, cb) {},
    // 选中地址酒店时触发
    handleDepartSelect() {},
    // 查看价格
    handleSubmit() {}
  }
};
</script>
<style lang="less" scoped>
</style>
