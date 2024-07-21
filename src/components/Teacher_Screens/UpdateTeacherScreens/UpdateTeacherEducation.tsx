import React, { useEffect, useState } from "react";
import { useRoute } from "@react-navigation/native";
import { Alert, StyleSheet, View } from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { Button, Card, TextInput } from "react-native-paper";
import { UpdateTeacherEducationHook } from "../../../hooks/TeacherHooks/UpdateTeacherEducationHook";
import AsyncStorage from "@react-native-async-storage/async-storage";
import BottomNavigationBar from "../../AppBars/BottomNavigationBar";
import TopNav from "../../AppBars/TopNav";

export const UpdateTeacherEducation: React.FC = () => {
  const route = useRoute();
  const {
    teacherId: routeTeacherId,
    degree: initialDegree,
    semester: initialSemester,
    departmentName: initialDepartmentName,
  } = route.params as {
    teacherId: string;
    degree: string;
    semester: number;
    departmentName: string;
  };

  const [teacherId, setTeacherId] = useState<string | undefined>();

  const fetchTeacherId = async () => {
    try {
      const id = await AsyncStorage.getItem("TeacherId");
      console.log(id);
      if (id) {
        setTeacherId(id);
      }
    } catch (error) {
      console.error("Error fetching teacher ID", error);
    }
  };

  useEffect(() => {
    fetchTeacherId();
  }, []);

  const [updateTeacherEducationPayload, setUpdateTeacherEducationPayload] =
    useState({
      teacherId: routeTeacherId,
      degree: initialDegree,
      semester: initialSemester,
      departmentName: initialDepartmentName,
    });

  const [semester, setSemester] = useState<number>(initialSemester);
  const [degree, setDegree] = useState<string>(initialDegree);
  const [departmentName, setDepartmentName] = useState<string>(
    initialDepartmentName
  );

  const { updatingEducation, updateEducationResponse, updateEducation } =
    UpdateTeacherEducationHook();

  const updateTeacherEducation = () => {
    const payload = {
      ...updateTeacherEducationPayload,
      teacherId: teacherId || routeTeacherId,
      departmentName,
      semester,
      degree,
    };

    if (payload.departmentName && payload.degree) {
      updateEducation(payload);
    }
  };

  useEffect(() => {
    if (updateEducationResponse && updateEducationResponse.success) {
      Alert.alert(
        "Education Updated",
        "Your education has been updated successfully."
      );
    }
  }, [updateEducationResponse]);

  return (
    <SafeAreaProvider>
      <SafeAreaView style={{ flex: 1 }}>
        <View style={styles.header}>
          <TopNav />
        </View>
        <Card mode="elevated" style={styles.card}>
          <Card.Title title="Update Profile" />
          <Card.Content>
            <TextInput
              label="Department"
              value={departmentName}
              onChangeText={(text) => setDepartmentName(text)}
              mode="outlined"
            />
            <TextInput
              label="Degree"
              value={degree}
              onChangeText={(text) => setDegree(text)}
              mode="outlined"
            />
            <TextInput
              label="Semester"
              mode="outlined"
              value={semester.toString()}
              onChangeText={(text) => setSemester(parseInt(text))}
            />
          </Card.Content>
          <Card.Actions>
            <Button mode="contained" onPress={updateTeacherEducation}>
              Update
            </Button>
          </Card.Actions>
        </Card>
        <View style={styles.BottomNav}>
          <BottomNavigationBar />
        </View>
      </SafeAreaView>
    </SafeAreaProvider>
  );
};

const styles = StyleSheet.create({
  card: {
    margin: 10,
  },
  field: {
    marginBottom: 10,
  },
  label: {
    fontWeight: "bold",
  },
  BottomNav: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#f3e5f5",
  },
  modalContainer: {
    backgroundColor: "white",
    padding: 20,
    margin: 20,
    borderRadius: 10,
  },
});
