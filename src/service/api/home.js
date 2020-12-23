import baseUrl from "@/service/config/base";
import {post} from "@/service/config/axios";
/**
 * 登录注册模块 start
 * */
//login
export const userLogin=(account,password) =>post(`${baseUrl.login}/client.do`,{
    method:'login',
    data:{account,password}
})
/**
 * 登录注册模块 end
 * */
