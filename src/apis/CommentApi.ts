import axios from "axios";

export async function addComment( ) {
  try {
    const response = await axios.post('http://localhost:5197/api/Teachers/addComment',{
      headers: {
        'Accept': 'text/plain',
        'Content-Type': 'application/json'
      }
    });
    return response.data;
  } catch (error) {
    console.error('Error in Adding Comment :', error);
  }
}


export async function getComment(userId:string): Promise<any> {
    try {
      const response = await axios.get(
        `http://localhost:5197/api/Teachers/getComments?userId=${userId}`
      );
      return response;
    } catch (error) {
      console.error(error);
      throw error;
    }
  }

  export async function updateComment() {
    try {
      const response = await axios.post('http://localhost:5197/api/Teachers/updateComment',{
        headers: {
          'Accept': 'text/plain',
          'Content-Type': 'application/json'
        }
      });
      return response.data;
    } catch (error) {
      console.error('Error in Updating Comment :', error);
    }
  }