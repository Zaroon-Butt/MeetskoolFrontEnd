import {useState} from "react";
import {updateStudentProfile} from "../../apis/StudentApi";
import {updateTeacherProfile} from "../../apis/TeachersApi";

export const UpdateTeacherProfileHook = () => {
    const [updatingProfile, setUpdatingProfile] =
        useState(false);
    const [updateProfileResponse, setUpdateProfileResponse] = useState<
        UpdateTeacherProfileResponse | undefined
    >();

    const updateProfile = async (
        payLoad: UpdateTeacherProfilePayload
    ) => {
        try {
            setUpdatingProfile(true);
            const {data} = await updateTeacherProfile(
                payLoad
            );
            setUpdateProfileResponse(data);

            setUpdatingProfile(false);
        } catch {
            console.error();
        }
    };
    return {updateProfile, updatingProfile, updateProfileResponse};
};