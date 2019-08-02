// 保存数据的属性
export const state = () => ( {
    userInfo: {
        token: '',
        user: {}
    }
})

// 同步修改数据
export const mutations = {
    setUserInfo(state, data) {
        state.userInfo = data
    },
    // 清除用户数据
    cleanUserInfo(state, info){
        if(process.browser){
            localStorage.removeItem("userInfo");
        }
        state.userInfo = {};
    }

}

// 异步修改数据 actions
export const actions = {

}