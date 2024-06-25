import { useState } from "react";
import { addTeacherSubject } from "../../apis/SubjectApi";

export const AddStudentSubject = () => {
  const [isAddingSubject, setIsAddingSubject] = useState(false);
  const [addSubjectResponse, setAddSubjectResponse] = useState<AddTeacherSubjectResponse>();

  const addSubject = async (addTeacherSubjectPayload : AddTeacherSubjectPayload) => {
    try {
      setIsAddingSubject(true);
      const {data} = await addTeacherSubject(addTeacherSubjectPayload);
      setAddSubjectResponse(data);
      setIsAddingSubject(false);
    } catch (error) {
      setIsAddingSubject(false);
    }
  };

  return { addSubject, isAddingSubject, addSubjectResponse };
};
