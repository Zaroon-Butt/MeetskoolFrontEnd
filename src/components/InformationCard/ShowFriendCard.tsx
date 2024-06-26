import React from "react";
import {NavigationProp, useNavigation} from "@react-navigation/native";
import {SafeAreaProvider, SafeAreaView} from "react-native-safe-area-context";
import {Button, Card, Text} from "react-native-paper";
import {GetStudentFriendResponse} from "../../interface/Friend";

export const ShowFriendCard: React.FC<{
    friendList: GetStudentFriendResponse | undefined;
}> = ({ friendList }) => {

    const navigation: NavigationProp<any, any> = useNavigation();

    const handleDeleteFriend = (teacherId: string) => {
        navigation.navigate('TeacherInfoView', { teacherId: teacherId });
    };

    return (
        <SafeAreaProvider>
            <SafeAreaView style={{ flex: 1 }}>
                {friendList && friendList.success ? (
                    friendList.data.map((teacher) => (
                        <Card mode="elevated" key={teacher.friendId} style={{marginBottom:10}}>
                            <Card.Title title={teacher.friendName} />
                            <Card.Content>
                                <Text>{teacher.friendName}</Text>
                            </Card.Content>
                            <Card.Actions>
                                <Button mode="contained" onPress={() => handleDeleteFriend (teacher.friendId)}>Delete Friend</Button>
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