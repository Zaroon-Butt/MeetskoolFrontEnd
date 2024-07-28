import axios from "axios";
import {AddStudentFriendPayload, DeleteFriendPayload, DeleteStudentFriendResponse} from "../interface/Friend";
import {ChangePasswordPayLoad} from "../interface/Password";

export async function addStudentFriend(payload: AddStudentFriendPayload): Promise<any> {
    try {
        return await axios.post(
            `http://localhost:5070/api/Student/addStudentFriend`,
            payload
        );
    } catch (error) {
        console.error(error);
        throw error;
    }
}


export async function getStudentFriend(userId: string): Promise<any> {
    try {
        return await axios.get(
            `http://localhost:5070/api/Student/getStudentFriends?studentId=${userId}`
        );
    } catch (error) {
        console.error('Error in getting student Friend', error);
        throw error;
    }
}


export async function deleteStudentFriend(payload: DeleteFriendPayload): Promise<DeleteStudentFriendResponse> {
    try {
        return await axios.delete(`http://localhost:5070/api/Student/deleteStudentFriends?friendId=${payload.studentId}&studentId=${payload.friendId}`);
    } catch (error) {
        console.error('Error in deleting student friend:', error);
        throw error;
    }
}