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
          img: 'work-image1.png',
          websiteInfo: [
            'STAR TRAVEL 為 KK 公司宇宙旅行的購票網站。',
            '主要從地球出發，目的地包含月球、火星、水星、木星；未來太空轉運站建置完畢，將再擴增目的地土星和金星。'
          ],
          designPrinciple: '宇宙旅行、深色背景、強烈視覺效果',
          developmentMethod: 'Bootstrap、Javascript、RWD',
          websiteContent:
            "<figure><img src='./images/modal-image1.png'><h4>主視覺</h4><figcaption>可直接設定日期、起迄星球、張數，快速查詢可購買的票券。</figcaption></figure><figure><img src='./images/modal-image2.png'><h4>推薦查詢</h4><figcaption>給予最快起飛，以及最熱門的景點推薦，協助使用者進行選擇。</figcaption></figure>"
        },
        {
          title: '理財App',
          subTitle: '連動帳戶與行動支付，讓 AI 提供您最好的理財建議',
          tags: ['APP設計', 'iOS', 'React'],
          img: 'work-image2.png',
          websiteInfo: [
            '面對科技日新月異的變化，與對世界的巨大影響，主流風向早已定調機器人與人工智能。',
            '利用 AI 技術與數據分析，供客戶以人工智能輔助的方式買賣股票（或其他理財商品），進而創造比大盤平均還優的獲利表現。'
          ],
          designPrinciple: '數據呈現簡潔易懂、畫面簡約乾淨',
          developmentMethod: 'Figma、React、Javascript',
          websiteContent:
            "<figure><img src='./images/work-image2.png'><h4>主視覺</h4><figcaption>以藍色作為主調，配以簡潔易懂的數據呈現。</figcaption></figure>"
        },
        {
          title: '醫美診所官網',
          subTitle: '永保青春的秘密，從粹究開始',
          tags: ['網頁設計', '響應式設計', 'WordPress'],
          img: 'work-image3.png',
          websiteInfo: [
            '滿足您想要的，提供您沒想到的，無微不至的體貼，讓您備受尊寵，輕鬆變美麗，沒有壓力。'
          ],
          designPrinciple: '精緻專業、風格古典優雅',
          developmentMethod: 'Bootstrap、Javascript、RWD',
          websiteContent:
            "<figure><img src='./images/work-image3.png'><h4>主視覺</h4><figcaption>以精緻洗鍊的風格引導訪客閱讀網站資訊。</figcaption></figure>"
        },
        {
          title: '美美美早餐店 POS 機 UI Design',
          subTitle: '訂單送單一目瞭然，自動報表分析好輕鬆',
          tags: ['UI 設計', '前端開發', 'Wix'],
          img: 'work-image4.png',
          websiteInfo: [
            '從快速預約到高效結帳，再到全面的營收分析，為您的業務提供全方位的解決方案。',
            '讓業務經營變得更加輕鬆、高效，同時提升顧客滿意度。'
          ],
          designPrinciple: '深色背景、資訊呈現明確',
          developmentMethod: 'Figma、Javascript、RWD',
          websiteContent:
            "<figure><img src='./images/work-image4.png'><h4>主視覺</h4><figcaption>以深色背景呈現訂單資訊及相關營業報表。</figcaption></figure>"
        },
        {
          title: '電影院訂票系統',
          subTitle: '三步驟完成訂票，電腦手機都支援',
          tags: ['前端開發', '後端支援', 'Vue'],
          img: 'work-image5.png',
          websiteInfo: [
            '全台灣各縣市影城/戲院，威秀、美麗華、新光、喜樂時代、豪華in89、樂聲、喜滿客等逾四十家以上合作影城，院線電影場次時刻查詢與劃位。'
          ],
          designPrinciple: '以圖片引導視覺為主要目的、操作介面流暢不卡頓',
          developmentMethod: 'Vue、Javascript、RWD',
          websiteContent:
            "<figure><img src='./images/work-image5.png'><h4>主視覺</h4><figcaption>直接設定日期、地點、張數，快速訂購可購買的票券。</figcaption></figure>"
        },
        {
          title: '巧克巧克形象官網設計',
          subTitle: '來巧克，萬樣商品應有盡有',
          tags: ['UI設計', '設計系統', '網路電商'],
          img: 'work-image6.png',
          websiteInfo: [
            '全通路整合的新零售模式，為顧客創造完整而流暢的全通路體驗。',
            '點選商品圖片就可以看到該商品的介紹直播片段，找商品介紹超容易，還能直接下單購買。'
          ],
          designPrinciple: '淺色背景、高圖片畫質',
          developmentMethod: 'Figma、Javascript、RWD',
          websiteContent:
            "<figure><img src='./images/work-image6.png'><h4>主視覺</h4><figcaption>適度留白以凸顯照片提供的商品資訊。</figcaption></figure>"
        }
      ],
      modalState: {
        open: false
      }
    }
  },
  methods: {
    getPortfolio(item) {
      this.modalState = {
        open: true,
        ...item
      }
    },
    getModalState(val) {
      this.modalState.open = val
    }
  }
}
</script>

<template lang="pug">
#portfolio
  section.title
    .container
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
  section.content.container
    .work
      template(v-for='(item, id) in portfolioArr' :key='id')
        PortfolioCard(:cardInfo='item' @click='getPortfolio(item)')
      ModalDialog(:modalOpen='modalState.open' @openDialog='getModalState')
        section.websiteIntro
          .title
            h3 {{ modalState.title }}
            p {{ modalState.subTitle }} 
          .intro
            div
              p(v-for='info in modalState.websiteInfo') {{ info }}
            div
              p
                span 設計原則：{{ modalState.designPrinciple }}
              p
                span 開發方式：{{ modalState.developmentMethod }}
        section.websiteContent
          div(v-html='modalState.websiteContent')
    .pagination
      button.active 1
      button 2
      button 3
</template>
