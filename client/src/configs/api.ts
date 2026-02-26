import axios from 'axios';

const api = axios.create({
    baseURL: import.meta.env.VITE_BASE_URL || 'http://localhost:3000',
    withCredentials: true
})

api.interceptors.response.use(
    response => response,
    async error => {
        const originalRequest = error.config;
        if (error.response?.status === 401 && !originalRequest._retry) {
            originalRequest._retry = true;
            await new Promise(resolve => setTimeout(resolve, 3000)); // 3 sec wait
            return api(originalRequest);
        }
        return Promise.reject(error);
    }
)

export default api;