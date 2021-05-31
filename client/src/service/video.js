import http from './http';

// 上传video动态
export async function sendVideo(videoObj) {
    const result = await http().post("/api/video/sendVideo", {
        ...videoObj,
    });
    return result.data;
};

export async function getVideos() {
    const result = await http().get("/api/video");
    return result.data;
}
