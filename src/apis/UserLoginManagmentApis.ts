import axios from "axios";

export async function signUp(
  userSignUpPayload: UserSignUpPayload
): Promise<any> {
  try {
    let response = await axios.post(
      "https://meetskoolidentity.azurewebsites.net/api/Account/createUser",
      userSignUpPayload,
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    console.log(response);
    return response;
  } catch (error) {
    console.log(error);
  }
}
