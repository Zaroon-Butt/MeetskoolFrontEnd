import { useState } from "react";
import { getTeacherSearchedSubject } from "../../apis/SubjectApi";

export const GetSubjectHook = () => {

  const [subjectList, setSubjectList] = useState<GetSubjectListResponse | undefined>();

  const [loading, setLoading] = useState<boolean>(false);

  const fetchSubject = async (teacherId: string) => {
    try {
      setLoading(true); 
      const { data } = await getTeacherSearchedSubject(teacherId);
      setSubjectList(data);
      setLoading(false);
    } catch (error) {
      console.error(error);
      setLoading(false);
    }
  };

  return { fetchSubject , loading, subjectList };
};