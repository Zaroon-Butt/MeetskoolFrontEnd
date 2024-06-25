import { useState } from "react";
import { addStudentSubject } from "../../apis/SubjectApi";

export const AddStudentSubject = () => {
  const [isAddingSubject, setIsAddingSubject] = useState(false);
  const [addSubjectResponse, setAddSubjectResponse] = useState<AddStudentSubjectResponse>();

  const addSubject = async (addStudentSubjectPayload : AddStudentSubjectPayload) => {
    try {
      setIsAddingSubject(true);
      const {data} = await addStudentSubject(addStudentSubjectPayload);
      setAddSubjectResponse(data);
      setIsAddingSubject(false);
    } catch (error) {
      setIsAddingSubject(false);
    }
  };

  return { addSubject, isAddingSubject, addSubjectResponse };
};
