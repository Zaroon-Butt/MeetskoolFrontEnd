interface GetTeacherListResponse {
    data: {
        teacherName: string;
        teacherId: string;
    }[];
    success: boolean;
    messages: string[];
    error: string[];
}

interface GetTeacherListPayLoad {
    searchTerm: string | null;
    page: number | null;
    pageSize: number | null;
}