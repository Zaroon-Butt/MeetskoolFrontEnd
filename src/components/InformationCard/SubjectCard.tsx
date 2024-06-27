import { useNavigation } from "@react-navigation/native";
import React from "react";
import { Button, Card, Text } from "react-native-paper";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { NavigationProp } from "@react-navigation/native";
import { AddStudentSubject } from "../../hooks/SubjectHooks/AddStudentSubjectHook";
import { Alert } from "react-native";

interface SubjectCardProps {
  subjectList: GetSubjectListResponse | undefined;
  onAddSubject: (subjectName: string) => void; // Callback function to add subject
  studentId: string ; // Add studentId prop
}

export const SubjectCard: React.FC<SubjectCardProps> = ({
  subjectList,
  onAddSubject,
  studentId,
}) => {
  const navigation: NavigationProp<any, any> = useNavigation();

  const { addSubject, isAddingSubject, addSubjectResponse } =AddStudentSubject();

  const handleAddSubject = async (subjectId: string, subjectName: string) => {
    if (studentId) {
      await addSubject({ studentId: studentId , subjectId });
      if (addSubjectResponse && addSubjectResponse.success) {
        onAddSubject(subjectName); // Call parent callback function
      } else {
        Alert.alert("Failed to add subject");
      }
    } else {
      Alert.alert("Student ID not found");
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
