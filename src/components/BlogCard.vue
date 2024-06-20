<script>
export default {
  props: {
    blogInfo: Object
  },
  data() {
    return {}
  }
}
</script>

<template lang="pug">
.blogCard
	.blogImg
		img(:src='"images/" + blogInfo.img' :alt='blogInfo.img')
	.blogContent
		.subInfo
			.date {{ blogInfo.date }}
			.tag {{ blogInfo.tag }}
		h5.title
			RouterLink(:to='`/blog/posts/${blogInfo.id}`') {{ blogInfo.title }}
		p {{ blogInfo.content }}
</template>

<style lang="sass" scope>
.blogCard
	height: 220px
	display: flex
	gap: 16px
	&:hover
		.blogContent .title a
			background-size: 100% 1px
		img
			transform: scale(1.1)
	.blogImg
		overflow: hidden
		border-radius: 8px
		img
			width: 306px
			height: 100%
			overflow: hidden
			object-fit: cover
			transition: all 0.3s ease-in-out
	.blogContent
		max-width: calc(100% - 322px)
		display: flex
		flex-direction: column
		gap: 16px
		.subInfo
			display: flex
			align-items: center
			gap: 16px
			.date
				font-size: var(--fs6)
				color: var(--primary600)
			.tag
				padding: 4px 12px
				border-radius: 16px
				color: var(--primary700)
				background-color: var(--primary200)
		.title
			a
				line-height: 1.5
				color: var(--primary700)
				background-size: 0% 1px
				background-image: linear-gradient(to right, currentColor 0%, currentColor 100%)
				background-repeat: no-repeat
				background-position: left 100%
				transition: all .5s ease-in-out
		p
			font-size: var(--fs6)
			line-height: 1.5
			color: var(--primary700)
</style>
