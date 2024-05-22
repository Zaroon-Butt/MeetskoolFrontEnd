import axios from "axios";

export async function getTeacherList(teacherListPayload: GetTeacherListPayLoad): Promise<any> {
    try {
        const response = await axios.get(
            `http://localhost:5197/api/Teachers/getAllTeachers?searchTerm=${teacherListPayload.searchTerm}&page=${teacherListPayload.page}&pageSize=${teacherListPayload.pageSize}`
        );
        console.log(response);
        return response;
    } catch (error) {
        console.error(error);
        throw error;
    }
}
