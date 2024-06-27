import { useState } from "react";
import { getStudentSearchedSubject } from "../../apis/SubjectApi";

export const GetSubjectHook = () => {

  const [subjectList, setSubjectList] = useState<GetSubjectListResponse | undefined>();

  const [loading, setLoading] = useState<boolean>(false);

  const fetchSubject = async (studendId: string) => {
    try {
      setLoading(true); 
      const { data } = await getStudentSearchedSubject(studendId);
      setSubjectList(data);
      setLoading(false);
    } catch (error) {
      console.error(error);
      setLoading(false);
    }
  };

  return { fetchSubject , loading, subjectList };
};