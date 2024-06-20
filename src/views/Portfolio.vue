<script>
import PortfolioCard from '../components/PortfolioCard.vue'

export default {
  components: { PortfolioCard },
  data() {
    return {
      navArr: [
        { name: '首頁', path: '/' },
        { name: '作品集', path: '/portfolio' },
        { name: '服務項目', path: '/services' },
        { name: '部落格', path: '/blog' },
        { name: '聯絡我', path: '/contact' }
      ],
      portfolioArr: [
        {
          title: '星際旅行訂票平台',
          subTitle: '悠遊宇宙的夢想，從這裡開始實現',
          tags: ['網頁設計', '響應式設計', 'Bootstrap'],
          img: 'work-image1.png'
        },
        {
          title: '理財App',
          subTitle: '連動帳戶與行動支付，讓 AI 提供您最好的理財建議',
          tags: ['APP設計', 'iOS', 'React'],
          img: 'work-image2.png'
        },
        {
          title: '醫美診所官網',
          subTitle: '永保青春的秘密，從粹究開始',
          tags: ['網頁設計', '響應式設計', 'WordPress'],
          img: 'work-image3.png'
        },
        {
          title: '美美美早餐店 POS 機 UI Design',
          subTitle: '訂單送單一目瞭然，自動報表分析好輕鬆',
          tags: ['UI 設計', '前端開發', 'Wix'],
          img: 'work-image4.png'
        },
        {
          title: '電影院訂票系統',
          subTitle: '三步驟完成訂票，電腦手機都支援',
          tags: ['前端開發', '後端支援', 'Vue'],
          img: 'work-image5.png'
        },
        {
          title: '巧克巧克形象官網設計',
          subTitle: '三步驟完成訂票，電腦手機都支援',
          tags: ['UI設計', '設計系統', '網路電商'],
          img: 'work-image6.png'
        }
      ]
    }
  }
}
</script>

<template lang="pug">
#portfolio
  section.title
    .topArea
      .sentence
        p
          span 讓使用者在觀賞與使用的旅程中，發現
          span.point 設計的價值
        p
          span 而我在設計與開發的過程中，看見
          span.point 自己的價值
    .bottomArea
      .block
        p.title 2B經驗
        p 內部監控系統、庫存系統、採購系統、行銷整合系統
      .block
        p.title 2C經驗
        p 跨國美妝保養電商、個人品牌網站、醫美網站、電子商務
  section.content
    .work
      template(v-for='(item, id) in portfolioArr' :key='id')
        PortfolioCard(:cardInfo='item')
    .pagination
      button.active 1
      button 2
      button 3
</template>
