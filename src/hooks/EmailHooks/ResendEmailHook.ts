import { useState } from "react";
import { resendEmail } from "../../apis/EmailApi";


export const ResendEmailHook = () => {
  const [sendingMail, setSendingMail] = useState(false);
  const [resendEmailResponse, setResendEmailResponse] = useState< Boolean | undefined >();

  const emailResend = async (emailResendPayLoad:EmailResendPayLoad) => {
    try {
        setSendingMail(true);
      const {data} = await resendEmail(emailResendPayLoad);
      setResendEmailResponse(data);
      setSendingMail(false);
    } catch (error) {
        setSendingMail(false);
    }
  };

  return { emailResend, sendingMail,resendEmailResponse };
};
