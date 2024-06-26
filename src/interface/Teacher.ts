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

interface CreateTeacherPayLoad {
    TeacherId: string;
    TeacherName: string;
    descriptions: string;
    totalOrders: string;
}

interface CreateTeacherResponse {
    data: {
        TeacherId: string;
        TeacherName: string;
    };
    success: boolean;
    messages: string[];
    error: string[];
}

interface CreateTeacherEducationPayLoad {
    departmentName: string;
    degree: string;
    semester: number;
    TeacherId: string;
}

interface CreateTeacherEducationResponse {
    data: {
        departmentName: string;
        degree: string;
    };
    success: boolean;
    messages: string[];
    error: string[];
}

interface GetTeacherInfoResponse {
    data: {
        descriptions: string;
        createdAt: string;
        totalOrder: string;
        departmentName: string;
        degree: string;
        semester: number;
        subjectName: string;
        subjects: {
            subjectName: string;
        }[];
        teacherName: string;
        teacherId: string;
    };
    success: boolean;
    messages: string[];
    error: string[];
}

interface UpdateTeacherEducationPayload {
    teacherId: string,
    departmentName: string,
    degree: string,
    semester: number
}

interface UpdateTeacherEducationResponse {
    data: {
        departmentName: string;
        degree: string;
        semester: number;
    };
    success: boolean;
    messages: string[];
    error: string[];
}

interface UpdateTeacherProfilePayload {
    teacherId: string,
    descriptions: string,
    teacherName: string
}

interface UpdateTeacherProfileResponse {
    data: {
        descriptions: string;
        teacherName: string;
    };
    success: boolean;
    messages: string[];
    error: string[];
}