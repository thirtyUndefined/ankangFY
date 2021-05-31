import http from './http';

export async function types() {
    const result = await http().get("/api/types");
    return result.data;
}