import Vue from 'vue'
// import { library } from '@fortawesome/fontawesome-svg-core'
// import { faUserSecret, faSpinner, faAlignLeft } from '@fortawesome/free-solid-svg-icons'
// import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

import App from './App.vue'
import 'spectre.css/dist/spectre.min.css'
import 'spectre.css/dist/spectre-exp.min.css'
import 'spectre.css/dist/spectre-icons.min.css'
import router from './router'

// library.add(faUserSecret, faSpinner, faAlignLeft)
//
// Vue.component('font-awesome-icon', FontAwesomeIcon)

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
