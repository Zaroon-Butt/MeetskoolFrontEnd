import axios from "axios";
import { DeleteStudentFriendResponse } from "../interface/Friend";

export async function addStudentFriend( ) {
  try {
    const response = await axios.post('http://localhost:5070/api/Student/addStudentFriend',{
      headers: {
        'Accept': 'text/plain',
        'Content-Type': 'application/json'
      }
    });
    return response.data;
  } catch (error) {
    console.error('Error in Adding Student Friend  :', error);
  }
}


export async function getStudentFriend(userId:string): Promise<any> {
    try {
      const response = await axios.get(
        `http://localhost:5070/api/Student/getStudentFriends?userId=${userId}`
      );
      return response;
    } catch (error) {
      console.error('Error in getting student Friend',error);
      throw error;
    }
  }


  export async function deleteStudentFriend(studentId: string, friendId: string): Promise<DeleteStudentFriendResponse> {
    try {
      const response = await axios.delete('http://localhost:5070/api/Student/deleteStudentFriends', {
        params: {
          studentId,
          friendId
        },
        headers: {
          'Accept': 'text/plain'
        }
      });
      return response.data;
    } catch (error) {
      console.error('Error in deleting student friend:', error);
      throw error;
    }
  }