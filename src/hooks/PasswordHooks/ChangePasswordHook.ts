import {useState} from "react";
import {ChangePasswordPayLoad, ChangePasswordResponse} from "../../interface/Password";
import ChangePassword from "../../components/Recovery/ChangePassword";
import {changeUserPassword} from "../../apis/PasswordApi";


export const ChangePasswordHook = () => {
    const [changingPassword, setChangingPassword] = useState(false);
    const [changePasswordResponse, setChangePasswordResponse] = useState< ChangePasswordResponse| undefined >();

    const changePassword = async (payload:ChangePasswordPayLoad) => {
        try {
            setChangingPassword(true);
            const {data} = await changeUserPassword(payload);
            setChangePasswordResponse(data);
            setChangingPassword(false);
        } catch (error) {
            setChangingPassword(false);
        }
    };

    return { changePassword,  changingPassword, changePasswordResponse };
};
