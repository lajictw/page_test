<template>
  <div class="ET">
    <div id="main" style="width: 1600px;height:1000px;"></div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      //   dataList: [
      //     {
      //       name: "徐贱云",
      //       draggable: true,
      //     },
      //     {
      //       name: "冯可梁",
      //       category: 1,
      //       draggable: true,
      //     },
      //     {
      //       name: "邓志荣",
      //       category: 1,
      //       draggable: true,
      //     },
      //     {
      //       name: "李荣庆",
      //       category: 1,
      //       draggable: true,
      //     },
      //     {
      //       name: "郑志勇",
      //       category: 1,
      //       draggable: true,
      //     },
      //     {
      //       name: "赵英杰",
      //       category: 1,
      //       draggable: true,
      //     },
      //     {
      //       name: "王承军",
      //       category: 1,
      //       draggable: true,
      //     },
      //     {
      //       name: "陈卫东",
      //       category: 1,
      //       draggable: true,
      //     },
      //     {
      //       name: "邹劲松",
      //       category: 1,
      //       draggable: true,
      //     },
      //     {
      //       name: "赵成",
      //       category: 1,
      //       draggable: true,
      //     },
      //     {
      //       name: "陈现忠",
      //       category: 1,
      //       draggable: true,
      //     },
      //     {
      //       name: "陶泳",
      //       category: 1,
      //       draggable: true,
      //     },
      //     {
      //       name: "王德福",
      //       category: 1,
      //       draggable: true,
      //     },
      //   ],
      //   links: [
      //     {
      //       source: 0,
      //       target: 1,
      //       category: 0,
      //       value: "夫妻",
      //     },
      //     {
      //       source: 0,
      //       target: 2,
      //       value: "子女",
      //     },
      //     {
      //       source: 0,
      //       target: 3,
      //       value: "夫妻",
      //     },
      //     {
      //       source: 0,
      //       target: 4,
      //       value: "父母",
      //     },
      //     {
      //       source: 1,
      //       target: 2,
      //       value: "表亲",
      //     },
      //     {
      //       source: 0,
      //       target: 5,
      //       value: "朋友",
      //     },
      //     {
      //       source: 4,
      //       target: 5,
      //       value: "朋友",
      //     },
      //     {
      //       source: 2,
      //       target: 8,
      //       value: "叔叔",
      //     },
      //     {
      //       source: 0,
      //       target: 12,
      //       value: "朋友",
      //     },
      //     {
      //       source: 6,
      //       target: 11,
      //       value: "爱人",
      //     },
      //     {
      //       source: 6,
      //       target: 3,
      //       value: "朋友",
      //     },
      //     {
      //       source: 7,
      //       target: 5,
      //       value: "朋友",
      //     },
      //     {
      //       source: 9,
      //       target: 10,
      //       value: "朋友",
      //     },
      //     {
      //       source: 3,
      //       target: 10,
      //       value: "朋友",
      //     },
      //     {
      //       source: 2,
      //       target: 11,
      //       value: "同学",
      //     },
      //   ],
      dataList: null,
      links: null,
    };
  },
  watch: {
    dataLists() {
      //   console.log(this.text);
      this.dataList = this.dataLists.dataList;
      this.links = this.dataLists.links;
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