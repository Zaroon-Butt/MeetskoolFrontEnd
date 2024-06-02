import axios from "axios";

export async function createStudent(createStudentPayLoad: CreateStudentPayLoad ) {
  try {
    const response = await axios.post('http://localhost:5070/api/Student/createStudent', createStudentPayLoad ,{
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
    const response = await axios.post('http://localhost:5070/api/Student/createStudentEducation', createStudentEducationPayLoad,{
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

/// 