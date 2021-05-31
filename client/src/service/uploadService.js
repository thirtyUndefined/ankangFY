import http from './http';

// 文件上传
export async function upload(reqObj) {

    const result = await http().post("/api/upload", reqObj, {
        headers: {
            "Content-Type": "multipart/form-data"
        }
    });
    return result;
}