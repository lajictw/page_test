import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import test from '@/components/test'
import containerT from '@/components/containerT'
import containerT2 from '@/components/containerT2'
import echarts from '@/components/echarts'
import echartsT from '@/components/echartsT'
import echartsT2 from '@/components/echartsT2'
import main from '@/components/main'
import menuTest from '@/components/menuTest'
import Home from '@/components/Home'
import Dataset from '@/components/Dataset'
import tableTest from '@/components/tableTest'
import Generation from '@/components/Generation'
import Leaderboard from '@/components/Leaderboard'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/Home',
      name: 'Home',
      component: Home
    },
    {
      path: '/Leaderboard',
      name: 'Leaderboard',
      component: Leaderboard
    },
    {
      path: '/tableTest',
      name: 'tableTest',
      component: tableTest
    },
    {
      path: '/Dataset',
      name: 'Dataset',
      component: Dataset
    },
    {
      path: '/Generation',
      name: 'Generation',
      component: Generation
    },
    {
      path: '/main',
      name: 'main',
      component: main
    },
    {
      path: '/menuTest',
      name: 'menuTest',
      component: menuTest
    },
    {
      path: '/test',
      name: 'test',
      component: test
    },
    {
      path: '/ct',
      name: 'ctest',
      component: containerT
    },
    {
      path: '/ct2',
      name: 'ct2',
      component: containerT2
    },
    {
      path: '/et',
      name: 'et',
      component: echarts
    },
    {
      path: '/etc',
      name: 'etc',
      component: echartsT
    },
    {
      path: '/etc2',
      name: 'etc2',
      component: echartsT2
    }
  ]
})


