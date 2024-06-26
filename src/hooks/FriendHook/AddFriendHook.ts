import {useState} from "react";
import {createStudentEducation} from "../../apis/StudentApi";
import {AddFriendResponse, AddStudentFriendPayload} from "../../interface/Friend";
import {addStudentFriend} from "../../apis/StudentFriendApi";

export const AddFriendHook = () => {

    const [addingFriend, setAddingFriend] = useState(false);

    const [addFriendResponse, setAddFriendResponse] = useState<
       AddFriendResponse  | undefined
    >();

    const addFriend = async (
        payLoad: AddStudentFriendPayload
    ) => {
        try {
            setAddingFriend(true);
            const {data} = await addStudentFriend(
                payLoad
            );
            setAddFriendResponse(data);

            setAddingFriend(false);
        } catch {
            console.error();
        }
    };
    return {addFriend, addingFriend, addFriendResponse};
};