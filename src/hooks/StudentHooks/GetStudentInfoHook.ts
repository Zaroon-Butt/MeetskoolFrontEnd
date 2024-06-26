import { useState } from "react";
import {getStudentInfo} from "../../apis/StudentApi";
export const GetStudentInfoHook = () => {

    const [studentResponse, setStudentResponse] = useState<GetStudentInfoResponse | undefined>();

    const [loading, setLoading] = useState<boolean>(false);

    const fetchStudent = async (studentId: string) => {
        try {
            setLoading(true);
            const  data  = await getStudentInfo(studentId);
            setStudentResponse(data);
            setLoading(false);
        } catch (error) {
            console.error(error);
            setLoading(false);
        }
    };

    return { fetchStudent , loading, studentResponse };
};