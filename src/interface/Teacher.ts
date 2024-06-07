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
    map(arg0: (teacher: any) => React.JSX.Element): React.ReactNode;
    descriptions: string;
    createdAt: string;
    totalOrder: string;
    departmentName: string;
    degree: string;
    semester: number;
    subjectName: string;
    subjectId: string;
    studentName: string;
  };
  success: boolean;
  messages: string[];
  error: string[];
}
