import { useState } from "react";
import { createStudentEducation } from "../../apis/StudentApi";

export const CreateStudentEducationHook = () => {
  const [creatingStudentEducation, setCreatingStudentEducation] =
    useState(false);
  const [studentEducationResponse, setStudentEducationResponse] = useState<
    CreateStudentEducationResponse | undefined
  >();

  const addEducation = async (
    createStudentEducationPayLoad: CreateStudentEducationPayLoad
  ) => {
    try {
      setCreatingStudentEducation(true);
      var response = await createStudentEducation(
        createStudentEducationPayLoad
      );
      setStudentEducationResponse(response);

      setCreatingStudentEducation(false);
    } catch {
      console.error();
    }
  };
  return { addEducation, creatingStudentEducation, studentEducationResponse };
};
