import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import test from '@/components/test'
import containerT from '@/components/containerT'
import containerT2 from '@/components/containerT2'
import echarts from '@/components/echarts'
import echartsT from '@/components/echartsT'
import echartsT2 from '@/components/echartsT2'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/test',
      name: 'test',
      component: test
    },
    {
      path: '/ct',
      name: 'test',
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


