import {useState} from "react";
import {getStudentInfo, getStudentList} from "../../apis/StudentApi";

export const GetStudentListHook = () => {

    const [studentListResponse, setStudentListResponse] = useState<GetStudentListResponse | undefined>();

    const [loading, setLoading] = useState<boolean>(false);

    const fetchStudentList = async (searchTerm: string) => {
        try {
            setLoading(true);
            const data  = await getStudentList(searchTerm);
            setStudentListResponse(data);
            setLoading(false);
        } catch (error) {
            console.error(error);
            setLoading(false);
        }
    };

    return { fetchStudentList , loading, studentListResponse };
};