import React, {useEffect, useState} from "react";
import {SafeAreaProvider, SafeAreaView} from "react-native-safe-area-context";
import {Button, Card, Chip, Text} from "react-native-paper";
import {StyleSheet} from "react-native";
import {GetStudentInfoHook} from "../../hooks/StudentHooks/GetStudentInfoHook";
import AsyncStorage from "@react-native-async-storage/async-storage";
import {NavigationProp, useNavigation} from "@react-navigation/native";

export const StudentInfo: React.FC = () => {

    const {studentResponse, fetchStudent, loading} = GetStudentInfoHook();
    const navigation: NavigationProp<any, any> = useNavigation();

    useEffect(() => {
        getStudentInfo();
    }, []);

    const getStudentInfo = async () => {
        let studentId = await AsyncStorage.getItem('studentId');
        console.log(studentId);
        if (studentId) {
            fetchStudent(studentId);
        }
    }
    const handleProfile = () => {
        if (studentResponse && studentResponse.success) {
            navigation.navigate('UpdateProfile', {
                studentId: studentResponse.data.studentId,
                studentName: studentResponse.data.studentName,
                description: studentResponse.data.descriptions
            });
        }
    }
    const handleEducation = () => {
        if (studentResponse && studentResponse.success) {
            navigation.navigate('UpdateEducation', {
                studentId: studentResponse.data.studentId,
                degree: studentResponse.data.degree,
                semester: studentResponse.data.semester,
                departmentName: studentResponse.data.departmentName
            });
        }
    }
    // const handleSubject = () => {
    //     if (studentResponse && studentResponse.success) {
    //         navigation.navigate('UpdateSubjects', {
    //             studentId: studentResponse.data.studentId,
    //             subjects: studentResponse.data.subjects,
    //         });
    //     }
    // }
    return (
        <SafeAreaProvider>
            <SafeAreaView style={{flex: 1}}>
                {studentResponse && studentResponse.success ? (
                    <>
                        <Card mode="elevated" style={styles.card}>
                            <Card.Title title="Profile"/>
                            <Card.Content>
                                <Text style={styles.field}>
                                    <Text style={styles.label}>Student Name:</Text> {studentResponse.data.studentName}
                                </Text>
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
                            </Card.Content>
                            <CardActions>
                                <Button mode="contained" onPress={handleProfile}>Edit</Button>
                            </CardActions>
                        </Card>
                        <Card mode="elevated" style={styles.card}>
                            <Card.Title title="Education"/>
                            <Card.Content>
                                <Text style={styles.field}>
                                    <Text style={styles.label}>Department
                                        Name:</Text> {studentResponse.data.departmentName}
                                </Text>
                                <Text style={styles.field}>
                                    <Text style={styles.label}>Degree:</Text> {studentResponse.data.degree}
                                </Text>
                                <Text style={styles.field}>
                                    <Text style={styles.label}>Semester:</Text> {studentResponse.data.semester}
                                </Text>
                            </Card.Content>
                            <CardActions>
                                <Button mode="contained" onPress={handleEducation}>Edit</Button>
                            </CardActions>
                        </Card>
                        <Card mode="elevated" style={styles.card}>
                            <Card.Title title="Subjects"/>
                            <Card.Content>
                                {studentResponse.data.subjects.map((subject, index) => (
                                    <Chip key={index}>
                                        {subject.subjectName}
                                    </Chip>
                                ))}
                            </Card.Content>
                            <CardActions>
                                <Button mode="contained" onPress={handleSubject}>Edit</Button>
                            </CardActions>

                        </Card>
                    </>
                ) : (
                    <Text>No data available</Text>
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