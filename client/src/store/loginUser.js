import * as loginService from '../service/loginService';

export default {
    namespaced: true,
    state: {
        data: null,
        isLoading: false,
    },
    // 更新的登录数据
    mutations: {
        SET_DATA(state, payload) {
            state.data = payload;
        },
        SET_IS_LOADING(state, payload) {
            state.isLoading = payload;
        }
    },
    // 异步方法,提交数据
    actions: {
        async login({ commit }, { loginId, loginPwd }) {
            commit("SET_IS_LOADING", true);
            const resp = await loginService.login(loginId, loginPwd);
            commit("SET_DATA", resp.data);
            commit("SET_IS_LOADING", false);
            return resp;
        },
        loginOut({ commit }) {
            // 注销
            commit("SET_DATA", null);
            loginService.loginOut();
        },
        async whoAmI({ commit }) {
            commit("SET_IS_LOADING", true);
            try {
                const resp = await loginService.whoami();
                commit("SET_DATA", resp);
            }catch {
                commit("SET_DATA", null)
            };
            commit("SET_IS_LOADING", false);
        }
    }
}