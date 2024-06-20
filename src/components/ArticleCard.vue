<script>
export default {
  props: {
    articleInfo: Object
  },
  data() {
    return {
      baseUrl: import.meta.env.VITE_BASE_URL
    }
  },
  methods: {
    goto(id) {
      this.$router.push('/blog/posts/' + id)
    }
  }
}
</script>

<template lang="pug">
.articleCard(@click='goto(articleInfo.id)')
	.articleImg
		img(:src='baseUrl + "images/" + articleInfo.img' :alt='articleInfo.img')
	.articleContent
		h5.title {{ articleInfo.title }}
		.subInfo
			.tag {{ articleInfo.tag }}
			.date {{ articleInfo.date }}
</template>

<style lang="sass" scope>
.articleCard
	cursor: pointer
	&:hover
		.articleImg img
			transform: scale(1.2)
	.articleImg
		height: 234px
		margin-bottom: 16px
		border-radius: 8px
		overflow: hidden
		img
			transition: all 0.3s ease-in-out
	.articleContent
		padding: 0 8px
		.title
			margin-bottom: 16px
			color: var(--primary700)
		.subInfo
			display: flex
			align-items: center
			justify-content: space-between
			.tag
				padding: 4px 12px
				border-radius: 16px
				color: var(--primary700)
				background-color: var(--primary200)
			.date
				font-size: var(--fs6)
				color: var(--primary600)
</style>
