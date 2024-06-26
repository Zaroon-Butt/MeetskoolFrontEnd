import axios from "axios";


export async function createStudent(createStudentPayLoad: CreateStudentPayLoad) {
    try {
        const response = await axios.post('http://localhost:5070/api/Student/createStudent', createStudentPayLoad, {
            headers: {
                'Accept': 'text/plain',
                'Content-Type': 'application/json'
            }
        });
        return response.data;
    } catch (error) {
        console.error('Error in Student Creation:', error);
    }
}

export async function createStudentEducation(createStudentEducationPayLoad: CreateStudentEducationPayLoad) {
    try {
        const response = await axios.post('http://localhost:5070/api/Student/createStudentEducation', createStudentEducationPayLoad, {
            headers: {
                'Accept': 'text/plain',
                'Content-Type': 'application/json'
            }
        });
        return response.data;
    } catch (error) {
        console.error('Error in Student Education Creation:', error);
    }
}

export async function getStudentInfo(studentId: string) {
    try {
        const response = await axios.get(`http://localhost:5070/api/Student/getStudentInfo?studentId=${studentId}`);
        return response.data;
    } catch (error) {
        console.error('Error in Student Info:', error);
    }
}

export async function getStudentList(searchTerm: string) {
    try {
        const response = await axios.get(`http://localhost:5070/api/Student/getAllStudents?searchTerm=${searchTerm}`);
        return response.data;
    } catch (error) {
        console.error('Error in Student List:', error);
    }
}

export async function updateStudentProfile(payload: UpdateStudentProfilePayload): Promise<any> {
    try {
        return await axios.post(
            `http://localhost:5070/api/Student/updateStudent`,
            payload
        );
    } catch (error) {
        console.error(error);
        throw error;
    }
}

export async function updateStudentEducation(payload: UpdateStudentEducationPayload): Promise<any> {
    try {
        return await axios.post(
            `http://localhost:5070/api/Student/updateStudentEducation`,
            payload
        );
    } catch (error) {
        console.error(error);
        throw error;
    }
}