// API Configuration
export const API_CONFIG = {
    BASE_URL: process.env.NEXT_PUBLIC_API_BASE_URL || 'http://localhost:9001',
    ENDPOINTS: {
        WAITLIST: '/api/v1/waiting-list',
    },
    TIMEOUT: 10000, // 10 seconds
} as const;
