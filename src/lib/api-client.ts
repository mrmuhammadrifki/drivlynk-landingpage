import { API_CONFIG } from '@/config/api';

// Generic API Client
class ApiClient {
    private baseURL: string;
    private timeout: number;

    constructor(baseURL: string, timeout: number) {
        this.baseURL = baseURL;
        this.timeout = timeout;
    }

    private async request<T>(
        endpoint: string,
        options: RequestInit = {}
    ): Promise<T> {
        const controller = new AbortController();
        const timeoutId = setTimeout(() => controller.abort(), this.timeout);

        try {
            const response = await fetch(`${this.baseURL}${endpoint}`, {
                ...options,
                signal: controller.signal,
                headers: {
                    'Content-Type': 'application/json',
                    ...options.headers,
                },
            });

            clearTimeout(timeoutId);

            if (!response.ok) {
                const errorData = await response.json().catch(() => ({}));
                throw new Error(
                    errorData.message || `HTTP error! status: ${response.status}`
                );
            }

            return await response.json();
        } catch (error) {
            clearTimeout(timeoutId);

            if (error instanceof Error) {
                if (error.name === 'AbortError') {
                    throw new Error('Request timeout. Please try again.');
                }
                throw error;
            }

            throw new Error('An unexpected error occurred');
        }
    }

    async post<T, R>(endpoint: string, data: T): Promise<R> {
        return this.request<R>(endpoint, {
            method: 'POST',
            body: JSON.stringify(data),
        });
    }

    async get<R>(endpoint: string): Promise<R> {
        return this.request<R>(endpoint, {
            method: 'GET',
        });
    }
}

// Export singleton instance
export const apiClient = new ApiClient(
    API_CONFIG.BASE_URL,
    API_CONFIG.TIMEOUT
);
