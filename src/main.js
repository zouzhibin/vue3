import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'


// import {reactive,effect,computed,ref} from '@vue/reactivity'
import {reactive} from './reactivity'

const state = reactive({name:'zzb',age:18,arr:[1,23]})


// effect(()=>{
//   console.log(state.name)
// })
// console.log(state)
state.arr.push(1)
console.log(state.arr)




Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
