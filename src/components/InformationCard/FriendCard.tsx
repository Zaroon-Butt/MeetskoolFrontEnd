import {SafeAreaProvider, SafeAreaView} from "react-native-safe-area-context";
import {Button, Card, Text} from "react-native-paper";
import React, {useEffect, useState} from "react";
import {AddStudentFriendPayload} from "../../interface/Friend";
import {AddFriendHook} from "../../hooks/FriendHook/AddFriendHook";
import {Alert} from "react-native";

interface FriendCardProps {
    friendList: GetStudentListResponse | undefined;
    studentId: string; // Add studentId prop
}

export const FriendCard: React.FC<FriendCardProps> = ({
                                                          friendList,
                                                          studentId,
                                                      }) => {

    const [addFriendPayLoad, setAddFriendPayLoad] = useState<AddStudentFriendPayload>();
    const {addFriendResponse, addingFriend, addFriend} = AddFriendHook();

    const handleAddFriend = (friendId: string, friendName: string) => {
        if (studentId) {
            setAddFriendPayLoad({
                friendId: friendId,
                friendName: friendName,
                teacherId: studentId,
            });
            if (addFriendPayLoad) {
                addFriend(addFriendPayLoad);
            }
        }
    }
    useEffect(() => {
        if (addFriendResponse && addFriendResponse.success) {
            Alert.alert("Friend added successfully")
        } else {
            Alert.alert("Failed to add friend");
        }
    }, []);
    return (
        <SafeAreaProvider>
            <SafeAreaView style={{flex: 1}}>
                {friendList && friendList.success ? (
                    friendList.data.map((friend) => (
                        <Card
                            mode="elevated"
                            key={friend.studentId}
                            style={{marginBottom: 10}}
                        >
                            <Card.Title title={friend.studentName}/>
                            <Card.Actions style={{justifyContent: "flex-end"}}>
                                <Button
                                    mode="contained"
                                    onPress={() => handleAddFriend(friend.studentId, friend.studentName)}
                                    loading={addingFriend}
                                >
                                    Add
                                </Button>
                            </Card.Actions>
                        </Card>
                    ))
                ) : (
                    <Text>No subjects available</Text>
                )}
            </SafeAreaView>
        </SafeAreaProvider>
    );
}