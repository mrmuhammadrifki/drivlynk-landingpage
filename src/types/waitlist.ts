// Domain Types
export interface WaitlistRequest {
    name: string;
    email: string;
    phone_number: string;
    role: string;
}

export interface WaitlistResponse {
    success: boolean;
    message?: string;
    data?: unknown;
}

export type WaitlistError = {
    message: string;
    code?: string;
};
