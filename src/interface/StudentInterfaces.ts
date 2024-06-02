interface StudentData {
  data: [
    {
      email: "string";
      password: "string";
      isTeacher: true;
      userImage: "string";
      fullName: "string";
      phoneNumber: "string";
      id: "string";
      isRememberMe: true;
      createdDate: "string";
    }
  ];
  success: boolean;
  messages: string[];
  error: string[];
}

interface CreateStudentPayLoad {
  studentId: string,
  studentName: string,
  descriptions: string,
  totalOrders: string
}

interface CreateStudentResponse{
  data: {
    studentId:string,
    studentName: string
  },
  success: boolean,
  messages: string[],
  error: string[]
}
interface CreateStudentEducationPayLoad {
    departmentName: string,
    degree: string,
    semester: number,
    studentId:string 
}
interface CreateStudentEducationResponse{
    data: {
      departmentName: string,
      degree: string,
    },
    success: boolean,
    messages: string[],
    error: string[]
  }
