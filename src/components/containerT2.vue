<template>
  <el-container>
    <!-- 头栏部分 -->
    <el-header>
      <el-row :gutter="20">
        <e1-col :span="3">
          <!-- 网站图标 -->
          <el-image
            style="width: 100%; height: 100%"
            :src="getImgUrl(imgList[index], 'jpg')"
            fit="contain"
          ></el-image>
        </e1-col>
        <e1-col :span="21">
          <div class="title">
            <el-row :gutter="20">
              <!-- 搜索框部分布局，在header部分空前16格，占6格（element ui24格布局样式） -->
              <el-col :span="5">
                <!-- 默认展示输出为“请输入搜索内容”，限制搜索词长度为15，限时长度限制 -->
                <h1 class="title-text">生物群体行为</h1>
              </el-col>
              <!-- 搜索按钮部分布局，占据搜索框后2格的位置（element ui24格布局样式） -->
              <el-col :span="6" :offset="11">
                <!-- 点击触发函数getSearch -->
                <el-button type="primary" icon="el-icon-search" @click="getSerach">搜索</el-button>
              </el-col>
              <el-col :span="2">
                <!-- 点击触发函数getSearch -->
                <el-button type="primary" icon="el-icon-search" @click="getSerach">搜索</el-button>
              </el-col>
            </el-row>
          </div>
        </e1-col>
      </el-row>

      <el-row :gutter="20">
        <el-col :span="2">
          <el-link href="https://www.baidu.com/" target="_blank">首页</el-link>
        </el-col>
        <el-col :span="2">
          <el-link href="https://www.baidu.com/" target="_blank">搜索</el-link>
        </el-col>
        <el-col :span="2">
          <el-link href="https://www.baidu.com/" target="_blank">APIS</el-link>
        </el-col>
        <el-col :span="2">
          <el-link href="https://www.baidu.com/" target="_blank">论文</el-link>
        </el-col>
        <el-col :span="2">
          <el-link href="https://www.baidu.com/" target="_blank">关于</el-link>
        </el-col>
      </el-row>
    </el-header>

    <!-- 主栏部分 -->
    <el-main></el-main>
  </el-container>
</template>

<style>
.title-text {
  font-weight: bold;
  font-size: 50px;
  font-family: "PingFang SC";
  color: rgb(0, 0, 0);
}
.title {
  background-image: url("../assets/0.jpg");
  width: 1100px;
  height: 100px;
  position: absolute;
  left: 225px;
  top: 0px;
}
</style>

<script>
export default {
    data() {
    return {
 
      imgList: ["4.jpg"]
  
    };
  },
  methods: {
      // getImgUrl方法，用于获取展示的图片的url信息，其中url对应图片名称，type分为png和jpg，
    // 路径写死为assets文件夹下，后期发生存放位置变更需更改2个const中的路径
    // png格式名字中无需带后缀，jpg格式需要带后缀
    getImgUrl(url, type) {
      if (type == "png") {
        const a = require("../assets/" + url + ".png");
        // console.log("a", a);
        return a;
      } else if (type == "jpg") {
        const b = require("../assets/" + url);
        // console.log("b", b);
        return b;
      }
    },
  }
}
</script>