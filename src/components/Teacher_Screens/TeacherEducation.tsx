import React, { useEffect, useState } from "react";
import { View, SafeAreaView, StyleSheet, Alert } from "react-native";
import { Button, Card, TextInput } from "react-native-paper";
import { CreateTeacherEducationHook } from "../../hooks/TeacherHooks/CreateTeacherEducationHook";
import { useNavigation } from "@react-navigation/native";
import AsyncStorage from '@react-native-async-storage/async-storage';

interface CreateTeacherEducationPayLoad {
    TeacherId: string;
    departmentName: string;
    degree: string;
    semester: number;
}

type TeacherSubjectNavigationProp = {
    navigate(arg0: never, arg1: { TeacherId: string; }): unknown;
    TeacherSubject: { TeacherId: string };
};

const TeacherEducation: React.FC = () => {
    const [initialCreateTeacherEducation, setInitialCreateTeacherEducation] = useState<CreateTeacherEducationPayLoad>({
        TeacherId: "",
        departmentName: "",
        degree: "",
        semester: 0
    });

    const navigation = useNavigation<TeacherSubjectNavigationProp>();
    const [createTeacherEducationPayload, setCreateTeacherEducationPayload] = useState<CreateTeacherEducationPayLoad>(initialCreateTeacherEducation);

    const { addEducation, creatingTeacherEducation, teacherEducationResponse } = CreateTeacherEducationHook();

    const TeacherEducationInfo = async () => {
        let TeacherId = await AsyncStorage.getItem('TeacherId');
        if (TeacherId && createTeacherEducationPayload.departmentName && createTeacherEducationPayload.degree && createTeacherEducationPayload.semester) {
            const payload = { ...createTeacherEducationPayload, TeacherId: TeacherId };
            setCreateTeacherEducationPayload(payload);
            addEducation(payload);
            navigation.navigate("TeacherSubject" as never, { TeacherId: TeacherId });
        } else {
            Alert.alert("Please fill all the fields");
        }
    };

    useEffect(() => {
        if (teacherEducationResponse && !creatingTeacherEducation && teacherEducationResponse.success) {
            console.log(teacherEducationResponse);
            // Navigate to Education screen here if needed
        }
    }, [teacherEducationResponse]);

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.cardContainer}>
                <Card mode="elevated">
                    <Card.Cover
                        source={{
                            uri: "https://drive.google.com/thumbnail?sz=w1000&id=1qVT9iP4PM-w-lcy5GqNPx1W_qayJXpwG",
                        }}
                        style={styles.cardCover}
                    />
                </Card>
                <Card>
                    <Card.Content>
                        <TextInput
                            label="Department Name"
                            placeholder="Enter Department Name"
                            mode="outlined"
                            style={styles.input}
                            value={createTeacherEducationPayload.departmentName}
                            onChangeText={(text) => setCreateTeacherEducationPayload({
                                ...createTeacherEducationPayload,
                                departmentName: text
                            })}
                        />
                        <TextInput
                            label="Degree"
                            placeholder="Enter Degree"
                            mode="outlined"
                            style={styles.input}
                            value={createTeacherEducationPayload.degree}
                            onChangeText={(text) => setCreateTeacherEducationPayload({
                                ...createTeacherEducationPayload,
                                degree: text
                            })}
                        />
                        <TextInput
                            label="Semester"
                            placeholder="Enter Semester"
                            mode="outlined"
                            style={styles.input}
                            value={createTeacherEducationPayload.semester.toString()}
                            onChangeText={(text) => setCreateTeacherEducationPayload({
                                ...createTeacherEducationPayload,
                                semester: Number(text)
                            })}
                        />
                    </Card.Content>
                    <Card.Actions style={styles.cardActions}>
                        <Button mode="contained" style={styles.button} onPress={TeacherEducationInfo}>
                            Next
                        </Button>
                    </Card.Actions>
                </Card>
            </View>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#D6BCFA",
        justifyContent: "center",
        alignItems: "center",
    },
    cardContainer: {
        width: "90%",
    },
    cardCover: {
        height: 200,
        borderTopLeftRadius: 8,
        borderTopRightRadius: 8,
    },
    input: {
        marginVertical: 5,
    },
    cardActions: {
        justifyContent: "space-between",
        paddingHorizontal: 16,
        paddingBottom: 16,
    },
    button: {
        alignItems: "center",
        marginHorizontal: 10,
    },
});

export default TeacherEducation;
