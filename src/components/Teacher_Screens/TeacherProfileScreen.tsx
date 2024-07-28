import React, {useEffect} from "react";
import {GetStudentInfoHook} from "../../hooks/StudentHooks/GetStudentInfoHook";
import {NavigationProp, useNavigation} from "@react-navigation/native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import {SafeAreaProvider, SafeAreaView} from "react-native-safe-area-context";
import {Button, Card, Chip, Text} from "react-native-paper";
import {StyleSheet} from "react-native";
import {GetTeacherInfoHook} from "../../hooks/TeacherHooks/GetTeacherInfoHook";

export const TeacherProfile: React.FC = () => {

    const {fetchTeacherInfo, loading, teacherInfo} = GetTeacherInfoHook();
    const navigation: NavigationProp<any, any> = useNavigation();

    useEffect(() => {
        getTeacherInfo();
    }, []);

    const getTeacherInfo = async () => {
        let teacherId = await AsyncStorage.getItem('teacherId');
        if (teacherId) {
            fetchTeacherInfo(teacherId);
        }
    }
    const handleProfile = () => {
        if (teacherInfo && teacherInfo.success) {
            navigation.navigate('UpdateTeacherProfile', {
                teacherId: teacherInfo.data.teacherId,
                teacherName: teacherInfo.data.teacherName,
                description: teacherInfo.data.descriptions
            });
        }
    }
    const handleEducation = () => {
        if (teacherInfo && teacherInfo.success) {
            navigation.navigate('UpdateTeacherEducation', {
                teacherId: teacherInfo.data.teacherId,
                degree: teacherInfo.data.degree,
                semester: teacherInfo.data.semester,
                departmentName: teacherInfo.data.departmentName
            });
        }
    }
    const handleSubject = () => {
        if (teacherInfo && teacherInfo.success) {
            navigation.navigate('UpdateSubjects', {
                teacherId: teacherInfo.data.teacherId,
                subjects: teacherInfo.data.subjects,
            });
        }
    }
    return (
        <SafeAreaProvider>
            <SafeAreaView style={{flex: 1}}>
                {teacherInfo && teacherInfo.success ? (
                    <>
                        <Card mode="elevated" style={styles.card}>
                            <Card.Title title="Profile"/>
                            <Card.Content>
                                <Text style={styles.field}>
                                    <Text style={styles.label}>Student Name:</Text> {teacherInfo.data.teacherName}
                                </Text>
                                <Text style={styles.field}>
                                    <Text style={styles.label}>Description:</Text> {teacherInfo.data.descriptions}
                                </Text>
                                <Text style={styles.field}>
                                    <Text style={styles.label}>Created
                                        At:</Text> {new Date(teacherInfo.data.createdAt).toLocaleString()}
                                </Text>
                                <Text style={styles.field}>
                                    <Text style={styles.label}>Total Order:</Text> {teacherInfo.data.totalOrder}
                                </Text>
                            </Card.Content>
                            <Card.Actions>
                                <Button mode="contained" onPress={handleProfile}>Edit</Button>
                            </Card.Actions>
                        </Card>
                        <Card mode="elevated" style={styles.card}>
                            <Card.Title title="Education"/>
                            <Card.Content>
                                <Text style={styles.field}>
                                    <Text style={styles.label}>Department
                                        Name:</Text> {teacherInfo.data.departmentName}
                                </Text>
                                <Text style={styles.field}>
                                    <Text style={styles.label}>Degree:</Text> {teacherInfo.data.degree}
                                </Text>
                                <Text style={styles.field}>
                                    <Text style={styles.label}>Semester:</Text> {teacherInfo.data.semester}
                                </Text>
                            </Card.Content>
                            <Card.Actions> <Button mode="contained" onPress={handleEducation}>Edit</Button>
                            </Card.Actions>
                        </Card>
                        <Card mode="elevated" style={styles.card}>
                            <Card.Title title="Subjects"/>
                            <Card.Content>
                                {teacherInfo.data.subjects.map((subject, index) => (
                                    <Chip key={index}>
                                        {subject.subjectName}
                                    </Chip>
                                ))}
                            </Card.Content>
                            <Card.Actions> <Button mode="contained" onPress={handleSubject}>Edit</Button>
                            </Card.Actions>
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