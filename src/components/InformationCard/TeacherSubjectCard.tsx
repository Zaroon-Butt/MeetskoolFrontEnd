import React from "react";
import { Button, Card, Text } from "react-native-paper";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { NavigationProp, useNavigation } from "@react-navigation/native";
import { AddTeacherSubject } from "../../hooks/SubjectHooks/AddTeacherSubjectHook"; 
import { Alert } from "react-native";

interface SubjectCardProps {
  subjectList: GetSubjectListResponse | undefined;
  onAddSubject: (subjectId: string) => void;
  teacherId: string; 
}

export const TeacherSubjectCard: React.FC<SubjectCardProps> = ({
  subjectList,
  onAddSubject,
  teacherId,

}) => {
  const navigation: NavigationProp<any, any> = useNavigation();

  const { addSubject, isAddingSubject, addSubjectResponse } = AddTeacherSubject(); // Use AddStudentSubject hook

  const handleAddSubject = async (subjectId: string, subjectName: string) => {
    if (teacherId) {
      await addSubject({ teacherId , subjectId }); // Here use teacherId as studentId
      if (addSubjectResponse && addSubjectResponse.success) {
        onAddSubject(subjectName); // Call parent callback function subject name changed to subjectId
      } else {
        Alert.alert("Failed to add subject");
      }
    } else {
      Alert.alert("Teacher ID not found");
    }
  };

  return (
    <SafeAreaProvider>
      <SafeAreaView style={{ flex: 1 }}>
        {subjectList && subjectList.success ? (
          subjectList.data.map((subject) => (
            <Card
              mode="elevated"
              key={subject.subjectId}
              style={{ marginBottom: 10 }}
            >
              <Card.Title title={subject.subjectName} />
              <Card.Actions style={{ justifyContent: "flex-end" }}>
                <Button
                  mode="contained"
                  onPress={() =>
                    handleAddSubject(subject.subjectId, subject.subjectName)
                  }
                  loading={isAddingSubject}
                >
                  Add
                </Button>
              </Card.Actions>
            </Card>
          ))
        ) : (
          <Text>No subjects available</Text>
        )}
      </SafeAreaView>
    </SafeAreaProvider>
  );
};
