import React, {useEffect, useState} from "react";
import {SafeAreaProvider, SafeAreaView} from "react-native-safe-area-context";
import {Button, Card, TextInput} from "react-native-paper";
import CardActions from "react-native-paper/lib/typescript/components/Card/CardActions";
import {useRoute} from "@react-navigation/native";
import {Alert, StyleSheet} from "react-native";
import {UpdateStudentProfileHook} from "../../../hooks/StudentHooks/UpdateStudentProfileHook";
import {UpdateTeacherProfileHook} from "../../../hooks/TeacherHooks/UpdateTeacherProfileHook";

export const UpdateTeacherProfile: React.FC = () => {
    const route = useRoute();
    const {
        teacherID: Id,
        teacherName: initialTeacherName,
        description: initialDescription,
    } = route.params as {
        teacherID: string;
        teacherName: string;
        description: string;
    };

    const [updateProfilePayload, setUpdateProfilePayload] = useState<UpdateTeacherProfilePayload>({
        teacherId: Id,
        teacherName: initialTeacherName,
        descriptions: initialDescription,
    });

    const [userDescription, setUserDescription] = React.useState<string>(initialDescription);
    const [name, setName] = React.useState<string>(initialTeacherName);

    const {updatingProfile, updateProfileResponse, updateProfile} = UpdateTeacherProfileHook();

    const updateTeacherProfile = () => {

        setUpdateProfilePayload({
            ...updateProfilePayload,
            teacherName: name,
            descriptions: userDescription,
        });

        if (updateProfilePayload.teacherName && updateProfilePayload.descriptions) {
            updateProfile(updateProfilePayload);
        }
    };

    useEffect(() => {
        if (updateProfileResponse && updateProfileResponse.success) {
            Alert.alert("Profile Updated", "Your profile has been updated successfully.");
        }
    }, [updateProfileResponse]);

    return (
        <SafeAreaProvider>
            <SafeAreaView style={{flex: 1}}>
                <Card mode="elevated" style={styles.card}>
                    <Card.Title title="Update Profile"/>
                    <Card.Content>
                        <TextInput
                            label="Name"
                            value={name}
                            onChangeText={text => setName(text)}
                            mode="outlined"
                        />
                        <TextInput
                            label="Description"
                            mode="outlined"
                            multiline
                            numberOfLines={5}
                            value={userDescription}
                            onChangeText={text => setUserDescription(text)}
                        />
                    </Card.Content>
                    <CardActions>
                        <Button
                            mode="contained"
                            onPress={updateTeacherProfile}
                        >
                            Update
                        </Button>
                    </CardActions>
                </Card>
            </SafeAreaView>
        </SafeAreaProvider>
    );
};

const styles = StyleSheet.create({
    card: {
        margin: 10,
    },
    field: {
        marginBottom: 10,
    },
    label: {
        fontWeight: 'bold',
    },
    modalContainer: {
        backgroundColor: 'white',
        padding: 20,
        margin: 20,
        borderRadius: 10,
    },
});
