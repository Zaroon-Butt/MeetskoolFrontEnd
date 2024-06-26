import React, {useEffect, useState} from "react";
import {SafeAreaProvider, SafeAreaView} from "react-native-safe-area-context";
import {Button, Card, Chip, Text} from "react-native-paper";
import {StyleSheet} from "react-native";
import {GetStudentInfoHook} from "../../hooks/StudentHooks/GetStudentInfoHook";
import AsyncStorage from "@react-native-async-storage/async-storage";

export const StudentInfo: React.FC = () => {

    const {studentResponse, fetchStudent, loading} = GetStudentInfoHook();

    useEffect(() => {
        getStudentInfo();
    }, []);

    const getStudentInfo = async () => {
/*        let studentId = await AsyncStorage.getItem('studentId');*/
        let studentId = "a3f6d1c7-9b2b-4e34-8b3e-7d5d4f213c8d";
        if (studentId) {
            fetchStudent(studentId);
        }
    }
    return (
        <SafeAreaProvider>
            <SafeAreaView style={{flex: 1}}>
                {studentResponse && studentResponse.success ? (
                    <Card mode="elevated" style={styles.card}>
                        <Card.Title title={studentResponse.data.studentName}/>
                        <Card.Content>
                            <Text style={styles.field}>
                                <Text style={styles.label}>Description:</Text> {studentResponse.data.descriptions}
                            </Text>
                            <Text style={styles.field}>
                                <Text style={styles.label}>Created
                                    At:</Text> {new Date(studentResponse.data.createdAt).toLocaleString()}
                            </Text>
                            <Text style={styles.field}>
                                <Text style={styles.label}>Total Order:</Text> {studentResponse.data.totalOrder}
                            </Text>
                            <Text style={styles.field}>
                                <Text style={styles.label}>Department Name:</Text> {studentResponse.data.departmentName}
                            </Text>
                            <Text style={styles.field}>
                                <Text style={styles.label}>Degree:</Text> {studentResponse.data.degree}
                            </Text>
                            <Text style={styles.field}>
                                <Text style={styles.label}>Semester:</Text> {studentResponse.data.semester}
                            </Text>
                            {studentResponse.data.subjects.map((subject, index) => (
                                <Chip
                                    key={index}
                                    icon="Subjects"
                                >
                                    {subject.subjectName}
                                </Chip>
                            ))}
                            <Text style={styles.field}>
                                <Text style={styles.label}>Student Name:</Text> {studentResponse.data.studentName}
                            </Text>
                        </Card.Content>
                        <Card.Actions>
                            <Button mode="contained">View Profile</Button>
                        </Card.Actions>
                    </Card>
                ) : (
                    <Text>No Student Found</Text>
                )}
            </SafeAreaView>
        </SafeAreaProvider>
    );
};

const styles = StyleSheet.create({
    card: {
        width: '100%',
        marginVertical: 10,
    },
    field: {
        marginBottom: 5,
    },
    label: {
        fontWeight: 'bold',
    },
});