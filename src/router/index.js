import Vue from 'vue'
import Router from 'vue-router'
import Main from '@/components/main'
import myVue from '@/components/lee/myVue'
import Home from '@/components/home'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: Main,
      children:[
        {
          path: '/',
          name: 'home',
          component:Home
        },
        {
          path: 'lee',
          name: 'myVueName',
          component: myVue
        },
        {
          path: 'test',
          name: 'mytest',
          component: {
            template:'<div>mytest</div>'
          }
        },
        {
          path: 'setting',
          name: 'setting_page',
          component: {
            template:'<div>设置页面</div>'
          }
        },
        {
          path: 'project/:project',
          name: 'project_page',
          component: {
            template:'<div>项目页面 {{this.$route.params.project}}</div>'
          }
        },
        {
          path: 'project/:project/:page',
          name: 'p_suit_page',
          component: {
            template:'<div>项目页面{{this.$route.params.project}} {{this.$route.params.page}}</div>'
          }
        },
        {
          path: 'method/:method',
          name: 'method_page',
          component: {
            template:'<div>辅助方法页面{{this.$route.params.method}}</div>'
          }
        },
        {
          path: 'method/:method/:page',
          name: 'm_method_page',
          component: {
            template:'<div>辅助方法页面 {{this.$route.params.method}} {{this.$route.params.page}}</div>',
            script: ''
          }
        } 
      ]
    }]
})
