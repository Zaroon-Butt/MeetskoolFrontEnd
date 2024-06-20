import React from "react";
import { View, StyleSheet } from "react-native";
import { Button, Card, Text } from "react-native-paper";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";


export const TeacherInfoCard: React.FC<{ teacherInfo: GetTeacherInfoResponse | undefined }> = ({ teacherInfo }) => {
    return (
      <SafeAreaProvider>
        <SafeAreaView style={{ flex: 1 }}>
          {teacherInfo && teacherInfo.success ? (
            <Card mode="elevated" style={styles.card}>
              <Card.Title title={teacherInfo.data.studentName} />
              <Card.Content>
                <Text style={styles.field}>
                  <Text style={styles.label}>Description:</Text> {teacherInfo.data.descriptions}
                </Text>
                <Text style={styles.field}>
                  <Text style={styles.label}>Created At:</Text> {new Date(teacherInfo.data.createdAt).toLocaleString()}
                </Text>
                <Text style={styles.field}>
                  <Text style={styles.label}>Total Order:</Text> {teacherInfo.data.totalOrder}
                </Text>
                <Text style={styles.field}>
                  <Text style={styles.label}>Department Name:</Text> {teacherInfo.data.departmentName}
                </Text>
                <Text style={styles.field}>
                  <Text style={styles.label}>Degree:</Text> {teacherInfo.data.degree}
                </Text>
                <Text style={styles.field}>
                  <Text style={styles.label}>Semester:</Text> {teacherInfo.data.semester}
                </Text>
                <Text style={styles.field}>
                  <Text style={styles.label}>Subject Name:</Text> {teacherInfo.data.subjectName}
                </Text>
                <Text style={styles.field}>
                  <Text style={styles.label}>Student Name:</Text> {teacherInfo.data.studentName}
                </Text>
              </Card.Content>
              <Card.Actions>
                <Button mode="contained">View Profile</Button>
              </Card.Actions>
            </Card>
          ) : (
            <Text>No teachers available</Text>
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