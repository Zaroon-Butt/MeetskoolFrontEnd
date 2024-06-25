import axios from "axios";



// GET TEACHER LIST API FOR CARD

export async function getTeacherList(
  teacherListPayload: GetTeacherListPayLoad
): Promise<any> {
  try {
    const response = await axios.get(
      `http://localhost:5197/api/Teachers/getAllTeachers?searchTerm=${teacherListPayload.searchTerm}&page=${teacherListPayload.page}&pageSize=${teacherListPayload.pageSize}`
    );
    return response;
  } catch (error) {
    console.error(error);
    throw error;
  }
}

    // CREATE TEACHER API

export async function createTeacher(createTeacherPayLoad: CreateTeacherPayLoad ) {
    try {
      const response = await axios.post('http://localhost:5197/api/Teachers/createTeacherEducation', createTeacherPayLoad ,{
        headers: {
          'Accept': 'text/plain',
          'Content-Type': 'application/json'
        }
      });
      return response.data;
    } catch (error) {
      console.error('Error in Teacher Creation:', error)}}


      //TEACHER EdUCATION API

export async function createTeacherEducation(
    createTeacherEducationPayLoad: CreateTeacherEducationPayLoad
  ) {
    try {
      const response = await axios.post(
        "http://localhost:5197/api/Teachers/createTeacher", createTeacherEducationPayLoad,
        {
          headers: {
            Accept: "text/plain",
            "Content-Type": "application/json",
          },
        }
      );
      return response.data;
    } catch (error) {
      console.error("Error in Teacher Education Creation:", error);
    }
  }
  
  export async function getTeacherInfo( teacherId:string): Promise<any> {
    try {
      const response = await axios.get(
        `http://localhost:5197/api/Teachers/getTeacherInfo?teacherId=${teacherId}`
      );
      return response;
    } catch (error) {
      console.error(error);
      throw error;
    }
  }


  export async function updateTeacher (createTeacherPayLoad: CreateTeacherPayLoad ) {
    try {
      const response = await axios.patch('http://localhost:5197/api/Teachers/updateTeacher', createTeacherPayLoad ,{
        headers: {
          'Accept': 'text/plain',
          'Content-Type': 'application/json'
        }
      });
      return response.data;
    } catch (error) {
      console.error('Error in  Updating Teacher :', error)}}