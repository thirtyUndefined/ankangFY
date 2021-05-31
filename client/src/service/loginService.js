import http from './http';

// 登录功能
export async function login(loginId, loginPwd) {
    const result = await http().post("/api/user/login", {
        loginId,
        loginPwd
    });
    return result.data;
};

// 注销功能
export function loginOut() {
    localStorage.removeItem("token");
};

// 获取用户信息功能
export async function whoami() {
    const result = await http().get("/api/user/whoami");
    return result.data;
}