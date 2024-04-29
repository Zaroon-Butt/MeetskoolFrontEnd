export interface ResetPasswordResponse {
    data: {
        fullName: string,
        userId: string,
    }
    success: boolean;
    messages: string[];
    error: string[];
}