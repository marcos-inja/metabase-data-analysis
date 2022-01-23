import Vue from "vue"
import axios from "axios"

// axios.defaults.baseURL = 'https://curso-vue-eea44-default-rtdb.firebaseio.com/'

Vue.use({
    install(Vue){
        Vue.prototype.$http = axios.create({
            baseURL: "url"

        })
    }
})