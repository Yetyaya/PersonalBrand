<script>
import BlogCard from '../components/BlogCard.vue'

export default {
  props: {
    blogArr: Array
  },
  components: { BlogCard },
  data() {
    return {}
  },
  mounted() {},
  methods: {}
}
</script>

<template lang="pug">
.blogList
  .blogArticle
    template(v-if='blogArr.length === 0')
      .listEmpty
        img(src='/images/empty.png' alt='empty')
        h5 尚無相關文章
    template(v-else)
      BlogCard(v-for='(item, id) in blogArr' :blogInfo='item')
</template>
