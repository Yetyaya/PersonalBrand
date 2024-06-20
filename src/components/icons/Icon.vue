<script>
import IconArrow from './IconArrow.vue'
import IconDesign from './IconDesign.vue'
import IconUI from './IconUI.vue'
import IconHtmlCss from './IconHtmlCss.vue'
import IconFronted from './IconFronted.vue'
import IconList from './IconList.vue'
import IconIg from './IconIg.vue'
import IconFb from './IconFb.vue'
import IconYoutube from './IconYoutube.vue'

const icons = {
  arrow: IconArrow,
  design: IconDesign,
  ui: IconUI,
  htmlCss: IconHtmlCss,
  fronted: IconFronted,
  list: IconList,
  ig: IconIg,
  fb: IconFb,
  youtube: IconYoutube
}

export default {
  props: {
    name: {
      type: String,
      required: true,
      validator(value) {
        return Object.prototype.hasOwnProperty.call(icons, value)
      }
    }
  },
  data() {
    return {}
  },
  computed: {
    iconComponent() {
      return icons[this.name]
    }
  }
}
</script>

<template lang="pug">
	component(:is='iconComponent')
</template>
