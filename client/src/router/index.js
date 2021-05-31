import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'


Vue.use(VueRouter)

const routes = [{
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/User',
    name: 'User',
    meta: {
      requireAuth: true,
    },
    redirect: {
      name: "Uhome"
    },
    component: () => import('../views/User.vue'),
    children: [{
        path: '/User/Uhome',
        name: "Uhome",
        component: () => import('../views/User-home.vue'),
        // children: [{
        //   path: '/User/Uhome/Video',
        //   component: () => import('../views/User-video.vue'),
        // }]
      },
      {
        path: "/User/Dynamic",
        name: "Dynamic",
        component: () => import('../views/User-dynamic.vue'),
      },
      {
        path: "/User/Conttribute",
        name: "Conttribute",
        redirect: {
          name: "Postvideo"
        },
        component: () => import('../views/User-conttribute.vue'),
        children: [{
            path: "/User/Conttribute/Postvideo",
            name: "Postvideo",
            component: () => import("../views/Conttri-video.vue"),
          },
          {
            path: "/User/Conttribute/Postpicture",
            name: "Postpicture",
            component: () => import("../views/Conttri-picture.vue"),
          }
        ]
      },
      {
        path: "/User/Collection",
        name: "Collection",
        component: () => import("../views/User-collection.vue"),
      }
    ]
  },
  {
    path: '/MapGl',
    name: 'MapGl',
    component: () => import('../views/MapGl.vue'),
  },
  {
    path: "/video",
    name: "Video",
    component: () => import('../views/Video.vue'),
  },
  {
    path: "/Graphics",
    name: "Graphics",
    component: () => import('../views/Graphics.vue'),
  },
  {
    path: "/Appreciate",
    name: "Appreciate",
    component: () => import('../views/Appreciate.vue'),
  },
  {
    path: "/Knowledge",
    name: "Knowledge",
    component: () => import("../views/Knowledge.vue")
  },
  {
    path: "/Mine",
    name: "Mine",
    component: () => import("../views/Mine.vue")
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach((to, from, next) => {
  const flag = to.matched.some(need => need.meta.requireAuth);
  if(flag) {
    const token = localStorage.getItem("token");
    if(token) {
      next();
    }else {
      const isGo = window.confirm("需要登录才能访问此页面，是否去登陆");
      if(isGo) {
        next({
          path: "/"
        })
      }else {
        next(false);
      }
    }
  }else {
    next();
  }
})

export default router