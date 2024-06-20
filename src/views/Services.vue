<script>
import ServiceItem from '../components/ServiceItem.vue'
import PortfolioCard from '../components/PortfolioCard.vue'

export default {
  components: {
    ServiceItem,
    PortfolioCard
  },
  data() {
    return {
      serviceArr: [
        { title: '平面設計', icon: 'design' },
        { title: 'UI設計', icon: 'ui' },
        { title: '切版服務', icon: 'htmlCss' },
        { title: '前端開發', icon: 'fronted' }
      ],
      processArr: [
        {
          title: '初步接洽',
          content: [
            '透過表單或其他社群軟體與我聯絡',
            '根據難易度與複雜度，後續可能需要電話/線上討論'
          ]
        },
        { title: '需求釐清', content: ['透過訪談與問卷，解析客戶需求，並針對痛點給予實際建議'] },
        {
          title: '委託簽約',
          content: ['合約雙方用印後，即正式開始合作', '可提供發票或勞務報酬單，須支付 20% 訂金']
        },
        { title: '版本呈現', content: ['根據合約內容進行設計或開發'] },
        { title: '來回修正', content: ['依據合約規定之修正次數進行，次數計算以 mail 為準'] },
        { title: '終版確認', content: ['雙方同意後即為最終版'] },
        { title: '結案', content: ['客戶簽署驗收單，並於約定日期支付尾款'] }
      ],
      priceArr: [
        { icon: 'design', title: '平面設計', price: 6000 },
        { icon: 'ui', title: 'UI設計', price: 15000 },
        { icon: 'fronted', title: '前端開發', price: 22000 }
      ],
      portfolioArr: [
        {
          title: '美美美早餐店 POS 機 UI Design',
          subTitle: '訂單送單一目瞭然，自動報表分析好輕鬆',
          tags: ['UI 設計', '前端開發', 'Wix'],
          img: 'work-image4.png'
        },
        {
          title: '巧克巧克形象官網設計',
          subTitle: '三步驟完成訂票，電腦手機都支援',
          tags: ['UI設計', '設計系統', '網路電商'],
          img: 'work-image6.png'
        },
        {
          title: '電影院訂票系統',
          subTitle: '三步驟完成訂票，電腦手機都支援',
          tags: ['前端開發', '後端支援', 'Vue'],
          img: 'work-image5.png'
        },
        {
          title: '2023 餉茶坊飲料旗艦店活動官網設計',
          subTitle: '主打水果主題，冰鎮夏天暑氣',
          tags: ['網頁設計', '切版服務', 'Javascript'],
          img: 'work-image7.png'
        }
      ],
      problemArr: [
        {
          que: '時程很趕的話可以加快作業嗎？',
          ans: '每提早一天，只要支付總報價的 5%，我們即會視為急件為您趕工！'
        },
        { que: '白天可以開會討論嗎？', ans: '每週一三五的白天，可以約定開會時間！' },
        {
          que: '有實際開發的網站可以參考嗎？',
          ans: '請填寫表單或來信索取，部分合作有簽保密協定，無法於網路上公開喔。'
        },
        {
          que: '提供比稿服務嗎？',
          ans: '只要支付費用，設計提供比稿服務，但切版與前端開發恕不提供該服務內容。'
        }
      ]
    }
  }
}
</script>

<template lang="pug">
#service
  section.services
    h2.sectionTitle 服務項目
    .allService
      template(v-for='(item, id) in serviceArr')
        ServiceItem(:serviceInfo='item')
  section.process
    h2.sectionTitle 服務流程
    .allProcess
      .processCard(v-for='(item, id) in processArr')
        .card
          .icon.tourney {{ id + 1 }}
          .content
            h3 {{ item.title }}
            p(v-for='p in item.content') {{ p }}
        SvgIcon(name='arrow' v-if='(id + 1) !== processArr.length')
  section.price
    h2.sectionTitle 價格表
    ul
      li(v-for='(item, id) in priceArr')
        .title
          SvgIcon(:name='item.icon')
          h3 {{ item.title }}
        hr
        b
          .price(v-currency='item.price')
          span 起
  section.case
    h2.sectionTitle 客戶案例
    .work
      template(v-for='(item, id) in portfolioArr' :key='id')
        PortfolioCard(:cardInfo='item')
  section.problem
    h2.sectionTitle 常見問題
    ul
      li(v-for='(item, id) in problemArr' :key='id')
        h4 {{ item.que }}
        p {{ item.ans }}
</template>
