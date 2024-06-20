import { createRouter, createWebHistory } from 'vue-router'
import Index from '../views/Index.vue'
import Portfolio from '../views/Portfolio.vue'
import Services from '../views/Services.vue'
import Blog from '../views/Blog.vue'
import AllBlogArticle from '../components/AllBlogArticle.vue'
import Post from '../components/Post.vue'
import SwiperArticle from '../components/SwiperArticle.vue'
import Contact from '../views/Contact.vue'
import NotFound from '../views/404.vue'

let pages = [
  { path: 'portfolio', component: Portfolio },
  { path: 'services', component: Services },
  { path: 'contact', component: Contact }
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  scrollBehavior(to, from, savedPosition) {
    return { top: 0, behavior: 'smooth' }
  },
  routes: [
    {
      path: '/404',
      name: '404',
      component: NotFound
    },
    {
      path: '/:catchAll(.*)',
      redirect: '/404'
    },
    {
      path: '/',
      name: 'index',
      component: Index
    },
    {
      path: '/blog',
      name: 'blog',
      component: Blog,
      children: [
        {
          name: 'blog',
          path: '', // path 為空，父元件預設帶入
          component: AllBlogArticle
        },
        {
          name: 'posts',
          path: 'posts/:id',
          components: {
            default: Post,
            OtherPaper: SwiperArticle
          }
        }
      ]
    }
  ]
})

for (let i = 0; i < pages.length; i++) {
  router.addRoute({ path: `/${pages[i].path}`, component: pages[i].component })
}

export default router
