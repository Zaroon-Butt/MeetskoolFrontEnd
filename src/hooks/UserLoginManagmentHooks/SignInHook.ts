// import { useState } from "react";
// import { signIn } from "../../apis/UserLoginManagmentApis";

// export const signInHook = () => {
//   const [userLoading, setUserLoading] = useState(false);
//   const [userSignInResponse, setUserSignInResponse] =
//     useState<userSignInResponse | undefined>();

//   const userSignIn = async (signInPayload: UserSignInPayload) => {
//     try {
//       console.log("hello in UserSIgnIn ")
//       setUserLoading(true);
//       var response = await signIn(signInPayload);
//       setUserSignInResponse(response);
//       setUserLoading(false);
//     } catch {
//       console.error();
//     }
//   };
//   return { userSignIn, userLoading, userSignInResponse };
// };


