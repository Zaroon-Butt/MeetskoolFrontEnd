import { useState } from "react";
import { createStudent } from "../../apis/StudentApi";

export const CreateStudentHook = () => {
  const [creatingStudent, setCreatingStudent] = useState(false);
  const [createStudentResponse, setCreateStudentResponse ] = useState<CreateStudentResponse | undefined>();

  const addStudent = async (createStudentPayLoad: CreateStudentPayLoad) => {
    try {
      setCreatingStudent(true);
      var response = await createStudent(createStudentPayLoad);
      setCreateStudentResponse(response);
      setCreatingStudent(false);
    } catch {
      console.error();
    }
  };
  return { addStudent, creatingStudent, createStudentResponse
   };
};
