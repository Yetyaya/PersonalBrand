<script>
export default {
  props: {
    cardInfo: Object
  },
  data() {
    return {}
  }
}
</script>

<template lang="pug">
.card
  .imgBlock
    img(:src='"./images/" + cardInfo.img' :alt='cardInfo.title')
  .info
    h3 {{ cardInfo.title }}
    .subTitle {{ cardInfo.subTitle }}
    .tagGroup
      .tag(v-for='(tag, tagId) in cardInfo.tags' :key='tagId') {{ tag }}
</template>

<style lang="sass" scope>
.card
  width: calc(50% - 12px)
  display: flex
  flex-direction: column
  gap: 16px
  cursor: pointer
  &:hover
    .imgBlock img
      transform: scale(1.1) rotate(2deg)
  .imgBlock
    width: 100%
    height: 400px
    position: relative
    overflow: hidden
    border-radius: 8px
    img
      width: 100%
      height: 100%
      position: absolute
      object-fit: cover
      transition: all 0.3s ease-in-out
  .info
    padding: 0 16px
    h3
      margin-bottom: 8px
      color: var(--primary700)
    .subTitle
      font-size: var(--fs6)
      color: var(--primary500)
    .tagGroup
      display: flex
      flex-wrap: wrap
      gap: 10px
      margin-top: 24px
      .tag
        display: flex
        align-items: center
        justify-content: center
        padding: 4px 12px
        font-size: var(--fs6)
        white-space: nowrap
        color: var(--primary700)
        background-color: var(--primary200)
        border-radius: 16px
        cursor: pointer
        transition: all 0.3s ease-in-out
        &:hover
          color: var(--primary200)
          background-color: var(--primary700)
</style>
