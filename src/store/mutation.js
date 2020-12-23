import {TOKEN,USER} from "./type";


export default {
    // 记录用户信息
    [TOKEN](state, token) {
        state.token = token;
    },
    [USER](state, user) {
        state.user = user
    },
}


