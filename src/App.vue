<script>
import { RouterLink, RouterView } from 'vue-router'
import Footer from './components/Footer.vue'

export default {
  components: {
    Footer
  },
  data() {
    return {
      navArr: [
        { name: '首頁', path: '/' },
        { name: '作品集', path: '/portfolio' },
        { name: '服務項目', path: '/services' },
        { name: '部落格', path: '/blog' },
        { name: '聯絡我', path: '/contact' }
      ]
    }
  }
}
</script>

<template lang="pug">
  //- 導覽列
  .nav
    .container
      RouterLink.logo(to='/')
        img(src="/images/logo.svg", alt="logo")
      .menu
        RouterLink(v-for='(item, id) in navArr' :class='{ active: item.path ==  $route.path }' :to='item.path') {{ item.name }}
          .cornerGroup 
            .corner
            .corner
            .corner
            .corner
  //- 頁面內容
  RouterView
  //- 頁尾
  Footer
</template>

<style lang="sass">
@import '@/assets/main.sass'
</style>
