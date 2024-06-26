import {useState} from "react";
import {updateStudentProfile} from "../../apis/StudentApi";

export const UpdateStudentProfileHook = () => {
    const [updatingProfile, setUpdatingProfile] =
        useState(false);
    const [updateProfileResponse, setUpdateProfileResponse] = useState<
        UpdateStudentProfileResponse | undefined
    >();

    const updateProfile = async (
        payLoad: UpdateStudentProfilePayload
    ) => {
        try {
            setUpdatingProfile(true);
            const {data} = await updateStudentProfile(
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