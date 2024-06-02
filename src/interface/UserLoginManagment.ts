interface UserSignInPayload {
  email: string;
  password: string;
}

interface UserSignInResponse {
  data: {
    userRoles: {
      data: string[];
      success: boolean;
      messages: string[];
      error: string[];
    };
    userInfo: {
      fullName: string;
      email: string;
      id: string;
    };
    signInResult: {
      succeeded: boolean;
      isLockedOut: boolean;
      isNotAllowed: boolean;
      requiresTwoFactor: boolean;
    };
    accessToken: {
      accessToken: string;
      expiresIn: number;
      tokenType: string;
      scope: string;
    };
    errorMessage: string;
  };
  success: boolean;
  messages: string[];
  error: string[];
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
  data: {
    email: string;
    code: string;
    userId: string;
  };
  success: boolean;
  message: string[];
  error: string[];
}
