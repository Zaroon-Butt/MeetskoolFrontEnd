import { useState } from "react";
import { createTeacherEducation } from "../../apis/TeachersApi";

export const CreateTeacherEducationHook = () => {
  const [creatingTeacherEducation, setCreatingTeacherEducation] = useState(false);
  const [teacherEducationResponse, setTeacherEducationResponse] = useState<CreateTeacherEducationResponse | undefined >();

  const addEducation = async (
    createTeacherEducationPayLoad: CreateTeacherEducationPayLoad
  ) => {
    try {
      setCreatingTeacherEducation(true);
      var response = await createTeacherEducation(
        createTeacherEducationPayLoad
      );
      setTeacherEducationResponse(response);

      setCreatingTeacherEducation(false);
    } catch {
      console.error();
    }
  };
  return { addEducation, creatingTeacherEducation, teacherEducationResponse };
};

