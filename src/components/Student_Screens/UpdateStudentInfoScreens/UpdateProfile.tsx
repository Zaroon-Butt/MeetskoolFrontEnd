import React, {useEffect, useState} from "react";
import {SafeAreaProvider, SafeAreaView} from "react-native-safe-area-context";
import {Button, Card, TextInput} from "react-native-paper";
import CardActions from "react-native-paper/lib/typescript/components/Card/CardActions";
import {useRoute} from "@react-navigation/native";
import {Alert, StyleSheet} from "react-native";
import {UpdateStudentProfileHook} from "../../../hooks/StudentHooks/UpdateStudentProfileHook";

export const UpdateProfile: React.FC = () => {
    const route = useRoute();
    const {
        studentId: Id,
        studentName: initialStudentName,
        description: initialDescription,
    } = route.params as {
        studentId: string;
        studentName: string;
        description: string;
    };

    const [updateProfilePayload, setUpdateProfilePayload] = useState<UpdateStudentProfilePayload>({
        studentId: Id,
        studentName: initialStudentName,
        descriptions: initialDescription,
    });

    const [userDescription, setUserDescription] = React.useState<string>(initialDescription);
    const [name, setName] = React.useState<string>(initialStudentName);

    const {updatingProfile, updateProfileResponse, updateProfile} = UpdateStudentProfileHook();

    const updateStudentProfile = () => {

        setUpdateProfilePayload({
            ...updateProfilePayload,
            studentName: name,
            descriptions: userDescription,
        });

        if (updateProfilePayload.studentName && updateProfilePayload.descriptions) {
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
                            onPress={updateStudentProfile}
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
