<template>
  <el-carousel indicator-position="outside">
    <el-carousel-item v-for="item in imgList" :key="item">
      <img :src="item" alt />
    </el-carousel-item>
  </el-carousel>
</template>

<script>
export default {
  data() {
    return {
      imgList: [
        "https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=3070367409,2968608489&fm=26&gp=0.jpg",
        "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1595334196482&di=115cb2ab6717429abdea11d26e5ce6cf&imgtype=0&src=http%3A%2F%2Fimage.codes51.com%2Farticle%2Fimage%2F20170504%2F20170504120505_2187.jpg"
      ]
    };
  }
};
</script>