import Vue from 'vue'
import Router from 'vue-router'
import App from './App.vue'
import Post from './Post.vue'
import Hello from './Hello.vue'

Vue.use(Router)

const router = new Router({
  routes: [
    {
      path: '/',
      name:'home',
      component: Hello,
    },
    {
      path: '/post/:id',
      name:'post',
      component: Post,
      props: true,
    },
  ]
})

new Vue({
  el: '#app',
  render: h => h(App),
  router
})
