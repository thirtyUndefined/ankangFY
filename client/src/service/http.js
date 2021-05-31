import axios from 'axios';

/**
 *  axios 封装
 * 1. 每次请求中如需要token，我们需要将token附带到请求头中
 * 2. 响应的时候如果有token, 保存到本地 localstorage
 * 3. 响应的时候,如果响应码是403（没有token， 或者token过期）,删除本地token
 */

export default function () {
    // 每次请求中如需要token，我们需要将token附带到请求头中
    const token = localStorage.getItem("token");
    let http = axios;
    if (token) {
        http = axios.create({
            headers: {
                authorization: "bearer " + token,
            }
        });
    }

    http.interceptors.response.use(resp => {
        // 响应的时候如果有token, 保存到本地 localstorage
            if (resp.headers.authorization) {
                localStorage.setItem("token", resp.headers.authorization);
            }
            return resp;
        },
        err => {
            // 响应的时候,如果响应码是403（没有token， 或者token过期）,删除本地token
            if(err.response.status === 403) {
                localStorage.removeItem("token");
            }
            return Promise.reject(err);
        }
    )
    return http;
}