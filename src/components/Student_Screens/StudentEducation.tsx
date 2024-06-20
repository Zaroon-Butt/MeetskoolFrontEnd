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

const StudentEducation: React.FC = () => {
  const [initialCreateStudentEducation, setInitialCreateStudentEducation] = useState<CreateStudentEducationPayLoad>({
    studentId: "",
    departmentName: "",
    degree: "",
    semester: 0
  });

  const navigation = useNavigation();
  const [CreateStudentEducationPayLoad, setCreateStudentEducationPayload] = useState<CreateStudentEducationPayLoad>(initialCreateStudentEducation);

  const { addEducation, creatingStudentEducation, studentEducationResponse } = CreateStudentEducationHook();

  const StudentEducationInfo = async () => {
    let studentId = await AsyncStorage.getItem('studentId');
    if (studentId && CreateStudentEducationPayLoad.departmentName && CreateStudentEducationPayLoad.degree && CreateStudentEducationPayLoad.semester) {
      setCreateStudentEducationPayload({ ...CreateStudentEducationPayLoad, studentId: studentId });
      addEducation(CreateStudentEducationPayLoad);
      navigation.navigate("StudentHome" as never);
    } else {
      Alert.alert("Please fill all the fields");
    }
  }

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
              value={CreateStudentEducationPayLoad.departmentName}
              onChangeText={(text) => setCreateStudentEducationPayload({ ...CreateStudentEducationPayLoad, departmentName: text })}
            />
            <TextInput
              label="Degree"
              placeholder="Enter Degree"
              mode="outlined"
              style={styles.input}
              value={CreateStudentEducationPayLoad.degree}
              onChangeText={(text) => setCreateStudentEducationPayload({ ...CreateStudentEducationPayLoad, degree: text })}
            />
            <TextInput
              label="Semester"
              placeholder="Enter Semester"
              mode="outlined"
              style={styles.input}
              value={CreateStudentEducationPayLoad.semester.toString()}
              onChangeText={(text) => setCreateStudentEducationPayload({ ...CreateStudentEducationPayLoad, semester: Number(text) })}
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
