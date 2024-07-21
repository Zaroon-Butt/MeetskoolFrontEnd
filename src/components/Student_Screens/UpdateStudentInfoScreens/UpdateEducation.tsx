import React, { useEffect, useState } from "react";
import { useRoute, RouteProp } from "@react-navigation/native";
import { Alert, StyleSheet, View } from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { Button, Card, TextInput } from "react-native-paper";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { UpdateStudentEducationHook } from "../../../hooks/StudentHooks/UpdateStudentEducationHook";
import BottomNavigationBar from "../../AppBars/BottomNavigationBar";
import TopNav from "../../AppBars/TopNav";

type RouteParams = {
  params: {
    studentId: string;
    degree: string;
    semester: number;
    departmentName: string;
  };
};

export const UpdateEducation: React.FC = () => {
  const route = useRoute<RouteProp<RouteParams, "params">>();

  const [studentId, setStudentId] = useState<string | undefined>();

  const fetchStudentId = async () => {
    try {
      const id = await AsyncStorage.getItem("studentId");
      console.log(id);
      if (id) {
        setStudentId(id);
      }
    } catch (error) {
      console.error("Error fetching student ID", error);
    }
  };

  useEffect(() => {
    fetchStudentId();
  }, []);

  const {
    studentId: routeStudentId = "",
    degree: initialDegree = "",
    semester: initialSemester = 1,
    departmentName: initialDepartmentName = "",
  } = route.params || {};

  const [updateStudentEducationPayload, setUpdateStudentEducationPayload] =
    useState({
      studentId: routeStudentId,
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
    UpdateStudentEducationHook();

  const updateStudentEducation = () => {
    const payload = {
      ...updateStudentEducationPayload,
      studentId: studentId || routeStudentId,
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
      <SafeAreaView style={{ backgroundColor: "#f3e5f5", flex: 1 }}>
        <View style={styles.header}>
          <TopNav />
        </View>
        <View style={styles.container}>
          <Card mode="elevated" style={styles.card}>
            <Card.Title title="Update Education" />
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
              <Button mode="contained" onPress={updateStudentEducation}>
                Update
              </Button>
            </Card.Actions>
          </Card>
        </View>
        <View style={styles.BottomNav}>
          <BottomNavigationBar />
        </View>
      </SafeAreaView>
    </SafeAreaProvider>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  card: {
    width: "90%",
    maxWidth: 400,
  },
  field: {
    marginBottom: 10,
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
});
