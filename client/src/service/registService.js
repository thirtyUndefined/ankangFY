import http from './http';

// 注册功能
export async function regist(userObj) {
    const result = await http().post("/api/user/regist", {
        ...userObj,
    });
    return result.data;
}   