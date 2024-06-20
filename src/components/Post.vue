<script>
export default {
  props: {
    blogArr: Array
  },
  data() {
    return {
      postContent: null
    }
  },
  mounted() {
    this.getArticle()
  },
  methods: {
    getArticle() {
      if (this.$route.params.id >= this.blogArr.length) {
        return (this.postContent = null)
      }

      this.postContent = this.blogArr.filter((item) => {
        return item.id === this.$route.params.id
      })
    }
  },
  watch: {
    $route() {
      this.getArticle()
    }
  }
}
</script>

<template lang="pug">
.postContent(:class='{ hasArticle: postContent }')
  template(v-if='postContent')
    .tagAndDate {{ postContent[0].tag }} / {{ postContent[0].date }} 發佈
    .title
      h2 {{ postContent[0].title }}
      .subTitle - {{ postContent[0].subTitle }} -
    div(v-html='postContent[0].pageContent')
    .author {{ postContent[0].author }} 主筆
  template(v-else)
    .listEmpty
      img(src='/images/empty.png' alt='empty')
      h5 哎呀, 找不到這篇文章呢
</template>
