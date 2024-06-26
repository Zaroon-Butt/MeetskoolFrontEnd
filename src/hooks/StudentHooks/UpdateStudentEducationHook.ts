import {useState} from "react";
import {updateStudentEducation, updateStudentProfile} from "../../apis/StudentApi";

export const UpdateStudentEducationHook = () => {
    const [updatingEducation, setUpdatingEducation] =
        useState(false);
    const [updateEducationResponse, setUpdateEducationResponse] = useState<
        UpdateStudentEducationResponse | undefined
    >();

    const updateEducation = async (
        payLoad: UpdateStudentEducationPayload
    ) => {
        try {
            setUpdatingEducation(true);
            const {data} = await updateStudentEducation(
                payLoad
            );
            setUpdateEducationResponse(data);

            setUpdatingEducation(false);
        } catch {
            console.error();
        }
    };
    return {updateEducation, updatingEducation, updateEducationResponse};
};