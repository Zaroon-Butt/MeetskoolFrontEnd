import { useState } from "react";
import { getStudentFriend } from "../../apis/StudentFriendApi";
import { GetStudentFriendResponse } from "../../interface/Friend";


export const GetStudentFriendsHook = () => {
  const [studentFriends, setStudentFriends] = useState<GetStudentFriendResponse >( ); 
  const [loading, setLoading] = useState<boolean>(false);

  const fetchStudentFriends = async (studentId: string) => {
    setLoading(true);
    try {
      const { data } = await getStudentFriend (studentId); 
      setStudentFriends(data);
    } catch (error) {
      console.error('Error fetching student friends:', error);
    } finally {
      setLoading(false);
    }
  };

  return { fetchStudentFriends, loading, studentFriends };
};
