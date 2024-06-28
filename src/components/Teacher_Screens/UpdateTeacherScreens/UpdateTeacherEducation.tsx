import React, {useEffect, useState} from "react";
import {useRoute} from "@react-navigation/native";
import {Alert, StyleSheet} from "react-native";
import {SafeAreaProvider, SafeAreaView} from "react-native-safe-area-context";
import {Button, Card, TextInput} from "react-native-paper";
import {UpdateTeacherEducationHook} from "../../../hooks/TeacherHooks/UpdateTeacherEducationHook";

export const UpdateTeacherEducation: React.FC = () => {
    const route = useRoute();
    const {
        teacherId: Id,
        degree: initialDegree,
        semester: initialSemester,
        departmentName: initialDepartmentName,

    } = route.params as {

        teacherId: string,
        degree: string,
        semester: number,
        departmentName: string
    };

    const [updateTeacherEducationPayload, setUpdateTeacherEducationPayload] = useState<UpdateTeacherEducationPayload>({
        teacherId: Id,
        degree: initialDegree,
        semester: initialSemester,
        departmentName: initialDepartmentName,
    });

    const [semester, setSemester] = useState<number>(initialSemester);

    const [degree, setDegree] = useState<string>(initialDegree);
    const [departmentName, setDepartmentName] = useState<string>(initialDegree);

    const {updatingEducation, updateEducationResponse, updateEducation} = UpdateTeacherEducationHook();

    const updateTeacherEducation = () => {

        setUpdateTeacherEducationPayload({
            ...updateTeacherEducationPayload,
            departmentName: departmentName,
            semester: semester,
            degree: degree
        });

        if (updateTeacherEducationPayload.departmentName && updateTeacherEducationPayload.degree) {
            updateEducation(updateTeacherEducationPayload)
        }
    };

    useEffect(() => {
        if (updateEducationResponse && updateEducationResponse.success) {
            Alert.alert("Education Updated", "Your Education has been updated successfully.");
        }
    }, [updateEducationResponse]);

    return (
        <SafeAreaProvider>
            <SafeAreaView style={{flex: 1}}>
                <Card mode="elevated" style={styles.card}>
                    <Card.Title title="Update Profile"/>
                    <Card.Content>
                        <TextInput
                            label="Department"
                            value={departmentName}
                            onChangeText={text => setDepartmentName(text)}
                            mode="outlined"
                        />
                        <TextInput
                            label="Degree"
                            value={degree}
                            onChangeText={text => setDegree(text)}
                            mode="outlined"
                        />
                        <TextInput
                            label="Semester"
                            mode="outlined"
                            multiline
                            numberOfLines={5}
                            value={semester.toString()}
                            onChangeText={text => setSemester(parseInt(text))}
                        />
                    </Card.Content>
                    <Card.Actions>
                        <Button
                            mode="contained"
                            onPress={updateTeacherEducation}
                        >
                            Update
                        </Button>
                    </Card.Actions>
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
