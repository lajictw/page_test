<template>
  <el-container>
    <el-aside width="200px">
      <el-menu :default-openeds="['1', '3']">
        <el-submenu index="1">
          <template slot="title">
            <i class="el-icon-message"></i>导航一
          </template>
          <el-menu-item-group>
            <template slot="title">分组一</template>
            <el-menu-item index="1-1">选项1</el-menu-item>
            <el-menu-item index="1-2">选项2</el-menu-item>
          </el-menu-item-group>
          <el-menu-item-group title="分组2">
            <el-menu-item index="1-3">选项3</el-menu-item>
          </el-menu-item-group>
          <el-submenu index="1-4">
            <template slot="title">选项4</template>
            <el-menu-item index="1-4-1">选项4-1</el-menu-item>
          </el-submenu>
        </el-submenu>
        <el-submenu index="2">
          <template slot="title">
            <i class="el-icon-menu"></i>导航二
          </template>
          <el-menu-item-group>
            <template slot="title">分组一</template>
            <el-menu-item index="2-1">选项1</el-menu-item>
            <el-menu-item index="2-2">选项2</el-menu-item>
          </el-menu-item-group>
          <el-menu-item-group title="分组2">
            <el-menu-item index="2-3">选项3</el-menu-item>
          </el-menu-item-group>
          <el-submenu index="2-4">
            <template slot="title">选项4</template>
            <el-menu-item index="2-4-1">选项4-1</el-menu-item>
          </el-submenu>
        </el-submenu>
        <el-submenu index="3">
          <template slot="title">
            <i class="el-icon-setting"></i>导航三
          </template>
          <el-menu-item-group>
            <template slot="title">分组一</template>
            <el-menu-item index="3-1">选项1</el-menu-item>
            <el-menu-item index="3-2">选项2</el-menu-item>
          </el-menu-item-group>
          <el-menu-item-group title="分组2">
            <el-menu-item index="3-3">选项3</el-menu-item>
          </el-menu-item-group>
          <el-submenu index="3-4">
            <template slot="title">选项4</template>
            <el-menu-item index="3-4-1">选项4-1</el-menu-item>
          </el-submenu>
        </el-submenu>
      </el-menu>
    </el-aside>
    <el-container>
      <el-header>
        <el-row :gutter="20">
          <el-col :span="6" :offset="16">
            <el-input
              type="text"
              placeholder="请输入搜索内容"
              v-model="text"
              maxlength="15"
              show-word-limit
            ></el-input>
          </el-col>
          <el-col :span="2">
            <el-button type="primary" icon="el-icon-search" @click="getSerach">搜索</el-button>
          </el-col>
        </el-row>
      </el-header>

      <el-main>
        <!-- <el-carousel :interval="5000" arrow="always" height="700px"> -->
        <el-carousel :interval="5000" type="card" height="450px">
          <!-- <el-carousel-item v-for="item in imgList" :key="item"> -->
          <el-carousel-item v-for="(item,index) in 4" :key="item">
            <!-- <h3>{{ item }}</h3> -->
            <!-- <img :src="item" alt /> -->
            <!-- <img :src="require('../assets/'+item+'.png')" alt /> -->
            <h3></h3>
            <div class="rno-1-logo-case">
              <el-image
                style="width: 100%; height: 100%"
                :src="getImgUrl(imgList[index], 'jpg')"
                fit="contain"
              ></el-image>
            </div>
          </el-carousel-item>
        </el-carousel>
        <EC :text="subText" :dataLists="dataList"></EC>
      </el-main>
    </el-container>
  </el-container>
</template>



<style>
/* 容器布局 */
.el-header {
  background-color: #b3c0d1;
  color: #333;
  line-height: 60px;
}

.el-aside {
  color: #333;
}
/* 跑马灯布局 */
.el-carousel__item h3 {
  color: #475669;
  font-size: 18px;
  opacity: 0.75;
  line-height: 300px;
  margin: 0;
  /* width: 1500px; */
}
img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
</style>


<script>
import axios from "axios";
export default {
  data() {
    return {
      text: "",
      subText: null,
      imgList: ["1.jpg", "2.jpg", "3.jpg", "0.jpg"],
      dataList: [],
    };
  },

  components: {
    EC: () => import("./echartsT.vue"),
  },
  methods: {
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
    getSerach() {
      this.subText = this.text;
      axios.post(`/pmc/test?name=${this.subText}`).then((res) => {
        this.dataList = res.data;
        // console.log(res.data);
        // this.dataList = res.data.dataList;
        // this.links = res.data.links;
        // this.$nextTick(() => {
        //   this.myET();
        // });
      });
      // console.log(this.text);
    },
  },
};
</script>