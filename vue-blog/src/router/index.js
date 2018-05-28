import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import AddNew from '@/components/AddNew'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/addnew',
      name: 'AddNew',
      component: AddNew
    }
  ]
})
