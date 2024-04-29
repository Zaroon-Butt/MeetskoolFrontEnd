import { useState } from "react";
import { signIn } from "../../apis/UserSignInApi";

export const SignInHook = () => {
  const [signingIn, setSigningIn] = useState(false);
  const [signInResponse, setSignInResponse] = useState<UserSignInResponse | undefined >();

  const userSignIn = async (signInPayload: UserSignInPayload) => {
    try {
      setSigningIn(true);
      var response = await signIn(signInPayload);
      setSignInResponse(response);
      setSigningIn(false);
    } catch (error) {
      setSigningIn(false);
    }
  };

  return { userSignIn, signingIn, signInResponse };
};
