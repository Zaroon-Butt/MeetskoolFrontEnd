interface UserSignInPayload {
  email: string;
  password: string;
}

interface userSignInResponse {
  data: {
    email: string;
    password: string;
  };
  success: boolean;
}
interface UserSignUpPayload {
  email: string;
  password: string;
  fullName: string;
  phoneNumber: string;
  isTeacher: boolean;
  isRememberMe: boolean;
  userImage: string;
}
interface userSignUpResponse {
  data: { email: string; code: string; userId: string };
  success: boolean;
  message: string[];
  error: string[];
}
