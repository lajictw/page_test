<template>
    <el-menu :default-active="this.$route.path" router mode="horizontal">
    <el-menu-item v-for="(item,i) in navList" :key="i" :index="item.name">
        {{ item.navItem }}
    </el-menu-item>
</el-menu>
</template>

<script>
export default{
    data() {
      return {
        navList:[
            {name:'/main',navItem:'发现项目'},
            
        ]
      };
    }
}


</script>