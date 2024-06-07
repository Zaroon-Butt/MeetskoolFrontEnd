import axios from "axios";

export async function forgotPassword(email:string): Promise<any> {
  try {
    const response = await axios.get(
      `http://localhost:5062/api/Account/forgotPassword?email=${email}`
    );
    return response;
  } catch (error) {
    console.error(error);
    throw error;
  }
}
