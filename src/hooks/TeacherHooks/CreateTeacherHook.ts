import { useState } from "react";
import { createTeacher } from "../../apis/TeachersApi";

export const createTeacherHook = () => {

  const [creatingTeacher, setCreatingTeacher] = useState(false);
  const [createTeacherResponse, setcreateTeacherResponse] = useState<CreateTeacherResponse | undefined>();

  const addTeacher = async (createTeacherPayLoad: CreateTeacherPayLoad) => {
    try {
      setCreatingTeacher(true);
      var response = await createTeacher(createTeacherPayLoad);
      setcreateTeacherResponse(response);
      setCreatingTeacher(false);
    } catch {
      console.error();
    }
  };
  return { addTeacher, creatingTeacher, createTeacherResponse };
};
