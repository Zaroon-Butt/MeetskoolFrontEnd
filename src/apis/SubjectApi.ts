import axios from "axios";

export async function getTeacherSearchedSubject(searchTerm: string): Promise<any> {
  try {
    const response = await axios.get(
      `http://localhost:5197/api/Teachers/getSearchedSubjects?searchTerm=${searchTerm}`
    );
    return response;
  } catch (error) {
    console.error(error);
    throw error;
  }
}
export async function getStudentSearchedSubject(searchTerm: string): Promise<any> {
  try {
    const response = await axios.get(
      `http://localhost:5070/api/Student/getSearchedSubjects?searchTerm=${searchTerm}`
    );
    return response;
  } catch (error) {
    console.error(error);
    throw error;
  }
}

export async function addStudentSubject(
  subjectPayload: AddStudentSubjectPayload
): Promise<any> {
  try {
    const response = await axios.post(
      `http://localhost:5070/api/Student/addStudentSubject`,
      subjectPayload
    );
    return response;
  } catch (error) {
    console.error(error);
    throw error;
  }
}
export async function addTeacherSubject(
  subjectPayload: AddTeacherSubjectPayload
): Promise<any> {
  try {
    const response = await axios.post(
      `http://localhost:5197/api/Teachers/addTeacherSubject`,
      subjectPayload
    );
    return response;
  } catch (error) {
    console.error(error);
    throw error;
  }
}
export async function getStudentSubject(studendId: string): Promise<any> {
  try {
    const response = await axios.get(
      `http://localhost:5070/api/Student/getStudentSubject?studentId=${studendId}`
    );
    return response;
  } catch (error) {
    console.error(error);
    throw error;
  }
}


export async function getTeacherSubject(TeacherId: string): Promise<any> {
  try {
    const response = await axios.get(
      `http://localhost:5197/api/Teachers/getTeacherSubject?studentId=${TeacherId}`
    );
    return response;
  } catch (error) {
    console.error(error);
    throw error;
  }
}
