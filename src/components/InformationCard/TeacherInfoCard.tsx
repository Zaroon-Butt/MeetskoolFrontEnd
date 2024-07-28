import React from "react";
import {View, StyleSheet} from "react-native";
import {Button, Card, Chip, Text} from "react-native-paper";
import {SafeAreaProvider, SafeAreaView} from "react-native-safe-area-context";
import TopNav from "../AppBars/TopNav";

export const TeacherInfoCard: React.FC<{
    teacherInfo: GetTeacherInfoResponse | undefined;
}> = ({teacherInfo}) => {
    return (
        //hello hamza 
        <SafeAreaProvider>
            <SafeAreaView style={{flex: 1}}>
                {teacherInfo && teacherInfo.success ? (
                    <>
                        <Card mode="elevated" style={styles.card}>
                            <Card.Title title="Profile"/>
                            <Card.Content>
                                <Text style={styles.field}>
                                    <Text style={styles.label}>Teacher Name:</Text> {teacherInfo.data.teacherName}
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
        width: "100%",
        marginVertical: 10,
    },
    field: {
        marginBottom: 5,
    },
    label: {
        fontWeight: "bold",
    },
});
