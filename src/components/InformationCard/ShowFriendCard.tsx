import React, {useEffect, useState} from "react";
import {NavigationProp, useNavigation} from "@react-navigation/native";
import {SafeAreaProvider, SafeAreaView} from "react-native-safe-area-context";
import {Button, Card, Text} from "react-native-paper";
import {DeleteFriendPayload, GetStudentFriendResponse} from "../../interface/Friend";
import {DeleteFriendHook} from "../../hooks/FriendHook/DeleteFriendHook";
import {Alert} from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";

export const ShowFriendCard: React.FC<{
    friendList: GetStudentFriendResponse | undefined;
}> = ({friendList}) => {

    const StudentId = async () => {
        let studentId = await AsyncStorage.getItem('studentId');
        console.log(studentId);
        };
      
        useEffect(() => {
          StudentId();
        }, []);
      
    const navigation: NavigationProp<any, any> = useNavigation();
    const [deleteFriendPayload, setDeleteFriendPayload] = useState<DeleteFriendPayload>();
    const {deletingFriend, deleteFriend, deleteFriendResponse} = DeleteFriendHook();
    const handleDeleteFriend = (friendId: string) => {
        if (friendId) {
            setDeleteFriendPayload({
                friendId: friendId,
                studentId: "studentId"
            });
            if (deleteFriendPayload) {
                deleteFriend(deleteFriendPayload);
            }
        }
    };

    useEffect(() => {
        if (deleteFriendResponse && deleteFriendResponse) {
            Alert.alert("Friend Deleted")
        } else {
            Alert.alert("Error Deleting Friend")
        }
    }, []);

    return (
        <SafeAreaProvider>
            <SafeAreaView style={{flex: 1}}>
                {friendList && friendList.success ? (
                    friendList.data.map((teacher) => (
                        <Card mode="elevated" key={teacher.friendId} style={{marginBottom: 10}}>
                            <Card.Title title={teacher.friendName}/>
                            <Card.Content>
                                <Text>{teacher.friendName}</Text>
                            </Card.Content>
                            <Card.Actions>
                                <Button mode="contained" onPress={() => handleDeleteFriend(teacher.friendId)}>Delete
                                    Friend</Button>
                            </Card.Actions>
                        </Card>
                    ))
                ) : (
                    <Text>No teachers available</Text>
                )}
            </SafeAreaView>
        </SafeAreaProvider>
    );
};