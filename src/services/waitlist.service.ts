import { apiClient } from '@/lib/api-client';
import { API_CONFIG } from '@/config/api';
import type { WaitlistRequest, WaitlistResponse } from '@/types/waitlist';

// Service Layer - Business Logic
export class WaitlistService {
    async joinWaitlist(data: WaitlistRequest): Promise<WaitlistResponse> {
        try {
            const response = await apiClient.post<WaitlistRequest, WaitlistResponse>(
                API_CONFIG.ENDPOINTS.WAITLIST,
                data
            );

            return {
                success: true,
                message: 'Successfully joined the waitlist!',
                data: response,
            };
        } catch (error) {
            console.error('Waitlist service error:', error);

            return {
                success: false,
                message:
                    error instanceof Error
                        ? error.message
                        : 'Failed to join waitlist. Please try again.',
            };
        }
    }
}

// Export singleton instance
export const waitlistService = new WaitlistService();
