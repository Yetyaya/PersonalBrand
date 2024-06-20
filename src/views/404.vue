<script>
export default {
  data() {
    return {}
  }
}
</script>

<template lang="pug">
#noFound
  section
    img(src='/images/404.png' alt='404')
    h2 哎呀，您所訪問的頁面不存在。
    p
      span 先看看我做了哪些
      RouterLink(to='/portfolio') 作品
      span 吧 ~
</template>

<style lang="sass" scope>
#noFound
  section
    display: flex
    flex-direction: column
    align-content: center
    gap: 16px
    text-align: center
    img
      width: 100%
      max-width: 900px
      margin: 0 auto
    p
      font-size: var(--fs5)
      a
        padding: 0 0 3px
        margin: 0 4px
        font-size: var(--fs5)
        line-height: 1.5
        color: #e4bf11
        background-size: 0% 2px
        background-image: linear-gradient(to right, currentColor 0%, currentColor 100%)
        background-repeat: no-repeat
        background-position: left 100%
        transition: all 0.3s ease-in-out
        cursor: pointer
        &.active, &:hover
          color: #d5b002
          background-size: 100% 2px
</style>
