import { useState } from "react";
import { getTeacherList } from "../../apis/TeachersApi";

export const GetTeacherListHook= () => {
  const [teacherList, setTeacherList] = useState<GetTeacherListResponse | undefined>();
  const [loading, setLoading] = useState<boolean>(false);

  const fetchTeacherList = async (teacherListpayload: GetTeacherListPayLoad) => {
    try {
      const {data} = await getTeacherList(teacherListpayload);
      setTeacherList(data);
      setLoading(false);
    } catch (error) {
      setLoading(false);
    }
  }; 
    
  
  return { fetchTeacherList, loading, teacherList };
};
