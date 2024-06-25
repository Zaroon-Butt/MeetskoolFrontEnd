import { useState } from "react";
import { addComment } from "../../apis/CommentApi";

export const AddCommentHook = () => {
    const [addingComment, setAddingComment] = useState(false);
    const [addCommentResponse, setAddCommentResponse] = useState<CommentResponse | undefined>();
  
    const addNewComment = async () => {
      try {
        setAddingComment(true);
        const data = await addComment();
        setAddCommentResponse(data);
        setAddingComment(false);
      } catch (error) {
        console.error('Error in Adding Comment:', error);
        setAddingComment(false);
      }
    };
  
    return { addNewComment, addingComment, addCommentResponse };
  };