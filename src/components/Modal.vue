<script>
export default {
  props: {
    modalOpen: Boolean
  },
  data() {
    return {
      open: this.modalOpen
    }
  },
  mounted() {},
  methods: {
    scrollTop() {
      const scroller = document.querySelector('.modalBody')
      scroller.scrollTo({
        top: 0,
        behavior: 'smooth'
      })
    },
    dialogOpen(state) {
      this.open = state
      this.scrollTop()
      return this.$emit('openDialog', this.open)
    }
  },
  watch: {
    modalOpen(newVal, oldVal) {
      if (newVal) document.body.style.overflow = 'hidden'
      else document.body.style.overflow = 'auto'
    }
  }
}
</script>

<template lang="pug">
.modal.fade(tabindex='-1' :class='{ show: modalOpen }' @click.self='dialogOpen(false)')
	.modalDialog
		.modalContent
			.modalBody
				.modalHeader
					h5.modalTitle
					button.close(type='button' @click='dialogOpen(false)') X
				slot
			//- .modalFooter
				button.cancel(type='button' @click='dialogOpen()') Close
				button.confirm(type='button' @click='dialogOpen()') Confirm
</template>

<style lang="sass" scope>
.modal
  position: fixed
  top: 0
  left: 0
  z-index: 1055
  width: 100%
  height: 100%
  overflow-x: hidden
  overflow-y: auto
  outline: 0
  background-color: rgba(0, 0, 0, 0.5)
  opacity: 0
  pointer-events: none
  &.fade
    transition: opacity .15s linear
    .modalDialog
      transition: transform .3s ease-out
      transform: translate(0, -50px)
  &.show
    opacity: 1
    pointer-events: auto
    .modalDialog
      transform: none
      pointer-events: none
      .modalContent
        pointer-events: auto
        z-index: 999
        .modalHeader
          button.close
            pointer-events: auto

.modalDialog
  width: auto
  height: calc(100% - 1rem)
  min-height: calc(100% - 1rem)
  margin: .5rem
  display: flex
  align-items: center
  justify-content: center
  position: relative
  pointer-events: none
  button
    cursor: pointer
  .modalContent
    width: 90%
    max-width: 1076px
    max-height: 100%
    position: absolute
    top: 120px
    bottom: 40px
    display: flex
    flex-direction: column
    background-color: var(--primary50)
    border: 1px solid rgba(0, 0, 0, 0.2)
    overflow: hidden
    overflow-y: auto
    border-radius: 16px
    outline: 0

.modalHeader
  position: sticky
  top: 0
  display: flex
  flex-shrink: 0
  align-items: center
  justify-content: space-between
  padding: 32px 40px
  h5.modalTitle
    margin: 0
    line-height: 1.5
  button.close
    width: 24px
    height: 24px
    font-size: var(--fs4)
    font-weight: bold
    color: var(--primary900)
    background: transparent
    transform: scaleX(1.2)
    border: none
    user-select: none
.modalBody
  position: relative
  flex: 1 1 auto
  overflow-y: auto
  p
    margin-top: 0
    margin-bottom: 1rem

.modalFooter
  display: flex
  flex-wrap: wrap
  flex-shrink: 0
  align-items: center
  justify-content: flex-end
  padding: .75rem
  border-top: 1px solid #dee2e6
  > *
    margin: .25rem
  button
    display: inline-block
    font-weight: 400
    line-height: 1.5
    color: #212529
    text-align: center
    text-decoration: none
    vertical-align: middle
    user-select: none
    background-color: transparent
    border: 1px solid transparent
    padding: .375rem .75rem
    font-size: 1rem
    border-radius: .25rem
    transition: color .15s ease-in-out, background-color .15s ease-in-out, border-color .15s ease-in-out, box-shadow .15s ease-in-out
    &.cancel
      color: #fff
      background-color: #6c757d
      border-color: #6c757d
    &.confirm
      color: #fff
      background-color: #0d6efd
      border-color: #0d6efd

.modal
  section
    padding: 0 56px 40px
    &.websiteIntro
      display: flex
      flex-direction: column
      gap: 40px
      .title
        text-align: center
        h3
          margin: 0 0 8px 0
          color: var(--primary700)
        p
          font-size: var(--fs6)
          color: var(--primary500)
      .intro
        display: flex
        justify-content: space-between
        gap: 64px
        font-size: var(--fs6)
        line-height: 1.5
        div
          p
            margin: 0
          &:nth-child(1)
            width: 100%
            max-width: 532px
            color: var(--primary800)
          &:nth-child(2)
            display: flex
            flex-direction: column
            justify-content: center
            gap: 8px
            padding-left: 24px
            color: var(--primary600)
            border-left: 1px solid var(--primary400)
    &.websiteContent
      padding: 80px 16px
      background-color: var(--primary100)
      > div
        display: flex
        flex-direction: column
        align-items: center
        justify-content: space-between
        gap: 56px
        figure
          width: 100%
          max-width: 720px
          text-align: center
          img
            width: 100%
            border-radius: 20px
            margin-bottom: 24px
          h4
            margin-bottom: 16px
            line-height: 1.2
            color: var(--primary800)
          figcaption
            font-size: var(--fs6)
            color: var(--primary600)

@media (max-width: 576px)
  .modalDialog
    max-width: 500px
    height: calc(100% - 3.5rem)
    min-height: calc(100% - 3.5rem)
    margin: 1.75rem auto
</style>
