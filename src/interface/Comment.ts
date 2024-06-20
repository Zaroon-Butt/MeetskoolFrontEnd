interface CommentResponse {
  data: [
    {
      commentId: string;
      comment: string;
    }
  ];
  success: boolean;
  messages: [];
  error: [];
}

