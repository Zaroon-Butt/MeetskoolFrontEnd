export interface ResetPasswordResponse {
    data: {
        fullName: string,
        userId: string,
    }
    success: boolean;
    messages: string[];
    error: string[];
}

export interface ChangePasswordPayLoad {
    newPassword: string;
    oldPassword: string;
    email: string;
}

export interface ChangePasswordResponse {
    data: {
        email: string ;
        code: string | null;
        userId: string;
        accessToken: string | null;
    };
    success: boolean;
    messages: string[];
    error: string[];
}