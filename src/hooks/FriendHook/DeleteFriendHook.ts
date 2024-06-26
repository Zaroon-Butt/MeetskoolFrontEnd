import {useState} from "react";
import {
    DeleteFriendPayload,
    DeleteStudentFriendResponse
} from "../../interface/Friend";
import {addStudentFriend, deleteStudentFriend} from "../../apis/StudentFriendApi";

export const DeleteFriendHook = () => {

    const [deletingFriend, setDeletingFriend] = useState(false);

    const [deleteFriendResponse, setDeleteFriendResponse] = useState<DeleteStudentFriendResponse | boolean>();

    const deleteFriend = async (
        payLoad: DeleteFriendPayload
    ) => {
        try {
            setDeletingFriend(true);
            const {data} = await deleteStudentFriend(
                payLoad
            );
            setDeleteFriendResponse(data);

            setDeletingFriend(false);
        } catch {
            console.error();
        }
    };
    return {deleteFriend,  deletingFriend, deleteFriendResponse};
};