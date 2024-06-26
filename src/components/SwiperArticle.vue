<script>
import { Swiper, SwiperSlide } from 'swiper/vue'
import { Autoplay, Pagination } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/pagination'

import ArticleCard from '../components/ArticleCard.vue'
import articleData from '@/data/articles.json'

export default {
  props: {
    swiperOption: Object
  },
  components: {
    Swiper,
    SwiperSlide,
    ArticleCard
  },
  setup() {
    return {
      modules: [Autoplay, Pagination]
    }
  },
  data() {
    return {
      articleArr: articleData
    }
  }
}
</script>

<template lang="pug">
section.otherPaper.container
  hr
  h3 最新文章
  Swiper.sliderArticle(
    :modules='modules'
    :speed='swiperOption.speed'
    :slidesPerView='swiperOption.slidesPerView'
    :spaceBetween='swiperOption.spaceBetween'
    :pagination='swiperOption.pagination'
    :loop='swiperOption.loop'
    :autoplay='swiperOption.autoplay'
    snapOnRelease='true'
  )
    SwiperSlide.slide(
      v-for='(item, id) in articleArr'
      :data-swiper-autoplay='swiperOption.dataSwiperAutoplay'
    )
      ArticleCard(:articleInfo='item')
</template>

<style lang="sass" scope>
:root
  --swiper-theme-color: #000
  --swiper-pagination-bullet-inactive-color: #E9E9E9
  --swiper-pagination-bullet-inactive-opacity: 1
  --swiper-pagination-bullet-size: 12px
  --swiper-pagination-bullet-horizontal-gap: 8px
.swiper-wrapper
  padding-bottom: 51px
</style>
