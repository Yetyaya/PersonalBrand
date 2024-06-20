<script>
export default {
  props: {
    serviceInfo: Object
  },
  data() {
    return {}
  }
}
</script>

<template lang="pug">
.serviceItem
	SvgIcon(:name='serviceInfo.icon')
	p {{ serviceInfo.title }}
</template>

<style lang="sass" scope>
.serviceItem
	width: 306px
	height: 306px
	display: flex
	flex-direction: column
	flex-wrap: wrap
	align-items: center
	justify-content: center
	gap: 24px
	border-radius: 16px
	background-repeat: no-repeat
	background-image: url(/images/service-item-bg.png)
	transition: all 0.3s ease-in-out
	&:hover
		transform: translateY(6px)
	img
		width: 80px
		height: 80px
		user-select: none
	p
		font-weight: bold
		font-size: var(--fs3)
		line-height: 1.5
		color: var(--primary50)
</style>
