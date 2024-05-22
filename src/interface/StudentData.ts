
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
