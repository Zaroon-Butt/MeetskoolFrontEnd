import {useState} from "react";
import {updateStudentEducation} from "../../apis/StudentApi";
import {updateTeacherEducation} from "../../apis/TeachersApi";

export const UpdateTeacherEducationHook = () => {
    const [updatingEducation, setUpdatingEducation] =
        useState(false);
    const [updateEducationResponse, setUpdateEducationResponse] = useState<
        UpdateTeacherEducationResponse | undefined
    >();

    const updateEducation = async (
        payLoad: UpdateTeacherEducationPayload
    ) => {
        try {
            setUpdatingEducation(true);
            const {data} = await updateTeacherEducation(
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