import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)


export default new Router({
  scrollBehavior(to, from, savePosition) { // 在点击浏览器的“前进/后退”，或者切换导航的时候触发。
    console.log(to.path);
    if (savePosition) {
      return savePosition;
    } else {
      var top;
      if (to.path === '/Home') {
        top = 0
      } else {
        if (window.innerWidth >= 700) {
          top = 142
        } else {
          top = 0
        }
      }
      return {
        x: 0,
        y: top
      }
    }
  },
  mode: 'history',
  routes: [{
    path: '/',
    component: resolve => require(['../pages/Home.vue'], resolve),
    meta: {
      auth: true
    },
    name: 'Home'
  }, //首页
    {
      path: '/home',
      component: resolve => require(['../pages/Home.vue'], resolve),
      meta: {
        auth: true
      },
      name: 'Home'
    }, //首页
    {
      path: '/share',
      component: resolve => require(['../pages/Share.vue'], resolve),
      meta: {
        auth: true
      },
      name: 'Share'
    }, //分类
    {
      path: '/detailShare',
      component: resolve => require(['../pages/DetailShare.vue'], resolve),
      meta: {
        auth: true
      },
      name: 'DetailShare'
    }, //分享详情
    {
      path: '/reward',
      component: resolve => require(['../pages/Reward.vue'], resolve),
      meta: {
        auth: true
      },
      name: 'Reward'
    }, //赞赏
    {
      path: '/friendsLink',
      component: resolve => require(['../pages/FriendsLink.vue'], resolve),
      meta: {
        auth: true
      },
      name: 'FriendsLink'
    }, //伙伴
    {
      path: '/message',
      component: resolve => require(['../pages/Message.vue'], resolve),
      meta: {
        auth: true
      },
      name: 'Message'
    }, //留言板
    {
      path: '/aboutme',
      component: resolve => require(['../pages/Aboutme.vue'], resolve),
      meta: {
        auth: true
      },
      name: 'Aboutme'
    }, //关于
    {
      path: '/login',
      component: resolve => require(['../pages/Login.vue'], resolve),
      meta: {
        auth: false
      },
      name: 'Login'
    }, //注册登录
    {
      path: '/userInfo',
      component: resolve => require(['../pages/UserInfo.vue'], resolve),
      meta: {
        auth: true
      },
      name: 'UserInfo'
    }, //用户个人中心
    {
      path: '/likeCollect',
      component: resolve => require(['../pages/LikeCollect.vue'], resolve),
      meta: {
        auth: true
      },
      name: 'LikeCollect'
    } //用户个人中心
  ]
})
