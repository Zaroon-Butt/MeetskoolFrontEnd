import { useState } from "react";
import { signUp } from "../../apis/UserLoginManagmentApis";

export const signUpHook = () => {
  const [creatingUser, setCreatingUser] = useState(false);
  const [userSignUpResponse, setUserSignUpResponse] =
    useState<userSignUpResponse | undefined>();

  const userSignUp = async (signUpPayload: UserSignUpPayload) => {
    try {
      setCreatingUser(true);
      var {data} = await signUp(signUpPayload);
      setUserSignUpResponse(data);
      setCreatingUser(false);
    } catch {
      console.error();
    }
  };
  return { userSignUp, creatingUser, userSignUpResponse };
};


