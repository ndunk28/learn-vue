import Vue from 'vue'
import Router from 'vue-router'
import HomePage from '@/components/HomePage'
import AboutPage from '@/components/AboutPage'
import ContactPage from '@/components/ContactPage'
import NotFoundPage from '@/components/NotFound'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      component: HomePage
    },
    {
      path: '/about',
      component: AboutPage
    },
    {
      path: '/contact',
      component: ContactPage
    },
    {
      // eslint-disable-next-line
      path: "*",
      component: NotFoundPage
    }
  ]
})
