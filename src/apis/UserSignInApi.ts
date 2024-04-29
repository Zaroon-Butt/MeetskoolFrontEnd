import axios from "axios";

export async function signIn(
  signInPayload: UserSignInPayload
): Promise<any> {
  try {
    const response = await axios.post(
      "http://localhost:5062/api/Account/userSign",
      signInPayload,
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    console.log(response);
    return response;
  } catch (error) {
    console.error(error);
    throw error; 
  }
}
