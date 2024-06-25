import React, { useEffect, useState } from "react";
import { View, SafeAreaView, StyleSheet, Alert } from "react-native";
import { Button, Card, TextInput } from "react-native-paper";
import { CreateStudentEducationHook } from "../../hooks/StudentHooks/CreateStudentEducationHook";
import { useNavigation } from "@react-navigation/native";
import AsyncStorage from '@react-native-async-storage/async-storage';

interface CreateStudentEducationPayLoad {
  studentId: string;
  departmentName: string;
  degree: string;
  semester: number;
}

type StudentSubjectNavigationProp = {
  navigate(arg0: never, arg1: { studentId: string; }): unknown;
  StudentSubject: { studentId: string };
};

const StudentEducation: React.FC = () => {
  const [initialCreateStudentEducation, setInitialCreateStudentEducation] = useState<CreateStudentEducationPayLoad>({
    studentId: "",
    departmentName: "",
    degree: "",
    semester: 0
  });

  const navigation = useNavigation<StudentSubjectNavigationProp>();
  const [createStudentEducationPayload, setCreateStudentEducationPayload] = useState<CreateStudentEducationPayLoad>(initialCreateStudentEducation);

  const { addEducation, creatingStudentEducation, studentEducationResponse } = CreateStudentEducationHook();

  const StudentEducationInfo = async () => {
    let studentId = await AsyncStorage.getItem('studentId');
    if (studentId && createStudentEducationPayload.departmentName && createStudentEducationPayload.degree && createStudentEducationPayload.semester) {
      const payload = { ...createStudentEducationPayload, studentId: studentId };
      setCreateStudentEducationPayload(payload);
      addEducation(payload);
      navigation.navigate("StudentSubject" as never, { studentId: studentId });
    } else {
      Alert.alert("Please fill all the fields");
    }
  };

  useEffect(() => {
    if (studentEducationResponse && !creatingStudentEducation && studentEducationResponse.success) {
      console.log(studentEducationResponse);
      // Navigate to Education screen here if needed
    }
  }, [studentEducationResponse]);

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
              value={createStudentEducationPayload.departmentName}
              onChangeText={(text) => setCreateStudentEducationPayload({ ...createStudentEducationPayload, departmentName: text })}
            />
            <TextInput
              label="Degree"
              placeholder="Enter Degree"
              mode="outlined"
              style={styles.input}
              value={createStudentEducationPayload.degree}
              onChangeText={(text) => setCreateStudentEducationPayload({ ...createStudentEducationPayload, degree: text })}
            />
            <TextInput
              label="Semester"
              placeholder="Enter Semester"
              mode="outlined"
              style={styles.input}
              value={createStudentEducationPayload.semester.toString()}
              onChangeText={(text) => setCreateStudentEducationPayload({ ...createStudentEducationPayload, semester: Number(text) })}
            />
          </Card.Content>
          <Card.Actions style={styles.cardActions}>
            <Button mode="contained" style={styles.button} onPress={StudentEducationInfo}>
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

export default StudentEducation;
