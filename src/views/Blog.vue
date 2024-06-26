<script>
import AllBlogArticle from '../components/AllBlogArticle.vue'
//- import BlogCard from '../components/BlogCard.vue'
import articleData from '@/data/articles.json'

export default {
  components: { AllBlogArticle },
  data() {
    return {
      blogArr: articleData,
      blogNav: ['全部文章', 'UI/UX 新知', '數位產品設計', '平面設計', '前端開發'],
      currentTag: '全部文章',
      swiperOption: {
        speed: 1000,
        slidesPerView: 3,
        spaceBetween: 24,
        pagination: { clickable: true },
        loop: true,
        autoplay: {
          pauseOnMouseEnter: true,
          waitForTransition: true
        },
        dataSwiperAutoplay: 1800
      }
    }
  },
  mounted() {
    this.blogArr = articleData.filter((item) => {
      return item.tag === this.currentTag
    })
    this.changeArticle(this.currentTag)
  },
  methods: {
    changeArticle(item) {
      this.currentTag = item

      if (this.currentTag === '全部文章') return (this.blogArr = articleData)
      this.blogArr = articleData.filter((item) => {
        return item.tag === this.currentTag
      })
    }
  }
}
</script>

<template lang="pug">
#blog
  section.blog.container
    h2.sectionTitle 部落格
    p.subtitle 不定期分享技術文章
    .container
      RouterView(:blogArr='blogArr')
      .blogNav
        ul
          li(v-for='(item, id) in blogNav' @click='changeArticle(item)')
            RouterLink.logo(to='/blog' :class='{ active: currentTag === item }') {{ item }}
  .container
    RouterView(name='OtherPaper' :swiperOption='swiperOption')
</template>
