import axios from "axios";

export async function signUp(
  userSignUpPayload: UserSignUpPayload
): Promise<any> {
  try {
    let response = await axios.post(
      "http://localhost:5062/api/Account/createUser",
      userSignUpPayload,
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    return response;
  } catch (error) {
    console.log(error);
  }
}
