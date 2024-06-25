import { useState } from "react";

import { getComment } from "../../apis/CommentApi";

export const GetCommentHook = () => {

  const [comment, setComment] = useState<GetSubjectListResponse | undefined>();
  const [loading, setLoading] = useState<boolean>(false);

  const fetchComment = async (studendId: string) => {
    try {
      setLoading(true); 
      const { data } = await getComment(studendId);
      setComment(data);
      setLoading(false);
    } catch (error) {
      console.error(error);
      setLoading(false);
    }
  };

  return { fetchComment  , loading, comment };
};