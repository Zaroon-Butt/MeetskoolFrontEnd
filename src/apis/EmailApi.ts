import axios from "axios";

export async function verifyEmail(userId:string): Promise<any> {
  try {
    const response = await axios.get(
      `http://localhost:5062/api/Account/isEmailConfirmed?userId=${userId}`
    );
    return response;
  } catch (error) {
    console.error(error);
    throw error;
  }
}



export async function resendEmail(emailResendPayLoad:EmailResendPayLoad): Promise<any> {
  try {
    const response = await axios.get(
      `http://localhost:5062/api/Account/resendEmail?userId=${emailResendPayLoad.userId}&code=${emailResendPayLoad.code}&email=${emailResendPayLoad.email}`
    );
    return response;
  } catch (error) {
    console.error(error);
    throw error;
  }
}



