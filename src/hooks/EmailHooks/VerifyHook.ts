import { useState } from "react";
import { verifyEmail } from "../../apis/EmailApi";

export const verifyEmailHook = () => {
  const [verifyingMail, setVerifyingEmail] = useState(false);
  const [verifyEmailResponse, setVerifyEmailResponse] = useState< Boolean | undefined >();

  const emailVerify = async (userId:string ) => {
    try {
        setVerifyingEmail(true);
      const {data} = await verifyEmail(userId);
      setVerifyEmailResponse(data);
      setVerifyingEmail(false);
    } catch (error) {
        setVerifyingEmail(false);
    }
  };

  return { emailVerify, verifyingMail,verifyEmailResponse };
};
