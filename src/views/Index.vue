<script>
import ServiceItem from '../components/ServiceItem.vue'
import SwiperArticle from '../components/SwiperArticle.vue'

export default {
  components: {
    ServiceItem,
    SwiperArticle
  },
  data() {
    return {
      linkArr: [
        { img: 'ig', href: 'https://www.instagram.com/hexschool/' },
        { img: 'fb', href: 'https://www.facebook.com/hexschool' },
        { img: 'youtube', href: 'https://www.youtube.com/@hexschool' }
      ],
      portfolioArr: [
        {
          title: '星際旅行訂票平台',
          subTitle: '悠遊宇宙的夢想，從這裡開始實現',
          tagArr: ['網頁設計', '響應式設計', 'Bootstrap'],
          img: ['homepage-work1.png', 'homepage-work1-bg.png'],
          path: '/'
        },
        {
          title: '理財APP',
          subTitle: '連動帳戶與行動支付，讓 AI 提供您最好的理財建議',
          tagArr: ['APP設計', 'iOS', 'React'],
          img: ['homepage-work2-lg.png'],
          path: '/'
        },
        {
          title: '醫美診所官網',
          subTitle: '永保青春的秘密，從粹究開始',
          tagArr: ['網頁設計', '響應式設計', 'ＷordPress'],
          img: ['homepage-work3.png', 'homepage-work3-bg.png'],
          path: '/'
        }
      ],
      serviceArr: [
        { title: '平面設計', icon: 'design' },
        { title: 'UI設計', icon: 'ui' },
        { title: '切版服務', icon: 'htmlCss' },
        { title: '前端開發', icon: 'fronted' }
      ],
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
  }
}
</script>

<template lang="pug">
#index
  section.intro
    .introBox
      h1 Hi！我是 Noel
      .sentence
        p
          span 具有 10 年經驗的
          span.point 資深 UI 設計師
          span 兼
          span.point 前端工程師
        p
          span 技術雙修並行，熱衷於優化使用者的網頁體驗
      .subtitle
        span WEB DEVELOPMENT / BRANDING / UI / UX / APP DESIGN
      .others
        a(v-for='(item, id) in linkArr' :href='item.href' :aria-label='item.img' target='_blank')
          SvgIcon.icon(:name='item.img')
  section.portfolio
    h2.sectionTitle 作品介紹
    .webIntro(v-for='(item, id) in portfolioArr' :class='`case${id + 1}`')
      .bgImg(v-for='(img, imgId) in item.img')
        img(:src='"./images/" + img' :alt="img")
      .introCard
        h3.title {{ item.title }}
        .subTitle {{ item.subTitle }}
        .tagGroup
          .tag(v-for='(tag, tagId) in item.tagArr') {{ tag }}
        hr
        RouterLink.primaryBtn(to='portfolio')
          span 完整介紹
          SvgIcon(name='arrow')
  section.services
    h2.sectionTitle 服務項目
    .allService
      template(v-for='(item, id) in serviceArr')
        ServiceItem(:serviceInfo='item')
    h3 想要合作或瞭解更多？
    RouterLink.primaryBtn(to='services') 
      span 詳細內容與合作流程
      SvgIcon(name='arrow')
  section.featured
    h2.sectionTitle 精選文章
    SwiperArticle(:swiperOption='swiperOption')
    RouterLink.primaryBtn(to='blog')
      span 更多文章
      SvgIcon(name='arrow')
</template>
