import { useState } from "react";
import { getTeacherInfo } from "../../apis/TeachersApi";

export const GetTeacherInfoHook= () => {
  const [teacherInfo, setTeacherInfo] = useState<GetTeacherInfoResponse | undefined>();
  const [loading, setLoading] = useState<boolean>(false);

  const fetchTeacherInfo = async (TeacherId:string) => {
    try {
      const {data} = await getTeacherInfo(TeacherId);
      setTeacherInfo(data);
      setLoading(false);
    } catch (error) {
      setLoading(false);
    }
  }; 
    
  
  return { fetchTeacherInfo, loading, teacherInfo };
};
