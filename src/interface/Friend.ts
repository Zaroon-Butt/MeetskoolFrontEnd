export interface DeleteStudentFriendResponse {
    data: boolean;
    success: boolean;
    messages: string[];
    error: string[];
}

export interface AddStudentFriendPayload {
    friendId: string;
    friendName: string;
    studentId: string;
}

export interface GetStudentFriendResponse {
    data: {
        friendId: string;
        friendName: string;
    };
    success: boolean;
    messages: string[];
    error: string[];
}


