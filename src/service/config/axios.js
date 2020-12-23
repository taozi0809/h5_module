import axios from 'axios'
import Router from '../router'
import {showLoading,hideLoading} from "./loading";

//定义一个请求拦截器
axios.interceptors.request.use(config=>{
    showLoading()
    return config
},err=> Promise.reject(err))


//定义一个响应拦截器
axios.interceptors.response.use(config=>{
    hideLoading()
    if(typeof config.data == 'string'){
        return config
    }
    if (typeof config.data !== 'object') {
        // Toast.fail('服务端异常！')
        return Promise.reject(config)
    }
    if(config.data.code!=0){
        if(config.data.message){
            // Toast.fail(config.data.message)
        }
        if(config.data.code==12008){
            // store.commit('TOKEN','')
            // Router.push({path: '/login'})
        }
        return Promise.reject(config)
    }
    return config
},err=> Promise.reject(err))

export const post = async (url,data)=>(await axios.post(url,data).data)
