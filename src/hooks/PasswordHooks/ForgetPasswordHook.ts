import { useState } from "react";
import { forgotPassword } from "../../apis/PasswordApi";
import ForgetPassword from "../../components/Recovery/ForgetPassword";
import { ResetPasswordResponse } from "../../interface/Password";


export const ForgotPasswordHook = () => {
  const [sendingMail, setSendingMail] = useState(false);
  const [forgetPasswordResponse, setForgetPasswordResponse] = useState<ResetPasswordResponse | undefined >();

  const recoveryPassword = async (email:string) => {
    try {
        setSendingMail(true);
      const {data} = await forgotPassword(email);
      setForgetPasswordResponse(data);
      setSendingMail(false);
    } catch (error) {
        setSendingMail(false);
    }
  };

  return { recoveryPassword, sendingMail,forgetPasswordResponse };
};
