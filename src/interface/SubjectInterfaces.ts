interface GetSubjectListResponse {
  length: number;
  map(arg0: (subject: any) => React.JSX.Element): React.ReactNode;
  data: {
    subjectId: string;
    subjectName: string;
  }[];
  success: boolean;
  messages: string[];
  error: string[];
}

interface AddStudentSubjectPayload {
  studentId: string;
  subjectId: string;

}

interface AddTeacherSubjectPayload {
    teacherId: string;
    subjectId: string;

}
interface AddStudentSubjectResponse {
  data: {
    subjectId: string;
    studentId: string;
  };
  success: boolean;
  messages: string[];
  error: string[];
}

interface AddTeacherSubjectResponse {
  data: {
    subjectId: string;
    TeacherId: string;
  };
  success: boolean;
  messages: string[];
  error: string[];
}


