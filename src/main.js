import Vue from 'vue'
import BootstrapVue from 'bootstrap-vue'
import * as firebase from 'firebase/app'
import App from './App.vue'
import router from './router'
import store from './store'

import MyPlugin from './plugins/my-plugin'

Vue.use(BootstrapVue)
Vue.use(MyPlugin)

const configOptions = {
  apiKey: process.env.API_KEY,
  authDomain: process.env.AUTH_DOMAIN,
  databaseURL: process.env.DB_URL,
  projectId: process.env.PROJECT_ID,
  storageBucket: process.env.STORAGE_BUCKET,
  messagingSenderId: process.env.MESS_SENDER_ID,
  appId: process.env.APP_ID,
}

firebase.initializeApp(configOptions)

Vue.config.productionTip = false
Vue.prototype.$log = console.log

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app')
