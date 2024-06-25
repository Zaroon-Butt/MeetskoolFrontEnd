import axios from "axios";

export async function updateUser(
  
): Promise<any> {
  try {
    const response = await axios.post(
      "http://localhost:5062/api/Account/updateUser",
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    return response;
  } catch (error) {
    console.error(error);
    throw error; 
  }
}
