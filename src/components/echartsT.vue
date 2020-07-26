<template>
  <div class="ET">
      <!-- 设置长宽分别为1600px和1000px -->
    <div id="main" style="width: 1600px;height:1000px;"></div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {

      dataList: null,
      links: null,
    };
  },
//   监听containerT中的dataLists字段
  watch: {
    dataLists() {
      //   console.log(this.text);
      this.dataList = this.dataLists.dataList;
      this.links = this.dataLists.links;
    //   根据category值进行分类讨论，如果是2则直接跳转到对应文章（目前为跳转至百度），否则仅更新引力图
      this.dataList.map((e) => {
        if (e.name == this.text) {
          if (e.category == 2) {
            window.open("https://www.baidu.com/s?ie=UTF-8&wd=" + this.text);
          } else {
            this.$nextTick(() => {
              this.myET();
            });
          }
        }
      });
    },
    // text() {
    //   let category = null;
    //   //   console.log(this.dataList);
    //   this.dataList.map((e) => {
    //     // console.log(e);
    //     if (e.name == this.text) {
    //       //   console.log(e.category);
    //       category = e.category;
    //     }
    //   });
    //   this.$nextTick(() => {
    //     this.getData(this.text, category);
    //   });
    //   //   console.log(111);
    // },
  },
//   初始化，使用不带参的方式访问接口，获取初始化值
  created() {
    axios.post("/pmc/test").then((res) => {
      this.dataList = res.data.dataList;
      this.links = res.data.links;
      this.$nextTick(() => {
        this.myET();
      });
    });
    //   this.dataLi
  },
  methods: {
    //  我真的不知道这个echarts具体怎么实现的qaq
    // 但他确实工作状况正常
    // 构建这个echarts需要2个字段，datalist字段和links字段
    // datalist字段分为name category draggable 3项
    // name为圆形中显示的字符
    // category值一个是用于颜色区分，一个是作为是否跳转文章的依据 
    // draggable设置为true就好
    // links字段分为source targert value
    // source target表示关系的发出者与接收者
    // value为关系名
    myET() {
      // 基于准备好的dom，初始化echarts实例
      var myChart = this.$echarts.init(document.getElementById("main"));
      var option = {
        title: {
          text: "",
        },
        tooltip: {},
        animationDurationUpdate: 1500,
        animationEasingUpdate: "quinticInOut",
        label: {
          normal: {
            show: true,
            textStyle: {
              fontSize: 12,
            },
          },
        },
        legend: {
          x: "center",
          show: false,
          data: ["夫妻", "战友", "亲戚"],
        },
        series: [
          {
            type: "graph",
            layout: "force",
            symbolSize: 45,
            focusNodeAdjacency: true,
            roam: true,
            categories: [
              {
                name: "夫妻",
                itemStyle: {
                  normal: {
                    color: "#FF0000",
                  },
                },
              },
              {
                name: "战友",
                itemStyle: {
                  normal: {
                    color: "#4592FF",
                  },
                },
              },
              {
                name: "亲戚",
                itemStyle: {
                  normal: {
                    color: "#8B008B",
                  },
                },
              },
            ],
            label: {
              normal: {
                show: true,
                textStyle: {
                  fontSize: 12,
                },
              },
            },
            force: {
              repulsion: 1000,
            },
            edgeSymbolSize: [4, 50],
            edgeLabel: {
              normal: {
                show: true,
                textStyle: {
                  fontSize: 10,
                },
                formatter: "{c}",
              },
            },
            data: this.dataList,
            links: this.links,
            lineStyle: {
              normal: {
                opacity: 0.9,
                width: 1,
                curveness: 0,
              },
            },
          },
        ],
      };
      // 使用刚指定的配置项和数据显示图表。
      myChart.setOption(option);
// 图标可点击设置，首先获取点击圆形的name和category，再调用getData函数
      myChart.on("click", (params) => {
        console.log(params);
        var name = params.name;
        var category = params.data.category;
        this.getData(name, category);
        // let params = {
        //   name: name,

        // };
        // console.log(name, category);
      });
    },
    // 如果点击的圆形的category值为1，则根据名字请求后端接口，更新引力图
    // 若为2，则进行页面跳转
    getData(name, category) {
      if (category == 1) {
        axios.post(`/pmc/test?name=${name}`).then((res) => {
          //   console.log(res);
          this.dataList = res.data.dataList;
          this.links = res.data.links;
          console.log(this.dataList);
          this.$nextTick(() => {
            this.myET();
          });
        });
      } else if (category == 2)
        window.open("https://www.baidu.com/s?ie=UTF-8&wd=" + name);
    },
  },
  props: {
    text: String,
    dataLists: [Array, Object],
  },
  //   mounted() {
  //     this.myET();
  //   },
};
</script>