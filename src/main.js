import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import Icon from './components/icons/Icon.vue'
import { currencyFormat } from './currencyFormat.js'

const app = createApp(App)

app.use(router)
app.component('SvgIcon', Icon)

app.directive('currency', {
  mounted(el, binding) {
    el.innerHTML = currencyFormat(binding.value)
  }
})

app.mount('#app')
