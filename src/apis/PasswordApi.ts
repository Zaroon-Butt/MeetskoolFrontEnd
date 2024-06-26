import axios from "axios";
import {ChangePasswordPayLoad} from "../interface/Password";

export async function forgotPassword(email: string): Promise<any> {
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

export async function changeUserPassword(payload: ChangePasswordPayLoad): Promise<any> {
    try {
        return await axios.post(
            `http://localhost:5062/api/Account/changePassword`,
            payload
        );
    } catch (error) {
        console.error(error);
        throw error;
    }
}
